import { useState } from 'react'

import Auth from './components/Auth/Auth'
import Profile from './components/Profile/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Auth />
      <Profile />
    </>
  )
}

export default App
