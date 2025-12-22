import axios from 'axios'
import lodashGet from 'lodash/get'
import { store } from '@/redux/store.js'
import { removeAuth, addToken } from '@/redux/slices/authSlice.js'
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
        // headers: {
        //     // 'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': '*'
        // }
    })

    const getAuth = () => {
        const state = store.getState()

        return lodashGet(state, 'auth.accessToken', null)
    }

    axiosApi.interceptors.request.use((config) => {
        const token = getAuth();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    axiosApi.interceptors.response.use(
        res => res,
        err => Promise.reject(err)
    );

    return axiosApi
}

export default AxiosAPI
