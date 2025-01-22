import Auth from './components/Auth/Auth'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Title from './components/Main/Title'
import MenuBlocks from './components/Main/MenuBlocks'

function App() {
  return (
    <>
      <Header />
      <Title />
      <MenuBlocks />
      <Auth />
      <Profile />
    </>
  )
}

export default App
