// ============================================================
//  DATA UTAMA WEBSITE — edit di sini, tampilan ikut berubah.
//  Semua data bisnis & nama menu berasal dari brief resmi.
// ============================================================

export const BUSINESS = {
  name: 'Sugar Rush Sweet And Savory',
  short: 'Sugar Rush',
  tagline: 'Sweet and Savory',
  category: 'Kafe & Resto',
  rating: 4.5,
  reviewCount: 660,
  address:
    'Jl. Pattimura No.34, Api-Api, Kec. Bontang Utara, Kota Bontang, Kalimantan Timur 75311',
  plusCode: '4FJX+GP Api-Api, Kota Bontang',
  phoneDisplay: '0812-4692-3616',
  phoneTel: '+6281246923616',
  whatsapp: '6281246923616', // format internasional untuk wa.me
  hours: 'Buka setiap hari • Tutup pukul 22.00 WITA',
  closing: '22.00 WITA',
  serviceOptions: ['Pesan antar', 'Antar tanpa bertemu'],
  facilities: ['Toilet', 'Belanja kilat'],
  payments: ['Kartu debit', 'Kartu kredit', 'Pembayaran seluler dengan NFC'],
}

const mapQuery = encodeURIComponent(
  'Sugar Rush Sweet And Savory, Jl. Pattimura No.34, Api-Api, Bontang Utara, Kota Bontang',
)
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${mapQuery}&output=embed`

// Ulasan pelanggan. Isi dengan testimoni ASLI dari Google Maps bila ada, contoh:
// { name: 'Nama Pelanggan', rating: 5, text: 'Isi ulasan...' }
export const TESTIMONIALS = []

// ------------------------------------------------------------
//  MENU
//  price: isi angka (Rupiah) bila harga sudah pasti, mis. 35000.
//  Selama price = null, harga tidak ditampilkan dan dikonfirmasi
//  admin lewat WhatsApp.
// ------------------------------------------------------------
export const CATEGORIES = [
  {
    id: 'main',
    label: 'Main Course',
    eyebrow: 'Savory',
    layout: 'cards',
    items: [
      {
        id: 'fish-n-chip',
        name: 'Fish N Chip by Sugar Rush',
        desc: 'Ikan berbalut tepung renyah dengan kentang goreng, salad, dan saus.',
        image: '/images/menu/fish-n-chip.jpg',
        price: null,
      },
      {
        id: 'fried-rice-kampoeng',
        name: 'Fried Rice Kampoeng',
        desc: 'Nasi goreng ala kampung dengan telur dan aneka pelengkap segar.',
        image: '/images/menu/fried-rice-kampoeng.jpg',
        price: null,
      },
      {
        id: 'nasi-ayam-tempong',
        name: 'Nasi Ayam Tempong Bakar & Goreng',
        desc: 'Nasi dengan ayam bakar atau goreng, tahu-tempe, lalapan, dan sambal.',
        image: '/images/menu/nasi-ayam-tempong.jpg',
        price: null,
      },
      {
        id: 'sop-iga',
        name: 'Sop Iga',
        desc: 'Sop iga hangat disajikan bersama nasi dan pelengkap.',
        image: '/images/menu/sop-iga.jpg',
        price: null,
      },
    ],
  },
  {
    id: 'barista',
    label: "Barista's Choice",
    eyebrow: 'Kopi & Spesial',
    layout: 'list',
    image: '/images/menu/baristas-choice.jpg',
    items: [
      { id: 'peanut-butter-latte', name: 'Peanut Butter Latte', price: null },
      { id: 'matcha-coffee', name: 'Matcha Coffee', price: null },
    ],
  },
  {
    id: 'matcha',
    label: 'Matcha Series',
    eyebrow: 'Seri 01–06',
    layout: 'list',
    image: '/images/menu/matcha-series.jpg',
    items: [
      { id: 'matcha-lotus', no: '01', name: 'Matcha Lotus', price: null },
      { id: 'matcha-coffee-sea-salt', no: '02', name: 'Matcha Coffee Sea Salt', price: null },
      { id: 'strawberry-cream-matcha', no: '03', name: 'Strawberry Cream Matcha', price: null },
      { id: 'coconut-matcha', no: '04', name: 'Coconut Matcha', price: null },
      { id: 'matcha-oat-lattee', no: '05', name: 'Matcha Oat Lattee', price: null },
      { id: 'matcha-latte', no: '06', name: 'Matcha Latte', price: null },
    ],
  },
  {
    id: 'mocktail',
    label: 'Mocktail Series',
    eyebrow: 'Seri 01–05',
    layout: 'list',
    image: '/images/menu/mocktail-series.jpg',
    items: [
      { id: 'creamy-mocktail', no: '01', name: 'Creamy Mocktail', price: null },
      { id: 'sunrise', no: '02', name: 'Sunrise', price: null },
      { id: 'fruity-fusion', no: '03', name: 'Fruity Fusion', price: null },
      { id: 'berry-fizz', no: '04', name: 'Berry Fizz', price: null },
      { id: 'strawberry-float', no: '05', name: 'Strawberry Float', price: null },
    ],
  },
  {
    id: 'herbal',
    label: 'Herbal Drink',
    eyebrow: 'Seri 01–05',
    layout: 'list',
    image: '/images/menu/herbal-drink.jpg',
    items: [
      { id: 'boost-immunity', no: '01', name: 'Boost Immunity', desc: 'Jahe, madu, kental manis', price: null },
      { id: 'herbal-harmony', no: '02', name: 'Herbal Harmony', desc: 'Jahe, madu, sereh', price: null },
      { id: 'honey-citron', no: '03', name: 'Honey Citron', desc: 'Madu citron', price: null },
      { id: 'herb-haven', no: '04', name: 'Herb Haven', desc: 'Lengkuas & jahe', price: null },
      {
        id: 'traditional-tonic',
        no: '05',
        name: 'Traditional Tonic',
        desc: 'Kunyit, jeruk nipis, jahe, sereh, lengkuas',
        price: null,
      },
    ],
  },
  {
    id: 'tea',
    label: 'Tea & Dilmah Tea',
    eyebrow: 'Teh Pilihan',
    layout: 'list',
    image: '/images/menu/tea-series.jpg',
    items: [
      { id: 'lychee-tea', group: 'Tea Series', no: '01', name: 'Lychee Tea', price: null },
      { id: 'peach-tea', group: 'Tea Series', no: '02', name: 'Peach Tea', price: null },
      { id: 'strawberry-tea', group: 'Tea Series', no: '03', name: 'Strawberry Tea', price: null },
      { id: 'earl-grey', group: 'Dilmah Tea', no: '01', name: 'Earl Grey', price: null },
      { id: 'camomille-flower', group: 'Dilmah Tea', no: '02', name: 'Camomille Flower', price: null },
      { id: 'blackcurant', group: 'Dilmah Tea', no: '03', name: 'Blackcurant', price: null },
      { id: 'tradisional-olong', group: 'Dilmah Tea', no: '04', name: 'Tradisional Olong', price: null },
    ],
  },
]

// Link WhatsApp admin dengan pesan otomatis
export const waLink = (text) => `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`
export const WA_GENERAL = waLink('Halo Sugar Rush, saya ingin pesan antar.')
export const waOrder = (item, category) =>
  waLink(
    `Halo Sugar Rush, saya mau pesan:\n*${item.name}* (${category})\n\nMohon info harga & ketersediaannya ya. Terima kasih!`,
  )

export const formatRupiah = (n) => 'Rp ' + n.toLocaleString('id-ID')

// Peta id -> item lengkap (dengan info kategori) untuk keranjang
export const ITEM_INDEX = Object.fromEntries(
  CATEGORIES.flatMap((c) =>
    c.items.map((i) => [i.id, { ...i, categoryId: c.id, categoryLabel: c.label, thumb: i.image || c.image }]),
  ),
)

// Pesan WhatsApp dari keranjang. Pembayaran diurus admin lewat chat.
export function waCart(cart, service, note) {
  const lines = Object.entries(cart)
    .filter(([id]) => ITEM_INDEX[id])
    .map(([id, q], n) => `${n + 1}. ${ITEM_INDEX[id].name} x${q}`)
  return waLink(
    [
      'Halo Sugar Rush, saya mau pesan:',
      '',
      ...lines,
      '',
      `Layanan: ${service}`,
      note.trim() ? `Catatan: ${note.trim()}` : null,
      '',
      'Mohon info total & cara pembayarannya ya. Terima kasih!',
    ]
      .filter((l) => l !== null)
      .join('\n'),
  )
}
