# Sugar Rush Sweet And Savory — Website

Website React JS (Vite) untuk kafe & resto **Sugar Rush Sweet And Savory**, Bontang.

## Menjalankan

```bash
npm install
npm run dev      # mode pengembangan, buka http://localhost:5173
npm run build    # hasil produksi ada di folder dist/
npm run preview  # uji hasil build
```

Perlu Node.js 18 atau lebih baru.

## Yang perlu Anda isi / sesuaikan

Semua konten ada di **`src/data.js`**:

| Yang diubah | Lokasi di `src/data.js` |
| --- | --- |
| Harga menu | field `price` pada tiap item (angka Rupiah, mis. `35000`). Selama `null`, harga tidak tampil dan total dikonfirmasi admin lewat WhatsApp |
| Deskripsi menu | field `desc` |
| Testimoni asli pelanggan | array `TESTIMONIALS` |
| Nomor WhatsApp, alamat, jam buka | objek `BUSINESS` |

Foto menu dan logo ada di `public/images/`. Ganti file dengan nama yang sama untuk memperbarui foto.

## Struktur

```
src/
  data.js               data bisnis, menu, dan link WhatsApp
  App.jsx               susunan halaman
  styles.css            tema (hangus hangat, emas, merah marun)
  components/
    Navbar.jsx  Hero.jsx  Menu.jsx  CartDrawer.jsx  Sections.jsx  Icon.jsx
public/images/menu/     foto menu yang sudah dipotong rapi (tanpa teks poster)
```

## Cara pemesanan

Pelanggan menambahkan menu ke keranjang (atur jumlah, pilih layanan *Pesan antar* / *Antar tanpa bertemu*,
tulis catatan), lalu menekan **Pesan via WhatsApp**. Daftar pesanan terkirim otomatis ke WhatsApp admin
(0812-4692-3616). Tidak ada pembayaran di website; admin mengurus pembayaran lewat chat.
Nomor diubah di `BUSINESS.whatsapp` pada `src/data.js`.

## Deploy

Folder `dist/` hasil `npm run build` dapat diunggah ke Vercel, Netlify, atau hosting statis apa pun.
