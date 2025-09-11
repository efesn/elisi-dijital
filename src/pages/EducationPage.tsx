import React from 'react';
import { Play, Clock, Users, BookOpen, Star } from 'lucide-react';

const EducationPage = () => {
  const courses = [
    {
      id: 1,
      title: 'Dijital Pazarlama Temelleri',
      description: 'Online satış yapmak için bilmeniz gereken temel dijital pazarlama stratejileri',
      instructor: 'Mehmet Kaya',
      duration: '4 saat',
      students: 245,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'Ücretsiz',
      level: 'Başlangıç'
    },
    {
      id: 2,
      title: 'E-ticaret Mağaza Kurulumu',
      description: 'Sıfırdan e-ticaret mağazanızı kurma ve yönetme rehberi',
      instructor: 'Ayşe Demir',
      duration: '6 saat',
      students: 189,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '₺199',
      level: 'Orta'
    },
    {
      id: 3,
      title: 'Sosyal Medya Pazarlama',
      description: 'Instagram ve Facebook\'ta etkili pazarlama teknikleri',
      instructor: 'Elif Yılmaz',
      duration: '3 saat',
      students: 312,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '₺149',
      level: 'Başlangıç'
    },
    {
      id: 4,
      title: 'Ürün Fotoğrafçılığı',
      description: 'El yapımı ürünlerinizi profesyonelce fotoğraflama teknikleri',
      instructor: 'Can Özkan',
      duration: '2.5 saat',
      students: 156,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '₺99',
      level: 'Başlangıç'
    },
    {
      id: 5,
      title: 'Müşteri İlişkileri Yönetimi',
      description: 'Müşteri memnuniyetini artırma ve sadık müşteri yaratma yöntemleri',
      instructor: 'Zeynep Kara',
      duration: '3.5 saat',
      students: 203,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '₺129',
      level: 'Orta'
    },
    {
      id: 6,
      title: 'Mali Yönetim ve Muhasebe',
      description: 'Küçük işletmeler için temel muhasebe ve finansal yönetim',
      instructor: 'Hasan Yıldız',
      duration: '5 saat',
      students: 98,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '₺249',
      level: 'İleri'
    }
  ];

  const categories = ['Tümü', 'Dijital Pazarlama', 'E-ticaret', 'Fotoğrafçılık', 'Mali Yönetim'];
  const levels = ['Tümü', 'Başlangıç', 'Orta', 'İleri'];

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Eğitim & Kurslar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dijital pazarlama, e-ticaret ve işletme yönetimi konularında uzman eğitmenlerden öğrenin
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-rose-600 mb-2">25+</div>
            <div className="text-gray-600">Kurs</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-sage-600 mb-2">1.2K+</div>
            <div className="text-gray-600">Öğrenci</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-rose-600 mb-2">15+</div>
            <div className="text-gray-600">Eğitmen</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-sage-600 mb-2">4.8</div>
            <div className="text-gray-600">Ortalama Puan</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent">
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Seviye</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent">
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Fiyat</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent">
                <option value="all">Tümü</option>
                <option value="free">Ücretsiz</option>
                <option value="paid">Ücretli</option>
              </select>
            </div>
          </div>
        </div>

        {/* Featured Course */}
        <div className="bg-gradient-to-r from-rose-600 to-sage-600 rounded-2xl p-8 mb-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Öne Çıkan Kurs
              </span>
              <h2 className="text-3xl font-bold mb-4">
                Dijital Pazarlama Temelleri
              </h2>
              <p className="text-rose-100 mb-6 text-lg leading-relaxed">
                Online satış yapmak için bilmeniz gereken temel dijital pazarlama stratejileri. 
                Bu kurs ile işinizi dijital dünyada büyütmeye başlayın.
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>4 saat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>245 öğrenci</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-current" />
                  <span>4.8</span>
                </div>
              </div>
              <button className="bg-white text-rose-600 px-8 py-3 rounded-xl hover:bg-rose-50 transition-colors font-semibold flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Ücretsiz Başla</span>
              </button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dijital Pazarlama"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    course.level === 'Başlangıç' ? 'bg-green-100 text-green-800' :
                    course.level === 'Orta' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {course.level}
                  </span>
                </div>
                {course.price === 'Ücretsiz' && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-sage-100 text-sage-800 px-3 py-1 rounded-full text-xs font-medium">
                      Ücretsiz
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{course.instructor}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students} öğrenci</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    {course.price}
                  </span>
                  <button className="flex items-center space-x-2 bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition-colors">
                    <BookOpen className="h-4 w-4" />
                    <span>Kursa Başla</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-sage-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Kendi Kursunuzu Oluşturmak İster misiniz?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Bilgi ve deneyimlerinizi paylaşarak diğer kadın girişimcilere yardım edin ve 
            ek gelir elde edin. Eğitmen olmak için başvurun.
          </p>
          <button className="bg-sage-600 text-white px-8 py-3 rounded-xl hover:bg-sage-700 transition-colors font-semibold">
            Eğitmen Ol
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;