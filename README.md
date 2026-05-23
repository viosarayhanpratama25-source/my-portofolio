# 🚀 Personal Portfolio — Viosa Rayhan Pratama

[![Next.js Version](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React Version](https://img.shields.io/badge/React-19.2.4-blue?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

Selamat datang di repositori portofolio profesional saya. Aplikasi web ini dirancang sebagai platform interaktif, berkinerja tinggi, dan berestetika premium untuk memamerkan proyek pilihan, keahlian teknologi, riwayat akademis, serta pengalaman kerja saya.

Web ini dikembangkan menggunakan **Next.js 16 (App Router + Turbopack)**, **React 19**, **TypeScript**, dan **Tailwind CSS v4**, yang dikombinasikan dengan sentuhan **Vanilla CSS kustom** untuk menghasilkan transisi dan mikro-interaksi yang sangat mulus dan modern.

---

## ✨ Fitur Utama (Highlight & Interactions)

Portofolio ini tidak sekadar menampilkan data statis, tetapi dirancang dengan berbagai mikro-interaksi premium untuk memikat pengunjung:

*   **📈 Live Count-Up Stats Dashboard:** Menggunakan `IntersectionObserver` untuk menganimasikan angka statistik pencapaian (proyek dikirim, tahun belajar, dll.) dengan kurva akselerasi *ease-out-cubic* saat pertama kali tergulung ke layar.
*   **⌨️ Dynamic Hero Typewriter:** Efek pengetikan teks otomatis yang interaktif untuk mempresentasikan peran saya sebagai *Web Developer*, *Frontend Engineer*, *UI/UX Designer*, dan *React Developer*.
*   **🎥 Interactive Project Video Showcase:** Kartu proyek interaktif yang secara otomatis memutar cuplikan video demo proyek saat kursor *hover* (onMouseEnter) dan menjedanya saat kursor bergeser (onMouseLeave), memberikan pengalaman pratinjau yang dinamis tanpa beban muat halaman awal.
*   **🧭 Scroll-Spy Active Navigation & Mobile Drawer:** Bilah navigasi cerdas yang berubah tampilan saat digulir (*scrolled state*) dan secara otomatis menyoroti bagian menu aktif berdasarkan posisi gulir layar pengguna saat ini. Lengkap dengan menu laci (*drawer*) responsif untuk perangkat seluler.
*   **⏳ Scroll Progress Bar:** Indikator visual premium di bagian paling atas halaman yang melacak persentase kemajuan gulir pengguna secara *real-time*.
*   **🎭 Smooth Scroll-Reveal & Slide Animations:** Transisi *fade-in-up*, *slide-in-left*, dan *slide-in-right* terintegrasi menggunakan `ObserveProvider` untuk menciptakan pengalaman bercerita (*storytelling layout*) yang dramatis dan terstruktur.
*   **✉️ Premium Feedback Contact Form:** Formulir kontak interaktif lengkap dengan animasi pemuat (*spinner*) saat proses kirim, serta animasi centang sukses (*success checkmark*) SVG beranimasi penuh.

---

## 🛠️ Teknologi & Stack yang Digunakan

Aplikasi portofolio ini dibangun di atas fondasi teknologi modern berikut:

### Core Stack
*   **Framework:** Next.js 16.2.6 (App Router & Turbopack Engine)
*   **Library:** React 19.2.4 (React Server & Client Components)
*   **Bahasa Pemrograman:** TypeScript 5.x (Strongly Typed & Type-safe)
*   **Styling & Design System:** Tailwind CSS v4 & PostCSS v4 (Utility-first) + Vanilla CSS kustom (untuk animasi kompleks dan tata letak mikro)

### Keahlian & Teknologi Lain (Tech Stack Showcase)
Di dalam komponen portofolio ini, keahlian saya dipetakan ke dalam beberapa spektrum keahlian berikut:
*   **Frontend:** React.js, Next.js, Tailwind CSS, TypeScript, Figma
*   **Backend & DB:** PHP, Laravel, Node.js, Express.js, PostgreSQL, MySQL, MongoDB
*   **DevOps & Tools:** Docker, iTop Customization, Odoo Customization, Google Workspace, WordPress, Ubuntu Server Deployment, PM2

---

## 📂 Struktur Proyek

```bash
My-Portofolio/
├── src/
│   ├── app/                    # Next.js App Router (Layout & Global Styles)
│   │   ├── favicon.ico
│   │   ├── globals.css         # Inti dari Premium Design System & Animasi
│   │   ├── layout.tsx          # Wrapper Layout Utama & HTML Head SEO
│   │   └── page.tsx            # Struktur Gabungan Komponen Halaman Utama
│   └── components/             # Kumpulan Komponen UI Interaktif
│       ├── Contact.tsx         # Formulir Kontak Premium & Tautan Sosial
│       ├── Experience.tsx      # Garis Waktu Riwayat Pendidikan & Kerja
│       ├── Footer.tsx          # Hak Cipta & Penutup Halaman
│       ├── Hero.tsx            # Bagian Hero, Typewriter, Profil & Unduh CV
│       ├── Navbar.tsx          # Navigasi Lengkap dengan Scroll-Spy & Mobile Menu
│       ├── ObserveProvider.tsx # Provider IntersectionObserver untuk Efek Reveal
│       ├── PageLoader.tsx      # Pemuat Halaman saat Awal Pembukaan Situs
│       ├── Projects.tsx        # Galeri Proyek Unggulan dengan Efek Video Hover
│       ├── ScrollProgressBar.tsx # Indikator Progress Scroll Paling Atas
│       ├── Skills.tsx          # Showcase Kumpulan Tech Stack Interaktif
│       ├── StatCounter.tsx     # Statistik Pencapaian dengan Efek Angka Berjalan
│       └── Testimonials.tsx    # Bagian Ulasan/Rekomendasi Klien/Rekan
├── public/                     # Aset Statis (Gambar, Video, & PDF CV)
├── package.json                # Pengaturan Dependensi & Skrip
└── tsconfig.json               # Konfigurasi TypeScript
```

---

## 💼 Proyek Pilihan (Featured Projects)

Aplikasi ini menampilkan tiga proyek unggulan saya yang menyelesaikan tantangan di dunia nyata:

1.  **JobFlow — E-Learning Platform**
    *   **Masalah:** Kurangnya platform pembelajaran terstruktur bagi lulusan baru untuk mempelajari keterampilan industri dan mengelola karir dalam satu dasbor.
    *   **Tantangan:** Mengintegrasikan Google Auth di sistem multi-role (admin/siswa) secara aman dan menerapkan pipa penerapan (*deployment pipeline*) PM2 di Ubuntu Server tanpa waktu mati (*zero-downtime*).
    *   **Stack:** React.js, Express.js, Google Auth, Multer, Ubuntu, Figma.

2.  **BuburKangYoyo — Food Sales App**
    *   **Masalah:** Kebutuhan digitalisasi pencatatan pesanan usaha makanan lokal guna meminimalisir kesalahan manual pada jam-jam sibuk.
    *   **Tantangan:** Merancang manajemen stok barang waktu-nyata (*real-time*) yang konsisten di tengah banyaknya pesanan yang masuk secara bersamaan dengan meminimalkan kondisi balapan (*race conditions*) melalui transaksi kueri SQL yang aman.
    *   **Stack:** PHP, MySQL, HTML/CSS, JavaScript, Bootstrap.

3.  **SummaAI — News Article Summarizer**
    *   **Masalah:** Pembaca merasa lelah membaca artikel berita panjang. Proyek ini hadir sebagai perangkum berita berbahasa Indonesia instan berbasis AI.
    *   **Tantangan:** Mengintegrasikan model pemelajaran mesin T5 Transformer ke dalam alur kerja web dengan latensi rendah. Diselesaikan dengan membuat backend Python FastAPI dan menerapkan metode *caching* pola artikel.
    *   **Stack:** Python, T5 Model, FastAPI, JavaScript, NLP.

---

## 🚀 Menjalankan Proyek Secara Lokal

Ikuti langkah-langkah berikut untuk menjalankan portofolio ini di lingkungan lokal Anda:

### 1. Klon Repositori
```bash
git clone https://github.com/viosarayhanpratama25-source/my-portofolio.git
cd My-Portofolio
```

### 2. Pasang Dependensi
```bash
npm install
```

### 3. Jalankan Server Pengembangan
```bash
npm run dev
```
Setelah server berjalan, buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

### 4. Membuat Build Produksi
Untuk memvalidasi dan membuild aplikasi portofolio dalam versi produksi yang optimal:
```bash
npm run build
```

### 5. Menjalankan Hasil Build Produksi
```bash
npm run start
```

---

## ✉️ Hubungi Saya

Mari berkolaborasi, berdiskusi tentang proyek baru, atau sekadar bertukar pikiran! Anda dapat menghubungi saya melalui saluran berikut:

*   **📧 Email:** [viosa.rayhan@gmail.com](mailto:viosa.rayhan@gmail.com)
*   **🔗 LinkedIn:** [linkedin.com/in/viosa-rayhan](https://www.linkedin.com/in/viosa-rayhan)
*   **💻 GitHub:** [github.com/viosa-rayhan](https://github.com/viosa-rayhan)
*   **📸 Instagram:** [@viosa.rayhan](https://instagram.com/viosa.rayhan)

---

Dibuat dengan 💻, ☕, dan semangat belajar oleh **Viosa Rayhan Pratama**. Hak Cipta dilindungi undang-undang.
