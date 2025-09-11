import React from 'react';
import { Star, MapPin, Calendar, MessageCircle, ShoppingBag } from 'lucide-react';

const SellerProfilePage = () => {
  const seller = {
    name: 'Ayşe Hanım',
    bio: 'El sanatları konusunda 15 yıllık deneyimim var. Organik malzemeler kullanarak, özenle seçtiğim yünlerden bebek ve çocuk ürünleri üretiyorum. Her ürünümde sevgi ve özen var.',
    location: 'İstanbul, Türkiye',
    joinDate: '2023',
    rating: 4.9,
    totalProducts: 45,
    totalSales: 320,
    avatar: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=300',
    coverImage: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1200'
  };

  const products = [
    {
      id: 1,
      name: 'El Örgüsü Bebek Battaniyesi',
      price: '₺299',
      rating: 4.9,
      reviews: 45,
      image: 'https://images.pexels.com/photos/6069451/pexels-photo-6069451.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Yün Örgü Şapka',
      price: '₺120',
      rating: 4.6,
      reviews: 23,
      image: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Bebek Patiği Seti',
      price: '₺85',
      rating: 4.8,
      reviews: 31,
      image: 'https://images.pexels.com/photos/6069451/pexels-photo-6069451.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'El Örgüsü Yelek',
      price: '₺195',
      rating: 4.7,
      reviews: 18,
      image: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const reviews = [
    {
      id: 1,
      user: 'Elif M.',
      rating: 5,
      date: '2 gün önce',
      comment: 'Harika bir satıcı! Ürünleri çok kaliteli ve işçilik mükemmel.',
      product: 'El Örgüsü Bebek Battaniyesi'
    },
    {
      id: 2,
      user: 'Merve K.',
      rating: 5,
      date: '1 hafta önce',
      comment: 'Çok memnun kaldım. İletişimi çok iyi, kargo hızlıydı.',
      product: 'Yün Örgü Şapka'
    },
    {
      id: 3,
      user: 'Fatma A.',
      rating: 4,
      date: '2 hafta önce',
      comment: 'Güzel ürünler, bebeğim çok sevdi. Teşekkürler!',
      product: 'Bebek Patiği Seti'
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Cover & Profile */}
      <div className="relative">
        <div className="h-64 bg-gradient-to-r from-rose-400 to-sage-400 relative overflow-hidden">
          <img
            src={seller.coverImage}
            alt="Cover"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <img
                src={seller.avatar}
                alt={seller.name}
                className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-lg"
              />
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{seller.name}</h1>
                <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{seller.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{seller.joinDate} yılından beri satıcı</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{seller.rating} ({seller.totalSales} satış)</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {seller.bio}
                </p>
              </div>
              
              <button className="flex items-center space-x-2 bg-rose-600 text-white px-6 py-3 rounded-xl hover:bg-rose-700 transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span>Mesaj Gönder</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="border-t border-gray-100 pt-6 mt-6">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">{seller.totalProducts}</div>
                  <div className="text-gray-600">Aktif Ürün</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{seller.totalSales}</div>
                  <div className="text-gray-600">Toplam Satış</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{seller.rating}</div>
                  <div className="text-gray-600">Ortalama Puan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Products */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Ürünler ({seller.totalProducts})</h2>
                <button className="text-rose-600 hover:text-rose-700 font-medium">
                  Tümünü Gör
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-bold text-gray-900">{product.price}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                      <button className="w-full flex items-center justify-center space-x-2 bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition-colors">
                        <ShoppingBag className="h-4 w-4" />
                        <span>İncele</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Son Yorumlar</h2>
                <button className="text-rose-600 hover:text-rose-700 text-sm font-medium">
                  Tümünü Gör
                </button>
              </div>
              
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-medium text-gray-900">{review.user}</span>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{review.comment}</p>
                    <span className="text-xs text-rose-600 bg-rose-50 px-2 py-1 rounded-full">
                      {review.product}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfilePage;