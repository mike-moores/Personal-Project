import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'
import PlayerCharacter from './components/PlayerCharacter'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<PlayerCharacter />} />
    <Route path="player" element={<PlayerCharacter />} />
  </Route>
)
