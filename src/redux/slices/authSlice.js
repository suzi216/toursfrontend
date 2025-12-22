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
    }
  }
})

export const { addAuth, removeAuth, addToken  } = authSlice.actions
export const roleSelector = (state) => lodashGet(state, 'auth.decoded.role', '')
export const tokenSelector = (state) => lodashGet(state, 'auth.accessToken', '')

export default authSlice.reducer
