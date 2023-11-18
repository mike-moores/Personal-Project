import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  jumping: false,
  bottom: null,
  height: null,
  left: null,
  right: null,
  top: null,
  width: null,
  x: null,
  y: null,
}

export const playerMovementSlice = createSlice({
  name: 'playerMovement',
  initialState,
  reducers: {
    setPlayerJumping: (state, action) => {
      state.jumping = action.payload
    },
    setPlayerBottom: (state, action) => {
      state.bottom = action.payload
    },
    setPlayerHeight: (state, action) => {
      state.height = action.payload
    },
    setPlayerLeft: (state, action) => {
      state.left = action.payload
    },
    setPlayerRight: (state, action) => {
      state.right = action.payload
    },
    setPlayerTop: (state, action) => {
      state.top = action.payload
    },
    setPlayerWidth: (state, action) => {
      state.width = action.payload
    },
    setPlayerX: (state, action) => {
      state.x = action.payload
    },
    setPlayerY: (state, action) => {
      state.y = action.payload
    },
  },
})

export const {
  setPlayerJumping,
  setPlayerBottom,
  setPlayerHeight,
  setPlayerLeft,
  setPlayerRight,
  setPlayerTop,
  setPlayerWidth,
  setPlayerX,
  setPlayerY,
} = playerMovementSlice.actions

export default playerMovementSlice.reducer
