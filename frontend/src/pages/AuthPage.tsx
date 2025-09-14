import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!username || !password) {
      setError('Kullanıcı adı ve şifre gerekli');
      return;
    }
    if (!isLogin && password !== confirmPassword) {
      setError('Şifreler eşleşmiyor');
      return;
    }
    try {
      console.log('Sending request to:', isLogin ? '/api/auth/login' : '/api/auth/register');
      const response = await fetch(isLogin ? '/api/auth/login' : '/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      console.log('Raw response:', response);
      let text = await response.text();
      console.log('Raw response text:', text);
      let data;
      try {
        data = text ? JSON.parse(text) : {};
      } catch (jsonErr) {
        console.error('JSON parse error:', jsonErr);
        setError('Sunucudan geçersiz yanıt alındı.');
        return;
      }
      console.log('Register/Login response:', response.status, data);
      if (!response.ok) throw new Error(data?.message || 'Hata');
      if (isLogin) {
        setSuccess('Giriş başarılı! Yönlendiriliyorsunuz...');
        if (data.token) {
          localStorage.setItem('token', data.token);
          // get username from jwt
          try {
            const payload = JSON.parse(atob(data.token.split('.')[1]));
            setUser({ username: payload.username, token: data.token });
          } catch (e) {
            setUser({ username: '', token: data.token });
          }
        }
        setTimeout(() => {
          navigate('/'); 
        }, 1500);
      } else {
        setSuccess('Kayıt başarılı! Şimdi giriş yapabilirsiniz.');
        setTimeout(() => {
          setIsLogin(true);
          setSuccess('');
        }, 1500);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-rose-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-sage-400 rounded-xl flex items-center justify-center">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-display font-bold text-gray-900">Elişi Dijital</span>
            </Link>
          </div>

          {/* Form Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Hoş Geldiniz' : 'Hesap Oluşturun'}
            </h2>
            <p className="text-gray-600">
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Kullanıcı Adı
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                placeholder="Kullanıcı adınızı girin"
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            {success && (
              <div className="text-green-600 text-sm text-center">{success}</div>
            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Şifre
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                  placeholder="Şifrenizi girin"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Şifre Tekrar
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                    placeholder="Şifrenizi tekrar girin"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-rose-600 focus:ring-rose-500" />
                  <span className="ml-2 text-sm text-gray-600">Beni hatırla</span>
                </label>
                <a href="#" className="text-sm text-rose-600 hover:text-rose-700 font-medium">
                  Şifremi unuttum
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-rose-600 text-white py-3 rounded-lg hover:bg-rose-700 transition-colors font-semibold"
            >
              {isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">veya</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5 mr-3" />
                <span className="text-gray-700">Google ile {isLogin ? 'giriş yap' : 'kayıt ol'}</span>
              </button>
            </div>
          </div>

          {/* Switch Form */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isLogin ? 'Hesabınız yok mu?' : 'Zaten hesabınız var mı?'}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-rose-600 hover:text-rose-700 font-semibold"
              >
                {isLogin ? 'Kayıt ol' : 'Giriş yap'}
              </button>
            </p>
          </div>

          {!isLogin && (
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Kayıt olarak{' '}
                <a href="#" className="text-rose-600 hover:text-rose-700">Kullanım Şartları</a>
                {' '}ve{' '}
                <a href="#" className="text-rose-600 hover:text-rose-700">Gizlilik Politikası</a>
                'nı kabul etmiş olursunuz.
              </p>
            </div>
          )}
        </div>

        {/* Benefits */}
        <div className="mt-8 bg-sage-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Elişi Dijital'in Avantajları</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-3"></div>
              İlk 6 ay %0 komisyon oranı
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-3"></div>
              Ücretsiz eğitim ve mentorluk desteği
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-3"></div>
              7/24 müşteri destek hizmeti
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-3"></div>
              Güvenli ödeme ve hızlı para transferi
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;