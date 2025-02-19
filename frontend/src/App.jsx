import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Authentication from './pages/Authentication';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/auth" element={<Authentication />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
