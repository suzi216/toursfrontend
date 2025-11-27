import { createSlice } from '@reduxjs/toolkit'
import lodashGet from 'lodash/get'

const initialState = {}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addAuth: (state, action) => {
      return { ...state, ...action.payload }
    },
    addToken: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          accessToken: action.payload
        }
      }
    },
    removeAuth: () => {
      return {}
    },
    updateUser: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload
        }
      }
    },
    updateUserPermissions: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          permissions: {
            ...action.payload
          }
        }
      }
    },
    updateWorkerDetails: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          assignedCountries: action.payload.assignedCountries,
          workerRole: action.payload.workerRole
        }
      }
    }
  }
})

export const { addAuth, removeAuth, addToken, updateUser, updateUserPermissions, updateWorkerDetails } = authSlice.actions

export const tokenSelector = (state) => lodashGet(state, 'auth.user.accessToken', '')
export const userSelector = (state) => lodashGet(state, 'auth.user', '')
export const rememberMeSelector = (state) => lodashGet(state, 'auth.rememberMe', '')
export const roleSelector = (state) => lodashGet(state, 'auth.user.role', '')
export const workerRoleSelector = (state) => lodashGet(state, 'auth.user.workerRole', '')
export const workerAssignedCountriesSelector = (state) => lodashGet(state, 'auth.user.assignedCountries', '')
export const permissionsSelector = (state) => lodashGet(state, 'auth.user.permissions', '')

export default authSlice.reducer
