import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpenedOnMobile: false,
  isOpenedOnDesktop: false
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    openDesktopSidebar: (state) => {
      return { ...state, isOpenedOnDesktop: true }
    },
    closeDesktopSidebar: (state) => {
      return { ...state, isOpenedOnDesktop: false }
    },
    openMobileSidebar: (state) => {
      return { ...state, isOpenedOnMobile: true }
    },
    closeMobileSidebar: (state) => {
      return { ...state, isOpenedOnMobile: false }
    },
    openSidebar: (state) => {
      return { ...state, isOpenedOnMobile: true, isOpenedOnDesktop: true }
    },
    closeSidebar: (state) => {
      return { ...state, isOpenedOnMobile: false, isOpenedOnDesktop: false }
    }
  }
})

export const {
  openDesktopSidebar,
  closeDesktopSidebar,
  openMobileSidebar,
  closeMobileSidebar,
  openSidebar,
  closeSidebar
} = sidebarSlice.actions

export const isMobileSidebarOpenedSelector = (state) => state.sidebar.isOpenedOnMobile
export const isDesktopSidebarOpenedSelector = (state) => state.sidebar.isOpenedOnDesktop

export default sidebarSlice.reducer
