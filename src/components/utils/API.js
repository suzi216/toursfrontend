import axios from 'axios'
import lodashGet from 'lodash/get'
import {store} from '@/redux/store.js'
import {removeAuth, addToken} from '@/redux/slices/authSlice.js'
import AuthAPI from '../utils/AuthAPI'

let isRefreshing = false;
let failedRequestQueue = [];

const processQueue = (error, token = null) => {
    failedRequestQueue.forEach((prom) => {
        return (error) ? prom.reject(error) : prom.resolve(token)
    });
    failedRequestQueue = [];
};

const AxiosAPI = (baseURL) => {
    const axiosApi = axios.create({
        baseURL,
        headers: {
            // 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })

    const getAuth = () => {
        const state = store.getState()
        const accessToken = lodashGet(state, 'auth.user.accessToken', null)
        return accessToken ? `Bearer ${accessToken}` : null
    }

    axiosApi.interceptors.request.use(
        (config) => {
            const auth = getAuth();
            if (auth) {
                config.headers.Authorization = auth;
            }
            return config;
        },
        async () => {
            const { dispatch } = store;
            await dispatch(removeAuth());
        }
    );

    axiosApi.interceptors.response.use(
        (res) => res,
        (err) => {
            const originalRequest = err.config;

            if (err?.response?.status === 401 && !originalRequest._retry) {
                if (!originalRequest._retry) {
                    if (isRefreshing) {
                        return new Promise((resolve, reject) => {
                            failedRequestQueue.push({ resolve, reject });
                        }).then((accessToken) => {
                            originalRequest.headers['Authorization'] = 'Bearer ' + accessToken;
                            return axiosApi(originalRequest);
                        }).catch((err) => Promise.reject(err));
                    } else {
                        const state = store.getState();
                        const refreshToken = lodashGet(state, 'auth.user.accessToken', null);

                        originalRequest._retry = true;
                        isRefreshing = true;

                        return new Promise((resolve, reject) => {
                            AuthAPI.post('/api/auth/refresh-token', { refreshToken })
                                .then(async (response) => {
                                    const newToken = response.data.accessToken;

                                    const { dispatch } = store;
                                    await dispatch(addToken(newToken));

                                    const updatedToken = lodashGet(state, 'auth.user.accessToken', null);
                                    processQueue(null, updatedToken);
                                    resolve(axiosApi(originalRequest));
                                })
                                .catch(async (err) => {
                                    processQueue(err);
                                    const { dispatch } = store;
                                    await dispatch(removeAuth());
                                    reject(err);
                                })
                                .then(() => isRefreshing = false);
                        });
                    }
                }
            }

            return Promise.reject(err);
        },
    );

    return axiosApi
}

export default AxiosAPI
