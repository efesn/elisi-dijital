import React from 'react';
import { Heart, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
  <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-sage-400 rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold">Elişi Dijital</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Kadın zanaatkârların ve ev üretimi yapan kadın girişimcilerin ürünlerini sergileyip 
              satabileceği, yerel toplulukla etkileşim kurabileceği dijital platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Platform</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="text-gray-500 dark:text-gray-400 font-medium hover:underline">Nasıl Çalışır</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 font-medium hover:underline">Ürün Sat</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 font-medium hover:underline">Başarı Hikayeleri</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 font-medium hover:underline">SSS</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Destek</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="text-gray-500 dark:text-gray-400 font-medium hover:underline">Yardım Merkezi</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 font-medium hover:underline">İletişim</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 font-medium hover:underline">Gizlilik Politikası</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 font-medium hover:underline">Kullanım Şartları</a></li>
            </ul>
          </div>
        </div>

  <div className="border-t border-white mt-8 pt-8 text-center text-white">
          <p>&copy; 2025 Elişi Dijital. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;