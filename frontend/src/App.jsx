import { useState } from 'react'

import Auth from './components/Auth/Auth'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Auth />
      <Profile />
    </>
  )
}

export default App
