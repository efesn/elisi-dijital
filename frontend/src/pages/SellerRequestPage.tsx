import React, { useState } from 'react';

const SellerRequestPage = () => {
  const [form, setForm] = useState({
    tc: '',
    name: '',
    surname: '',
    address: '',
    phone: '',
    email: '',
    about: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    // Basic validation
    if (!form.tc || !form.name || !form.surname || !form.address) {
      setError('Lütfen tüm zorunlu alanları doldurun.');
      return;
    }
    // Simulate API call
    setTimeout(() => {
      setSuccess('Talebiniz başarıyla alındı! Ekibimiz en kısa sürede sizinle iletişime geçecek.');
      setForm({ tc: '', name: '', surname: '', address: '', phone: '', email: '', about: '' });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-cream-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-rose-600 mb-6 text-center">Satıcı Olmak İstiyorum</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="tc" className="block text-sm font-medium text-gray-700 mb-2">TC Kimlik No *</label>
            <input type="text" name="tc" id="tc" value={form.tc} onChange={handleChange} required maxLength={11}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors" placeholder="11 haneli kimlik numaranız" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">İsim *</label>
              <input type="text" name="name" id="name" value={form.name} onChange={handleChange} required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors" placeholder="Adınız" />
            </div>
            <div>
              <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-2">Soyisim *</label>
              <input type="text" name="surname" id="surname" value={form.surname} onChange={handleChange} required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors" placeholder="Soyadınız" />
            </div>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Adres *</label>
            <input type="text" name="address" id="address" value={form.address} onChange={handleChange} required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors" placeholder="Adresiniz" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
              <input type="text" name="phone" id="phone" value={form.phone} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors" placeholder="05xx xxx xx xx" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
              <input type="email" name="email" id="email" value={form.email} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors" placeholder="E-posta adresiniz" />
            </div>
          </div>
          <div>
            <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-2">Kendinizden Bahsedin</label>
            <textarea name="about" id="about" value={form.about} onChange={handleChange} rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors" placeholder="Kısa bir tanıtım yazısı" />
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          {success && <div className="text-green-600 text-sm text-center">{success}</div>}
          <button type="submit" className="w-full bg-gradient-to-r from-rose-400 to-rose-600 text-white py-3 rounded-lg hover:from-rose-500 hover:to-rose-700 font-semibold transition-colors">Talebimi Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default SellerRequestPage;
