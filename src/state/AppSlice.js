import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pageData: {},
  loading: false,
  error: null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPageData: (state, action) => {
      state.pageData = action.payload
    },
    updatePageData(state, action) {
      const { payload } = action
      const { pageData } = state
      const updatedKeys = Object.keys(payload)
      updatedKeys.forEach(key => {
        pageData[key] = payload[key]
      }) 
    },
    clearPageData: (state) => {
      state.pageData = null
    },

  },
})

// Action creators are generated for each case reducer function
export const { setPageData, updatePageData, clearPageData } = appSlice.actions

export default appSlice.reducer