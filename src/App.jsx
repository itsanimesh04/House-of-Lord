import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import DiningPage from './pages/DiningPage';
import TravelPage from './pages/TravelPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="rooms" element={<RoomsPage />} />
          <Route path="dining" element={<DiningPage />} />
          <Route path="travel" element={<TravelPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
