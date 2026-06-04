# ForecastFood 🍽️📊

## Deskripsi Singkat Proyek

ForecastFood adalah aplikasi berbasis Artificial Intelligence (AI) yang membantu pengguna memprediksi jumlah makanan yang perlu disiapkan untuk suatu acara. Sistem memanfaatkan model Machine Learning yang dilatih menggunakan data historis terkait jenis makanan, jumlah tamu, tipe acara, metode penyimpanan, musim, metode persiapan, dan jumlah makanan terbuang.

Aplikasi ini bertujuan membantu mengurangi food waste serta meningkatkan efisiensi perencanaan konsumsi pada berbagai jenis acara seperti wedding, birthday, corporate event, dan social gathering.

---

## Teknologi yang Digunakan

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router
* Axios
* Supabase Authentication

### Backend

* Node.js
* Express.js
* Supabase Database
* Multer (CSV Upload)

### AI Service

* FastAPI
* TensorFlow/Keras
* Scikit-Learn
* Hugging Face Spaces

---

## Arsitektur Sistem

Frontend (React + Vite)
↓
Backend API (Express.js)
↓
AI Service (FastAPI + TensorFlow)
↓
Supabase Database

---

## Setup Environment

### 1. Clone Repository

```bash
git clone <repository-url>
cd forecastfood
```

---

### 2. Setup Frontend

Masuk ke folder frontend:

```bash
cd frontend
```

Install dependency:

```bash
npm install
```

Buat file `.env`

```env
VITE_API_URL=http://localhost:5001

VITE_SUPABASE_URL=YOUR_SUPABASE_URL

VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

Jalankan frontend:

```bash
npm run dev
```

---

### 3. Setup Backend

Masuk ke folder backend:

```bash
cd backend
```

Install dependency:

```bash
npm install
```

Buat file `.env`

```env
PORT=5001

NODE_ENV=development

SUPABASE_URL=YOUR_SUPABASE_URL

SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY

SUPABASE_SERVICE_KEY=YOUR_SUPABASE_SERVICE_ROLE_KEY

GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID

GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET

AI_SERVICE_URL=http://localhost:8000
```

Jalankan backend:

```bash
npm run dev
```

---

### 4. Setup AI Service

Masuk ke folder AI:

```bash
cd ai
```

Install dependency:

```bash
pip install -r requirements.txt
```

Jalankan FastAPI:

```bash
uvicorn api.main:app --reload
```

Default URL:

```text
http://localhost:8000
```

---

## Cara Menjalankan Aplikasi

Pastikan ketiga service berikut berjalan:

### Frontend

```bash
npm run dev
```

Port:

```text
http://localhost:5173
```

### Backend

```bash
npm run dev
```

Port:

```text
http://localhost:5001
```

### AI Service

```bash
uvicorn api.main:app --reload
```

Port:

```text
http://localhost:8000
```

Setelah seluruh service aktif, buka browser:

```text
http://localhost:5173
```

---

## Fitur Utama

* Login & Register
* Google Authentication
* Upload CSV untuk prediksi massal
* Manual Food Forecasting
* AI-based Food Quantity Prediction
* Prediction History
* Dashboard Analytics
* User Profile Management
* Cloud Database Storage menggunakan Supabase

---

## Dataset

Dataset yang digunakan berisi informasi:

* Type of Food
* Number of Guests
* Event Type
* Storage Conditions
* Seasonality
* Preparation Method
* Wastage Food Amount

Target yang diprediksi:

* Recommended Food Quantity

---

## Model AI

Model Machine Learning disimpan secara terpisah dan digunakan oleh AI Service.

### Link Model

```text
https://drive.google.com/drive/folders/13HGxQMz-jiWgmh1ZKCqTYsPGOLcxFkkh?usp=sharing
```

Pastikan akun:

```text
capstone@student.devacademy.id
```

memiliki akses untuk melihat dan mengunduh model.

---

## Deployment

### Frontend

* Vercel

### Backend

* Vercel

### AI Service

* Hugging Face Spaces

### Database

* Supabase

---

## 👥 Tim Pengembang

ForecastFood Team

Capstone Project — DBS Foundation Coding Camp x Dicoding

| Nama | Role |
|------|------|
| Nailah Adianti Hermawan | Full-Stack Web Developer |
| Rafael Daniel Lumban Tobing | Full-Stack Web Developer |
| Adillah Ridwan | AI Engineer |
| Tesalonika Natalie Sofi Siregar | AI Engineer |
| Nando Febriano Seva | Data Scientist |
| Evi Novita Gultom | Data Scientist |
