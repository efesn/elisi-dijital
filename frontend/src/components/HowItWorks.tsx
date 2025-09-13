import React from 'react';
import { UserPlus, Upload, MessageCircle } from 'lucide-react';

const HowItWorks = () => {

  const steps = [
    {
      icon: UserPlus,
      title: 'Üye Ol',
      description: 'Hızlı ve kolay kayıt işlemi ile platformumuza katıl'
    },
    {
      icon: Upload,
      title: 'Ürün Yükle',
      description: 'El emeği ürünlerini fotoğrafla ve detaylarıyla paylaş'
    },
    {
      icon: MessageCircle,
      title: 'Etkileşim Kur',
      description: 'Müşterilerle iletişim kur, sorularını yanıtla'
    },
    {
      icon: () => <span className="text-rose-600 text-5xl font-medium">₺</span>,
      title: 'Sat & Kazan',
      description: 'Ürünlerini sat, güvenli ödeme al, işini büyüt'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-sage-50 to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sadece 4 adımda ürünlerini satmaya başla ve dijital dünyadaki yerini al
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto group-hover:shadow-xl transition-all duration-300">
                    <IconComponent className="h-10 w-10 text-rose-600" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-60 h-0.5 bg-gradient-to-r from-rose-200 to-sage-200" style={{transform: 'translateY(-50%)'}}></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="mt-2 w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;