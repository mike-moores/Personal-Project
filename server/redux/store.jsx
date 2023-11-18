import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './PlayerMovement'

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
})

export default store
