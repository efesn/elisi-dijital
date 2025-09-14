import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SellerProfilePage from './pages/SellerProfilePage';
import EducationPage from './pages/EducationPage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import SellerRequestPage from './pages/SellerRequestPage';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/urunler" element={<ProductsPage />} />
            <Route path="/urun/:id" element={<ProductDetailPage />} />
            <Route path="/satici/:id" element={<SellerProfilePage />} />
            <Route path="/egitim" element={<EducationPage />} />
            <Route path="/giris" element={<AuthPage />} />
            <Route path="/profil" element={<ProfilePage />} />

            <Route path="/satici-ol" element={<SellerRequestPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;