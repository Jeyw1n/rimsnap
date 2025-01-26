import Auth from './components/Auth/Auth'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Title from './components/Main/Title'
import MenuBlocks from './components/Main/MenuBlocks'
import Content from './components/Main/Content'
import Products from './components/Shop/Products'

function App() {
  return (
    <>
      <Header />
      <Title />
      <MenuBlocks />
      <Content />
      <Products />
      <Auth />
      <Profile />
    </>
  )
}

export default App
