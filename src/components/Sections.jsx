import { useState } from 'react'
import Icon from './Icon.jsx'
import { BUSINESS, CATEGORIES, MAPS_EMBED, MAPS_LINK, TESTIMONIALS, WA_GENERAL } from '../data.js'

/* ---------- Strip keunggulan (menumpuk di bawah hero) ---------- */
export function Features() {
  const items = [
    { icon: 'sparkle', t: 'Menu', t2: 'Beragam' },
    { icon: 'truck', t: 'Pesan', t2: 'Antar' },
    { icon: 'box', t: 'Antar Tanpa', t2: 'Bertemu' },
    { icon: 'card', t: 'Bayar Kartu', t2: '& NFC' },
  ]
  return (
    <div className="features-wrap">
      <ul className="container features">
        {items.map((i) => (
          <li key={i.t}>
            <Icon name={i.icon} size={30} strokeWidth={1.5} />
            <span>
              {i.t}
              <br />
              {i.t2}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ---------- Pilihan andalan ---------- */
const SIGNATURE = [
  { id: 'main', title: 'Main Course', sub: 'Savory' },
  { id: 'matcha', title: 'Matcha Series', sub: '6 pilihan' },
  { id: 'mocktail', title: 'Mocktail Series', sub: '5 pilihan' },
  { id: 'herbal', title: 'Herbal Drink', sub: '5 pilihan' },
]

export function Signature({ onPick }) {
  return (
    <section className="section signature" aria-labelledby="sig-title">
      <div className="container">
        <h2 id="sig-title" className="ornament">
          <span>Pilihan Andalan Kami</span>
        </h2>
        <div className="signature__grid">
          {SIGNATURE.map((s) => {
            const cat = CATEGORIES.find((c) => c.id === s.id)
            const img = cat.image || cat.items[0].image
            return (
              <button key={s.id} className="sig" onClick={() => onPick(s.id)}>
                <img src={img} alt="" loading="lazy" />
                <span className="sig__label">
                  <strong>{s.title}</strong>
                  <small>{s.sub}</small>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------- Tentang ---------- */
export function AboutBand() {
  return (
    <section id="tentang" className="section about-band">
      <div className="container about-band__inner">
        <div className="mosaic" aria-hidden="true">
          <img className="mosaic__a" src="/images/menu/nasi-ayam-tempong.jpg" alt="" loading="lazy" />
          <img className="mosaic__b" src="/images/menu/fish-n-chip.jpg" alt="" loading="lazy" />
          <img className="mosaic__c" src="/images/menu/matcha-series.jpg" alt="" loading="lazy" />
        </div>
        <div className="about-band__copy">
          <p className="eyebrow">Tentang Kami</p>
          <h2>
            Lebih dari Sekadar <span className="script">Kafe &amp; Resto</span>
          </h2>
          <p>
            Tempat untuk bersantai, berkumpul, dan menikmati sajian manis maupun gurih. Selain makan di
            tempat, tersedia pesan antar dan antar tanpa bertemu.
          </p>
          <a className="btn btn--outline" href="#lokasi">
            Lihat Lokasi <Icon name="arrow" size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ---------- Ulasan ---------- */
function Stars({ value, size = 20 }) {
  return (
    <span className="stars" role="img" aria-label={`Rating ${String(value).replace('.', ',')} dari 5`}>
      <span className="stars__base">
        {[0, 1, 2, 3, 4].map((i) => (
          <Icon key={i} name="star" size={size} fill="currentColor" strokeWidth={0} />
        ))}
      </span>
      <span className="stars__fill" style={{ width: `${(value / 5) * 100}%` }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <Icon key={i} name="star" size={size} fill="currentColor" strokeWidth={0} />
        ))}
      </span>
    </span>
  )
}

export function Reviews() {
  return (
    <section id="ulasan" className="section reviews">
      <div className="container">
        <header className="heading">
          <p className="eyebrow">Ulasan Pelanggan</p>
          <h2>Dipercaya Pelanggan Bontang</h2>
        </header>

        <div className="reviews__layout">
          <div className="score">
            <strong className="score__num">{String(BUSINESS.rating).replace('.', ',')}</strong>
            <Stars value={BUSINESS.rating} size={26} />
            <p>
              dari <strong>{BUSINESS.reviewCount} ulasan</strong>
            </p>
            <a className="btn btn--dark" href={MAPS_LINK} target="_blank" rel="noreferrer">
              Lihat ulasan di Google Maps <Icon name="arrow" size={16} />
            </a>
          </div>

          {TESTIMONIALS.length > 0 ? (
            <div className="testimonials">
              {TESTIMONIALS.map((t, i) => (
                <figure className="testimonial" key={i}>
                  <Stars value={t.rating} size={16} />
                  <blockquote>{t.text}</blockquote>
                  <figcaption>{t.name}</figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="testimonials testimonials--note">
              <Icon name="sparkle" size={28} />
              <h3>Cerita dari pelanggan kami</h3>
              <p>
                Rating {String(BUSINESS.rating).replace('.', ',')} dari {BUSINESS.reviewCount} ulasan
                menunjukkan pengalaman yang konsisten. Baca ulasan lengkap dan tinggalkan ulasanmu langsung
                di Google Maps.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ---------- Lokasi & Tentang ---------- */
function InfoCard({ icon, title, children }) {
  return (
    <div className="info">
      <span className="info__icon">
        <Icon name={icon} size={22} />
      </span>
      <div>
        <h4>{title}</h4>
        {children}
      </div>
    </div>
  )
}

export function Location() {
  const [copied, setCopied] = useState('')

  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand('copy')
      } catch {
        /* abaikan */
      }
      ta.remove()
    }
    setCopied(key)
    setTimeout(() => setCopied(''), 1800)
  }

  const sendToPhone = async () => {
    const data = { title: BUSINESS.name, text: `${BUSINESS.name} — ${BUSINESS.phoneDisplay}`, url: MAPS_LINK }
    if (navigator.share) {
      try {
        await navigator.share(data)
        return
      } catch {
        /* dibatalkan pengguna */
      }
    }
    copy(`${BUSINESS.name}\n${BUSINESS.phoneDisplay}\n${MAPS_LINK}`, 'share')
  }

  return (
    <section id="lokasi" className="section location">
      <div className="container">
        <header className="heading">
          <p className="eyebrow">Lokasi &amp; Kontak</p>
          <h2>Mampir ke Sugar Rush</h2>
          <p className="heading__sub">
            {BUSINESS.category} dengan rating {String(BUSINESS.rating).replace('.', ',')} ({BUSINESS.reviewCount} ulasan).
          </p>
        </header>

        <div className="about__grid">
          <div className="about__cards">
            <InfoCard icon="pin" title="Alamat">
              <p>{BUSINESS.address}</p>
              <small>Plus Code: {BUSINESS.plusCode}</small>
              <div className="info__actions">
                <button className="btn btn--outline btn--sm" onClick={() => copy(BUSINESS.address, 'addr')}>
                  <Icon name={copied === 'addr' ? 'check' : 'copy'} size={16} />
                  {copied === 'addr' ? 'Tersalin' : 'Salin alamat'}
                </button>
                <a className="btn btn--outline btn--sm" href={MAPS_LINK} target="_blank" rel="noreferrer">
                  <Icon name="nav" size={16} /> Buka peta
                </a>
              </div>
            </InfoCard>

            <InfoCard icon="phone" title="Telepon / WhatsApp">
              <p>{BUSINESS.phoneDisplay}</p>
              <div className="info__actions">
                <a className="btn btn--outline btn--sm" href={`tel:${BUSINESS.phoneTel}`}>
                  <Icon name="phone" size={16} /> Hubungi
                </a>
                <button className="btn btn--outline btn--sm" onClick={sendToPhone}>
                  <Icon name={copied === 'share' ? 'check' : 'share'} size={16} />
                  {copied === 'share' ? 'Tersalin' : 'Kirim ke ponsel'}
                </button>
              </div>
            </InfoCard>

            <InfoCard icon="clock" title="Jam Buka">
              <p>Buka setiap hari</p>
              <small>Tutup pukul {BUSINESS.closing}</small>
            </InfoCard>

            <InfoCard icon="truck" title="Opsi Layanan">
              <ul className="pills">
                {BUSINESS.serviceOptions
                  .slice()
                  .reverse()
                  .map((s) => (
                    <li key={s}>{s}</li>
                  ))}
              </ul>
            </InfoCard>

            <InfoCard icon="zap" title="Fasilitas & Perencanaan">
              <ul className="pills">
                {BUSINESS.facilities.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard icon="card" title="Pembayaran">
              <ul className="pills">
                {BUSINESS.payments.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </InfoCard>
          </div>

          <div className="about__map">
            <iframe
              title="Peta lokasi Sugar Rush Sweet And Savory"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Ajakan pesan ---------- */
export function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-band__inner">
        <h2 id="cta-title">Lagi Pengen? Kami Antar!</h2>
        <p>Manis &nbsp;|&nbsp; Gurih &nbsp;|&nbsp; Segar</p>
        <a className="btn btn--gold btn--lg" href={WA_GENERAL} target="_blank" rel="noreferrer">
          <Icon name="chat" size={18} /> Pesan via WhatsApp
        </a>
      </div>
    </section>
  )
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="brand brand--footer">
          <img src="/images/logo.png" alt="" width="44" height="44" />
          <span className="brand__text">
            <strong>Sugar Rush</strong>
            <small>Sweet and Savory</small>
          </span>
        </div>
        <p>
          {BUSINESS.address}
          <br />
          WhatsApp {BUSINESS.phoneDisplay} &bull; Tutup pukul {BUSINESS.closing}
        </p>
        <p className="footer__copy">&copy; 2026 {BUSINESS.name}</p>
      </div>
    </footer>
  )
}

/* ---------- Tombol mengambang: keranjang bila ada isi, selain itu WhatsApp ---------- */
export function FloatingWa({ count, onOpenCart }) {
  if (count > 0) {
    return (
      <button className="cartbar" onClick={onOpenCart}>
        <span className="cartbar__left">
          <Icon name="bag" size={20} />
          <strong>{count} item</strong>
        </span>
        <span className="cartbar__cta">
          Lihat Pesanan <Icon name="arrow" size={16} />
        </span>
      </button>
    )
  }
  return (
    <a className="fab" href={WA_GENERAL} target="_blank" rel="noreferrer" aria-label="Pesan via WhatsApp">
      <Icon name="chat" size={26} />
    </a>
  )
}
