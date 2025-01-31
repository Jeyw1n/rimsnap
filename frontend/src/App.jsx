import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router';

import Auth from './components/Auth/Auth'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Title from './components/Main/Title'
import MenuBlocks from './components/Main/MenuBlocks'
import Content from './components/Main/Content'
import Products from './components/Shop/Products'

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Authentication from './pages/Authentication';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
