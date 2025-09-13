import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingBag, Share2, User, MessageCircle } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app, fetch based on id
  const product = {
    id: 1,
    name: 'El Örgüsü Bebek Battaniyesi',
    price: '₺299',
    originalPrice: '₺399',
    seller: {
      name: 'Ayşe Hanım',
      rating: 4.9,
      totalProducts: 45,
      joinDate: '2023',
      avatar: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    rating: 4.9,
    reviews: 45,
    images: [
      'https://cdn.pixabay.com/photo/2013/12/06/23/57/blanket-224367_1280.jpg'
    ],
    category: 'Bebek Ürünleri',
    description: 'Özenle seçilmiş organik yünlerden el örgüsü olarak hazırlanmış bebek battaniyesi. Hiçbir kimyasal madde kullanılmadan doğal boyalarla renklendirilmiştir. Bebek cildine hassasiyetle dokunur, yumuşaklığını korur.',
    features: [
      '%100 Organik yün',
      'El örgüsü',
      'Doğal boyalar',
      'Makine yıkanabilir',
      '80x100 cm boyutlarında'
    ],
    inStock: true,
    deliveryTime: '2-4 iş günü'
  };

  const reviews = [
    {
      id: 1,
      user: 'Elif M.',
      rating: 5,
      date: '2 gün önce',
      comment: 'Çok kaliteli ve yumuşak. Bebeğim çok sevdi, sürekli kullanıyoruz.',
      avatar: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      user: 'Merve K.',
      rating: 5,
      date: '1 hafta önce',
      comment: 'Harika işçilik, tam istediğim gibi. Herkese tavsiye ediyorum.',
      avatar: 'https://images.pexels.com/photos/4560091/pexels-photo-4560091.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="flex space-x-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-rose-500' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-sage-100 text-sage-700 text-sm font-medium px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-500">({product.reviews} yorum)</span>
                </div>
                {product.inStock && (
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded-full">
                    Stokta Var
                  </span>
                )}
              </div>

              <div className="flex items-baseline space-x-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
                <span className="bg-rose-100 text-rose-800 text-sm font-medium px-2 py-1 rounded-full">
                  %25 İndirim
                </span>
              </div>

              <div className="space-y-4 mb-8">
                <button className="w-full bg-rose-600 text-white py-4 rounded-xl hover:bg-rose-700 transition-colors font-semibold flex items-center justify-center space-x-2">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Sepete Ekle</span>
                </button>
                <button className="w-full border-2 border-sage-300 text-sage-700 py-4 rounded-xl hover:bg-sage-50 transition-colors font-semibold">
                  Hemen Satın Al
                </button>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Ürün Özellikleri</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-100 pt-6 mt-6">
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Teslimat Süresi:</strong> {product.deliveryTime}
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Kargo:</strong> Ücretsiz kargo (₺200 üzeri siparişlerde)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ürün Açıklaması</h2>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>

        {/* Seller Info */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={product.seller.avatar}
                alt={product.seller.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{product.seller.name}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{product.seller.rating}</span>
                  </div>
                  <span>{product.seller.totalProducts} ürün</span>
                  <span>{product.seller.joinDate} yılından beri satıcı</span>
                </div>
              </div>
            </div>
            <button className="flex items-center space-x-2 bg-sage-600 text-white px-6 py-3 rounded-xl hover:bg-sage-700 transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span>Mesaj Gönder</span>
            </button>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Yorumlar ({product.reviews})</h2>
            <button className="text-rose-600 hover:text-rose-700 font-medium">
              Tüm Yorumları Gör
            </button>
          </div>

          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                <div className="flex items-start space-x-4">
                  <img
                    src={review.avatar}
                    alt={review.user}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{review.user}</h4>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;