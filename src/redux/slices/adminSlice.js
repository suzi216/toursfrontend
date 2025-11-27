import { createSlice } from '@reduxjs/toolkit'
import lodashGet from 'lodash/get'

const initialState = {}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addAdmin: (state, action) => {
      return { ...state, ...action.payload }
    }
  }
})

export const { addAdmin } = adminSlice.actions

export const adminSelector = (state) => lodashGet(state, 'admin', '')

export default adminSlice.reducer
