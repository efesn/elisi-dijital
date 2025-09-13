import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const CallToAction = () => {
  return (
  <section
    className="py-28 bg-gradient-to-br"
    style={{ backgroundImage: "linear-gradient(135deg, #bc4e9c 0%, #f80759 100%)" }}
  >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-6 w-6 text-rose-200 mr-2" />
          <span className="text-rose-200 font-medium">Şimdi Başla</span>
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          El emeğin dijital dünyada yerini alsın!
        </h2>
        
        <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Binlerce müşteriye ulaş, ürünlerini sat ve kadın girişimci topluluğumuzun bir parçası ol.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/giris"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-600 font-semibold rounded-xl hover:bg-rose-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Ücretsiz Başla
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/egitim"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-rose-600 transition-all duration-300"
          >
            Eğitimleri İncele
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">%0</div>
            <div className="text-rose-200">İlk 6 Ay Komisyon</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">24/7</div>
            <div className="text-rose-200">Müşteri Desteği</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">Ücretsiz</div>
            <div className="text-rose-200">Eğitim & Mentorluk</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;