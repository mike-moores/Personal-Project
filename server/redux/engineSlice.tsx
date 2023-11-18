import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  play: false,
  loadingScreen: true,
}

export const engineSlice = createSlice({
  name: 'engine',
  initialState,
  reducers: {
    setReady: (state, action) => {
      state.play = action.payload
    },
    setLoadingScreen: (state, action) => {
      state.loadingScreen = action.payload
    },
  },
})

export const {
  setReady,

  setLoadingScreen,
} = engineSlice.actions
export default engineSlice.reducer
