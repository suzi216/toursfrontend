import { createSlice } from '@reduxjs/toolkit'
import lodashGet from 'lodash/get'

const initialState = {}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    addLanguage: (state, action) => {
      state.lang = action.payload
    }
  }
})

export const { addLanguage } = languageSlice.actions

export const languageSelector = (state) => lodashGet(state, 'language.lang', '')

export default languageSlice.reducer
