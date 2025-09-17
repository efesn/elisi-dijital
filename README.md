# Elişi Dijital

Elişi Dijital, yerel kadın zanaatkârları ve evden üretim yapan kadın girişimcileri dijital pazar yerinde bir araya getiren bir platformdur. Proje, kadınlara ürünlerini sergileme ve satma imkanı sunar. Kullanıcılar ürünlerini yükleyip satışa sunabilir, geri bildirim alabilir ve yerel toplulukla etkileşimde bulunabilir. Ayrıca Dijital Gençlik Merkezleri veya belediyeler aracılığıyla dijital pazarlama ve e-ticaret eğitimleri de sağlanır. Platform, yereldeki kadın emeğini görünür kılarak onlara finansal bağımsızlık kazandırmayı hedefler.

## Kullanılan Teknolojiler
- **Frontend:** React.js & Tailwind
- **Backend:** Node.js, Express.js, JWT
- **Veritabanı:** MongoDB

---

## Kurulum ve Çalıştırma

### 1. Depoyu Klonlayın
```bash
git clone https://github.com/efesn/elisi-dijital.git
```

### 2. Ana dizine geçin
```bash
cd elisi-dijital
```

## Frontend

### 1. İlgili Dizine Geçin
```bash

cd frontend
```

### 2. Gerekli Paketleri Yükleyin
```bash
npm install
```

### 3. Sunucuyu Başlatın
```bash
npm run dev
```

Frontend sunucusu varsayılan olarak `http://localhost:5173` adresinde çalışır.  
Eğer bu port doluysa Vite otomatik olarak bir sonraki boş portu (5174, 5175, ...) kullanır.

---

### Backend (API)
### 1. İlgili Dizine Geçin
```bash
cd backend
```
### 2. Gerekli Paketleri Yükleyin
```bash
npm install
```
### 3. Gerekli ortam değişkenlerini tanımlayın.
backend klasöründe bir `.env` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:
```
PORT=<backend varsayılan olarak 5000 portunda çalışacak eğer başka bir portta çalıştırmak isterseniz bunu ekleyebilirsiniz>
MONGO=MongoDB bağlantı adresiniz (örnek: mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<DbName>?retryWrites=true&w=majority)
JWT_SECRET=random bir string veya 256-bit key
```
### 3. Sunucuyu başlatın:
```bash
npm start
```
Backend sunucusu varsayılan olarak 5000 portunda çalışıyor olacak.

