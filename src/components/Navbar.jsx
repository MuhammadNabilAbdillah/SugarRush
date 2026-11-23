import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { WA_GENERAL } from '../data.js'

const LINKS = [
  { href: '#ringkasan', label: 'Beranda' },
  { href: '#menu', label: 'Menu' },
  { href: '#tentang', label: 'Tentang' },
  { href: '#ulasan', label: 'Ulasan' },
  { href: '#lokasi', label: 'Kontak' },
]

export default function Navbar({ cartCount, onOpenCart }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  return (
    <header className={`navbar ${scrolled || open ? 'is-scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#ringkasan" className="brand" aria-label="Sugar Rush Sweet And Savory — beranda">
          <img src="/images/logo.png" alt="" width="46" height="46" />
          <span className="brand__text">
            <strong>Sugar Rush</strong>
            <small>Sweet and Savory</small>
          </span>
        </a>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`} aria-label="Navigasi utama">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn--gold navbar__wa-mobile" href={WA_GENERAL} target="_blank" rel="noreferrer">
            <Icon name="chat" size={18} /> Pesan via WhatsApp
          </a>
        </nav>

        <div className="navbar__actions">
          <a className="btn btn--gold btn--sm navbar__wa" href={WA_GENERAL} target="_blank" rel="noreferrer">
            <Icon name="chat" size={16} /> Pesan via WhatsApp
          </a>
          <button className="icon-btn" onClick={onOpenCart} aria-label={`Buka keranjang pesanan, ${cartCount} item`}>
            <Icon name="bag" size={22} />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>
          <button
            className="icon-btn navbar__burger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
          >
            <Icon name={open ? 'x' : 'menu'} size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}
