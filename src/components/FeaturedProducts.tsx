import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingBag } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'El Örgüsü Bebek Battaniyesi',
      price: '₺299',
      seller: 'Ayşe Hanım',
      rating: 4.9,
      image: 'https://cdn.pixabay.com/photo/2013/12/06/23/57/blanket-224367_1280.jpg',
      category: 'Bebek Ürünleri'
    },
    {
      id: 2,
      name: 'El Yapımı Çini Tabak',
      price: '₺220',
      seller: 'Fatma Usta',
      rating: 4.8,
      image: 'https://cdn.pixabay.com/photo/2016/12/22/13/50/tile-1925514_1280.jpg',
      category: 'Çini & Seramik'
    },
    {
      id: 3,
      name: 'El Yapımı Seramik Vazo',
      price: '₺180',
      seller: 'Zehra Atölye',
      rating: 5.0,
      image: 'https://cdn.pixabay.com/photo/2022/06/10/15/57/ceramic-vase-7254826_1280.jpg',
      category: 'Seramik & Çömlek'
    },
    {
      id: 4,
      name: 'El Yapımı Yağlı Boya Sanat Tablosu',
      price: '₺450',
      seller: 'Elif Sanat',
      rating: 4.9,
      image: 'https://cdn.pixabay.com/photo/2017/08/19/18/29/museum-2659421_960_720.jpg',
      category: 'Sanat & Dekor'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Öne Çıkan Ürünler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kadın girişimcilerimizin özenle ürettiği, kaliteli ve özgün ürünleri keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-rose-100 transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-sage-100 text-sage-700 text-xs font-medium px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-rose-50">
                  <Heart className="h-4 w-4 text-gray-400 hover:text-rose-500" />
                </button>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-3">{product.seller}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">{product.price}</span>
                  {product.name === 'El Örgüsü Bebek Battaniyesi' ? (
                    <Link
                      to={`/urun/${product.id}`}
                      className="flex items-center space-x-1 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors text-sm"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span>İncele</span>
                    </Link>
                  ) : (
                    <button
                      className="flex items-center space-x-1 bg-gray-300 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed text-sm opacity-60"
                      disabled
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span>İncele</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/urunler"
            className="inline-flex items-center px-8 py-3 bg-sage-600 text-white font-semibold rounded-xl hover:bg-sage-700 transition-colors"
          >
            Tüm Ürünleri Görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;