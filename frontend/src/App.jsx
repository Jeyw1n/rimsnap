import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Authentication from './pages/Authentication';
import ProfilePage from './pages/ProfilePage';
import Product from './pages/Product';
import ScrollToTopButton from './components/Cherries/ScrollToTopButton';

function App() {
  return (
    <Router>
      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
