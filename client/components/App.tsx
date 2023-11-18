import { Provider } from 'react-redux'
import store from '/home/michael/workspace/Mike-Personal-Project/server/redux/store.jsx' 
import Player from './PlayerCharacter.tsx'
import '/home/michael/workspace/Mike-Personal-Project/client/styles/main.css'

const App = () => {
  return (
    <Provider store={store}>
      <>
        <img
          className="bg"
          src="./client/images/background.jpg"
          alt="background"
        />
        <h1>Zombies!</h1>
        <img
          className="zombie"
          src="./client/images/zombie2.gif"
          alt="second zombie"
        />
        <Player />
      </>
    </Provider>
  )
}

export default App
