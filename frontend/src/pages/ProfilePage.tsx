import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user, logout } = useUser();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/giris');
      return;
    }
    // Fetch user profile from backend
    fetch('/api/auth/me', {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setProfile(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user, navigate]);

  if (loading) return <div className="text-center py-12">Yükleniyor...</div>;
  if (!profile) return <div className="text-center py-12 text-red-500">Profil bilgisi alınamadı.</div>;

  return (
    <div className="min-h-screen bg-cream-50 py-12">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Profilim</h2>
        <div className="mb-6">
          <div className="text-lg font-semibold text-gray-700">Kullanıcı Adı:</div>
          <div className="text-gray-900">{profile.username}</div>
        </div>
        {/* Add more user info here if needed */}
        <button
          onClick={logout}
          className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 font-semibold"
        >
          Çıkış Yap
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;