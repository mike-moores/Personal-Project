import { useEffect, useRef, useCallback, useMemo } from 'react'
import { useDispatch, useSelector, Provider } from 'react-redux'
import '/home/michael/workspace/Mike-Personal-Project/client/styles/main.css'
import {
  setPlayerJumping,
  setPlayerHeight,
  setPlayerWidth,
  setPlayerLeft,
  setPlayerRight,
  setPlayerTop,
  setPlayerBottom,
} from '../../server/redux/PlayerMovement'
import { setReady } from '../../server/redux/engineSlice'

const Player = () => {
  const playerRef = useRef()
  const dispatch = useDispatch()

  // Player positions & jump
  const player_jump = useSelector((state) => state.player.jumping)
  const player_left = useSelector((state) => state.player.left)

  // Handling key press event.
  const handleKey = useCallback(
    (e) => {
      if (e.code === 'Enter') {
        dispatch(setReady(true))
      }
      if (e.code === 'D') {
        // Update player position to move right
        const newPosition = player_left + 10 // Adjust the value based on your needs
        dispatch(setPlayerLeft(newPosition))
      }
      if (player_jump === false && e.code === 'Space') {
        dispatch(setPlayerJumping(true))
        console.log('I pressed the space bar!')
        setTimeout(() => {
          dispatch(setPlayerJumping(false))
        }, 400)
      }
    },
    [player_jump, player_left, dispatch]
  )

  // Monitor key press.
  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    dispatch(setPlayerHeight(playerRef.current.getBoundingClientRect().height))
    dispatch(setPlayerWidth(playerRef.current.getBoundingClientRect().width))

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
          style={{ left: `${player_left}px` }} // Update the left style based on the Redux state
        />
      }
    </div>
  )
}

export default Player

// const Player = () => {
//   const playerRef = useRef()
//   const dispatch = useDispatch()

//   // player positions & jump
//   const player_jump = useSelector((state) => state.player.jumping)
//   const player_height = useSelector((state) => state.player.height)
//   const player_left = useSelector((state) => state.player.left)
//   const player_top = useSelector((state) => state.player.top)
//   const player_width = useSelector((state) => state.player.width)

//   const handleKey = (e: KeyboardEvent) => {
//     if (e.code === 'Space' && !e.repeat) {
//       // Check for Space key and ensure it's not a repeated key press
//       dispatch(setPlayerJumping(true))
//       console.log('I pressed the space bar!')
//     }
//   }

//   useEffect(() => {
//     document.addEventListener('keydown', handleKey)
//     dispatch(setPlayerHeight(playerRef.current.getBoundingClientRect().height))
//     dispatch(setPlayerLeft(playerRef.current.getBoundingClientRect().left))
//     dispatch(setPlayerTop(playerRef.current.getBoundingClientRect().top))
//     dispatch(setPlayerWidth(playerRef.current.getBoundingClientRect().width))
//   }, [player_jump, dispatch]) // Ensure to include any dependencies, like dispatch

//   // Monitor key press.

//   return (
//     <>
//       <h1>Unnamed Platformer Game!</h1>
//       <div>
//         <img
//           src="./client/images/character.gif"
//           alt="Player Character"
//           className={`player ${player_jump ? 'jump' : ''}`}
//           ref={playerRef}
//         />
//       </div>
//     </>
//   )
// }

// export default Player
