import { useState } from 'react'

import Auth from './components/Auth/Auth'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Title from './components/Main/Title'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Title />
      <Auth />
      <Profile />
    </>
  )
}

export default App
