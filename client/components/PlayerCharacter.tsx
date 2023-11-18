import { useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '/home/michael/workspace/Mike-Personal-Project/client/styles/main.css'
import {
  setPlayerJumping,
  // setPlayerLeft,
} from '../../server/redux/PlayerMovement'
// import { setReady } from '../../server/redux/engineSlice'

const Player = () => {
  const playerRef = useRef()
  const dispatch = useDispatch()

  // Player positions & jump
  const player_jump = useSelector((state) => state.player.jumping)
  
  // // Player moving left
  // const player_left = useSelector((state) => state.player.left)

  // Handling key press event.
  const handleKey = useCallback(
    (e) => {
      // Loading screen Enter on key press
      // if (e.code === 'Enter') {
      //   dispatch(setReady(true))
      // }

      // Player moving left
      // if (e.code === 'D') {

      //   const newPosition = player_left + 10
      //   dispatch(setPlayerLeft(newPosition))
      // }
      if (player_jump === false && e.code === 'Space') {
        dispatch(setPlayerJumping(true))
        console.log('I pressed the space bar!')
        setTimeout(() => {
          dispatch(setPlayerJumping(false))
        }, 400)
      }
    },
    [player_jump, dispatch]
  )

  // Monitor key press.
  useEffect(() => {
    document.addEventListener('keydown', handleKey)

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKey)
    }
  }, [handleKey, dispatch])

  return (
    <div className="player-container">
      {
        <img
          src="./client/images/character.gif"
          alt=""
          className={`player ${player_jump ? 'jump' : ''}`}
          ref={playerRef}
          // style={{ left: `${player_left}px` }}
        />
      }
    </div>
  )
}

export default Player
