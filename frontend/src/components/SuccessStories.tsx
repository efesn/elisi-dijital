import React from 'react';
import { Quote, Star } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: 'Ayşe Demir',
      location: 'İstanbul',
      story: 'El örgüsü bebek battaniyelerimi bu platform sayesinde daha çok kişiye ulaştırabiliyorum. Siparişlerim arttı ve kendi atölyemi büyütmeye başladım.',
      avatar: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=150',
      product: 'El Örgü Ürünleri',
      rating: 5
    },
    {
      name: 'Fatma Özkan',
      location: 'Ankara',
      story: 'El yapımı çini tabaklarımı burada sergileyip satmak bana büyük bir özgürlük sağladı. Müşterilerim memnun, ürünlerim Türkiye genelinde tercih ediliyor.',
      avatar: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=150',
      product: 'El Yapımı Çini Tabak',
      rating: 5
    },
    {
      name: 'Zehra Kaya',
      location: 'İzmir',
      story: 'Seramik atölyemi evden yönetiyorum. Platform sayesinde Türkiye\'nin her yerinden sipariş alıyorum.',
      avatar: 'https://images.pexels.com/photos/4560091/pexels-photo-4560091.jpeg?auto=compress&cs=tinysrgb&w=150',
      product: 'Seramik & Çömlek',
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Başarı Hikayeleri
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Platformumuzda başarılı olan kadın girişimcilerimizin deneyimlerini keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-cream-50 to-rose-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative"
            >
              <div className="absolute top-4 right-4 text-rose-200">
                <Quote className="h-8 w-8" />
              </div>
              
              <div className="flex items-center mb-4">
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{story.name}</h3>
                  <p className="text-sm text-gray-600">{story.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{story.story}"
              </p>

              <div className="border-t border-rose-100 pt-4">
                <span className="text-sm font-medium text-rose-600">{story.product}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;