import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-cream-50 to-rose-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-5 w-5 text-rose-500" />
              <span className="text-rose-600 font-medium">Kadın Girişimciler İçin</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              El emeği 
              <span className="text-rose-600"> ürünlerin</span>
              <br />
              dijital yuvası
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Kadın zanaatkârların ve ev üretimi yapan kadın girişimcilerin ürünlerini sergileyip 
              satabileceği, yerel toplulukla etkileşim kurabileceği dijital platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/giris"
                className="inline-flex items-center justify-center px-8 py-4 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Hemen Başla
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/urunler"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-sage-300 text-sage-700 font-semibold rounded-xl hover:bg-sage-50 transition-all duration-300"
              >
                Ürünleri Keşfet
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Aktif Satıcı</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2.5K+</div>
                <div className="text-sm text-gray-600">Ürün</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15K+</div>
                <div className="text-sm text-gray-600">Mutlu Müşteri</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-rose-100 to-sage-100 rounded-2xl p-8 relative overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2024/11/17/10/24/knit-9203457_1280.jpg"
                alt="Kadın el işi üretimi"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sage-400 rounded-full opacity-20"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute top-8 -left-8 bg-white rounded-lg shadow-lg p-4 transform rotate-3">
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-rose-500" />
                <span className="text-sm font-semibold">%100 El Yapımı</span>
              </div>
            </div>
            <div className="absolute bottom-8 -right-8 bg-white rounded-lg shadow-lg p-4 transform -rotate-3">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-sage-500" />
                <span className="text-sm font-semibold">Yerel Üretim</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;