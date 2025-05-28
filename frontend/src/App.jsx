import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router';

import Home from './pages/home/HomePage.jsx';
import Catalog from './pages/product/AllProductsPage';
import Authentication from './pages/auth/AuthPage';
import ProfilePage from './pages/user/ProfilePage';
import Product from './pages/product/ProductPage';
import ScrollToTop from './components/scroll_to_top/ScrollToTop';
import AboutUs from './pages/about/AboutPage';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <Router>
      <div id="content">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/product/:id" element={<Product />} />

           {/* Защищенные маршруты */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          <Route path="/about" element={<AboutUs />} />
        </Routes>
      <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
