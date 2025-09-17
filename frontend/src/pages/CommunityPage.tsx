import React, { useState } from 'react';

type CityName = 'Ankara' | 'İstanbul' | 'İzmir' | 'Bursa' | 'Antalya';
const cities: { name: CityName; color: string }[] = [
  { name: 'Ankara', color: 'bg-rose-400' },
  { name: 'İstanbul', color: 'bg-sage-400' },
  { name: 'İzmir', color: 'bg-yellow-300' },
  { name: 'Bursa', color: 'bg-blue-300' },
  { name: 'Antalya', color: 'bg-orange-300' },
];

interface Post {
  type: 'paylaşım' | 'ürün';
  text: string;
  user?: string;
  time?: string;
  image?: string;
}

const dummyPosts: Record<CityName, Post[]> = {
  Ankara: [
    { type: 'paylaşım', text: 'Ankara El işi Buluşması 20 Eylül!', user: 'Ayşe Y.', time: '2 saat önce', image: 'https://img.freepik.com/free-photo/women-all-ages-sitting-around-table_23-2148462918.jpg?t=st=1758052398~exp=1758055998~hmac=a874dcd17d35a8e36e25c25fe7c42a2a922f0c6fdab3e998e0ff71f6428b48e2&w=1480' }, // Ankara city view
    { type: 'ürün', text: 'Ankara’dan El Yapımı Çanta', user: 'Fatma K.', time: '1 saat önce', image: 'https://img.freepik.com/free-photo/knitted-bag-terrace-still-life_23-2150709461.jpg?t=st=1758051998~exp=1758055598~hmac=9716fe23505cd832a4fad18352b4dedef2345bfe8da2bb92b0961f76cf074ebf&w=1480' }, // Handmade bag
  ],
  İstanbul: [
    { type: 'paylaşım', text: 'Kadıköy’de yeni atölye açıldı!', user: 'Zeynep T.', time: '3 saat önce'},
    { type: 'ürün', text: 'İstanbul’dan Seramik Tabak', user: 'Elif S.', time: '2 saat önce'},
  ],
  İzmir: [
    { type: 'paylaşım', text: 'İzmir Elişi Festivali yaklaşıyor.', user: 'Merve D.', time: '4 saat önce'},
    { type: 'ürün', text: 'İzmir’den El Dokuma Şal', user: 'Derya A.', time: '2 saat önce'},
  ],
  Bursa: [
    { type: 'paylaşım', text: 'Bursa’da kadın girişimci buluşması.', user: 'Seda B.', time: '5 saat önce'},
    { type: 'ürün', text: 'Bursa’dan El Yapımı Takı', user: 'Gülşah C.', time: '3 saat önce',},
  ],
  Antalya: [
    { type: 'paylaşım', text: 'Antalya’da yaz kampı başlıyor.', user: 'Aylin E.', time: '6 saat önce'},
    { type: 'ürün', text: 'Antalya’dan El Yapımı Sepet', user: 'Melis F.', time: '4 saat önce'},
  ],
};

interface ChatMsg {
  user: string;
  text: string;
}
const dummyChat: Record<CityName, ChatMsg[]> = {
  Ankara: [
    { user: 'Ayşe Y.', text: 'Merhaba Ankara!' },
    { user: 'Fatma K.', text: 'Buluşmaya kimler geliyor?' },
  ],
  İstanbul: [
    { user: 'Zeynep T.', text: 'Kadıköy atölyesi harika!' },
    { user: 'Elif S.', text: 'Yeni ürünler ne zaman?' },
  ],
  İzmir: [
    { user: 'Merve D.', text: 'Festivalde buluşalım!' },
    { user: 'Derya A.', text: 'Şal çok güzelmiş.' },
  ],
  Bursa: [
    { user: 'Seda B.', text: 'Takı atölyesi açıldı mı?' },
    { user: 'Gülşah C.', text: 'Buluşma nerede olacak?' },
  ],
  Antalya: [
    { user: 'Aylin E.', text: 'Kamp için kayıt nasıl?' },
    { user: 'Melis F.', text: 'Sepet siparişi alıyor musun?' },
  ],
};

const CommunityPage = () => {
  const [selectedCity, setSelectedCity] = useState<CityName>('Ankara');
  const [chatInput, setChatInput] = useState('');
  const [chat, setChat] = useState<ChatMsg[]>(dummyChat[selectedCity]);

  // Update chat when city changes
  React.useEffect(() => {
    setChat(dummyChat[selectedCity]);
  }, [selectedCity]);

  const handleSend = () => {
    if (chatInput.trim()) {
      setChat([...chat, { user: 'Siz', text: chatInput }]);
      setChatInput('');
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 py-12 px-4 flex flex-col lg:flex-row gap-8">
      {/* City Selector */}
      <div className="lg:w-1/4 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-rose-600 mb-4">Topluluk Şehirleri</h2>
        <div className="flex flex-wrap gap-4">
          {cities.map(city => (
            <button
              key={city.name}
              className={`px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-all text-lg ${city.color} ${selectedCity === city.name ? 'ring-4 ring-rose-200 scale-105' : 'opacity-80 hover:scale-105'}`}
              onClick={() => setSelectedCity(city.name)}
            >
              {city.name}
            </button>
          ))}
        </div>
      </div>
      {/* Posts & Products */}
      <div className="lg:w-2/4 flex flex-col gap-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedCity} Paylaşımlar & Ürünler</h3>
        <div className="space-y-6">
          {dummyPosts[selectedCity].map((item: Post, idx: number) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-2">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${item.type === 'paylaşım' ? 'bg-rose-200 text-rose-600' : 'bg-sage-200 text-sage-700'}`}>{item.user?.charAt(0)}</div>
                <div>
                  <div className="font-semibold text-gray-900">{item.user}</div>
                  <div className="text-xs text-gray-400">{item.time}</div>
                </div>
                <span className={`ml-auto px-3 py-1 rounded-full text-xs font-bold ${item.type === 'paylaşım' ? 'bg-rose-100 text-rose-600' : 'bg-sage-100 text-sage-700'}`}>{item.type}</span>
              </div>
              <div className="text-gray-800 text-base leading-relaxed mb-2">{item.text}</div>
              {item.image && (
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt="Paylaşım görseli"
                    className="rounded-xl mb-2 shadow max-w-md w-full aspect-[4/3] object-cover border border-gray-200"
                    style={{ background: '#f8fafc' }}
                  />
                </div>
              )}
              {/* Interactions */}
              <div className="flex items-center gap-4 mt-2">
                <button className="flex items-center gap-1 text-rose-500 hover:text-rose-700 font-semibold">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/></svg>
                  Beğen
                </button>
                <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700 font-semibold">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="currentColor"/></svg>
                  Yorum Yap
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Chat Section */}
      <div className="lg:w-1/4 bg-white rounded-2xl shadow-xl p-6 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-4">{selectedCity} Sohbet</h3>
        <div className="flex-1 overflow-y-auto mb-4 space-y-2">
          {chat.map((msg: ChatMsg, idx: number) => (
            <div key={idx} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-base ${idx % 2 === 0 ? 'bg-rose-400' : 'bg-sage-400'}`}>{msg.user.charAt(0)}</div>
              <div className="bg-rose-50 rounded-lg px-3 py-2 text-gray-700 w-fit max-w-xs">
                <span className="font-semibold text-gray-800 mr-2">{msg.user}:</span>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={chatInput}
            onChange={e => setChatInput(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            placeholder="Mesaj yaz..."
          />
          <button
            onClick={handleSend}
            className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 font-semibold"
          >
            Gönder
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
