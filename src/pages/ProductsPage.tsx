import React, { useState } from 'react';
import { Search, Filter, Star, Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const categories = [
    'Tümü', 'El Örgü', 'Seramik & Çömlek', 'Doğal Kozmetik', 
    'Bebek Ürünleri', 'Ev Dekorasyonu', 'Takı & Aksesuar', 'Gıda & İçecek'
  ];

  const products = [
  {
    id: 1,
    name: 'El Örgüsü Bebek Battaniyesi',
    price: '₺299',
    seller: 'Ayşe Hanım',
    rating: 4.9,
    reviews: 45,
    image: 'https://cdn.pixabay.com/photo/2013/12/06/23/57/blanket-224367_1280.jpg',
    category: 'Bebek Ürünleri'
  },
  {
    id: 2,
    name: 'El Yapımı Çini Tabak',
    price: '₺220',
    seller: 'Fatma Usta',
    rating: 4.8,
    reviews: 32,
    image: 'https://cdn.pixabay.com/photo/2016/12/22/13/50/tile-1925514_1280.jpg',
    category: 'Çini & Seramik'
  },
  {
    id: 3,
    name: 'El Yapımı Seramik Vazo',
    price: '₺180',
    seller: 'Zehra Atölye',
    rating: 5.0,
    reviews: 28,
    image: 'https://cdn.pixabay.com/photo/2022/06/10/15/57/ceramic-vase-7254826_1280.jpg',
    category: 'Seramik & Çömlek'
  },
  {
    id: 4,
    name: 'El Yapımı Yağlı Boya Sanat Tablosu',
    price: '₺450',
    seller: 'Elif Sanat',
    rating: 4.9,
    reviews: 41,
    image: 'https://cdn.pixabay.com/photo/2017/08/19/18/29/museum-2659421_960_720.jpg',
    category: 'Sanat & Dekor'
  },
  {
    id: 5,
    name: 'El Yapımı Yün Örgü Şapka',
    price: '₺120',
    seller: 'Meryem Atölyesi',
    rating: 4.6,
    reviews: 23,
    image: 'https://cdn.pixabay.com/photo/2016/10/03/19/58/woolen-hat-1712687_960_720.jpg',
    category: 'El Örgü'
  },
  {
    id: 6,
    name: 'El Yapımı Gümüş Kolye',
    price: '₺350',
    seller: 'Aylin Tasarım',
    rating: 4.9,
    reviews: 15,
    image: 'https://cdn.pixabay.com/photo/2019/12/15/14/41/necklace-4697241_1280.jpg',
    category: 'Takı & Aksesuar'
  }
];


  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.seller.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tümü' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tüm Ürünler</h1>
          <p className="text-gray-600">El emeği ürünleri keşfet ve satın al</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Ürün veya satıcı ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            {filteredProducts.length} ürün bulundu
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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
                <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors line-clamp-2 mb-2">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500 mb-2">{product.seller}</p>

                <div className="flex items-center space-x-1 mb-3">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{product.rating}</span>
                  <span className="text-sm text-gray-400">({product.reviews})</span>
                </div>

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

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Sonuç bulunamadı</h3>
            <p className="text-gray-600">Arama kriterlerinizi değiştirmeyi deneyin</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;