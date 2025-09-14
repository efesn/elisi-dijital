import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, User, ShoppingBag, Heart } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useUser();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-sage-400 rounded-lg flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-display font-bold text-gray-900">Elişi Dijital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-rose-600' : 'text-gray-700 hover:text-rose-600'
              }`}
            >
              Ana Sayfa
            </Link>
            <Link
              to="/urunler"
              className={`font-medium transition-colors ${
                isActive('/urunler') ? 'text-rose-600' : 'text-gray-700 hover:text-rose-600'
              }`}
            >
              Ürünler
            </Link>
            <Link
              to="/egitim"
              className={`font-medium transition-colors ${
                isActive('/egitim') ? 'text-rose-600' : 'text-gray-700 hover:text-rose-600'
              }`}
            >
              Eğitimler
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500 transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </button>
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-700">{user.username}</span>
                <Link to="/profil" className="bg-sage-400 text-white px-3 py-1 rounded-lg hover:bg-sage-500 transition-colors">Profil</Link>
                <button onClick={logout} className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 ml-2">Çıkış</button>
              </div>
            ) : (
              <Link
                to="/giris"
                className="flex items-center space-x-2 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Giriş Yap</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-gray-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-rose-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                to="/urunler"
                className="text-gray-700 hover:text-rose-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ürünler
              </Link>
              <Link
                to="/egitim"
                className="text-gray-700 hover:text-rose-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Eğitimler
              </Link>
              {user ? (
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-700">{user.username}</span>
                  <Link to="/profil" className="bg-sage-400 text-white px-3 py-1 rounded-lg hover:bg-sage-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Profil</Link>
                  <button onClick={logout} className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 ml-2">Çıkış</button>
                </div>
              ) : (
                <Link
                  to="/giris"
                  className="flex items-center space-x-2 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors w-fit"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="h-4 w-4" />
                  <span>Giriş Yap</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;