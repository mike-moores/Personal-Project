import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  jumping: false,
  left: null,
}

export const playerMovementSlice = createSlice({
  name: 'playerMovement',
  initialState,
  reducers: {
    setPlayerJumping: (state, action) => {
      state.jumping = action.payload
    },
    setPlayerLeft: (state, action) => {
      state.left = action.payload
    },
  },
})

export const { setPlayerJumping, setPlayerLeft } = playerMovementSlice.actions

export default playerMovementSlice.reducer
