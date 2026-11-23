import Icon from './Icon.jsx'
import { BUSINESS, WA_GENERAL } from '../data.js'

export default function Hero() {
  return (
    <section id="ringkasan" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__kicker">Kafe &bull; Resto</p>
          <h1 className="hero__title">
            <span>Perjalanan Rasa</span>
            <span className="script">Manis &amp; Gurih</span>
          </h1>
          <p className="hero__lead">
            Dari Fish N Chip dan Sop Iga hingga Matcha, Mocktail, dan Herbal Drink &mdash; semua dibuat
            untuk bikin harimu terasa manis. Di Bontang.
          </p>

          <div className="hero__chips">
            <span className="chip">
              <Icon name="star" size={15} fill="currentColor" strokeWidth={0} />
              <strong>{String(BUSINESS.rating).replace('.', ',')}</strong>
              <span>({BUSINESS.reviewCount} ulasan)</span>
            </span>
            <span className="chip chip--open">
              <i className="dot" aria-hidden="true" />
              Buka &bull; Tutup pukul 22.00
            </span>
          </div>

          <div className="hero__cta">
            <a className="btn btn--gold btn--lg" href={WA_GENERAL} target="_blank" rel="noreferrer">
              Pesan via WhatsApp <Icon name="arrow" size={18} />
            </a>
            <a className="btn btn--ghost btn--lg" href="#menu">
              Lihat Menu
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__plate">
            <img src="/images/menu/sop-iga.jpg" alt="" />
          </div>
          <div className="hero__float hero__float--a">
            <img src="/images/menu/fish-n-chip.jpg" alt="" />
          </div>
          <div className="hero__float hero__float--b">
            <img src="/images/menu/baristas-choice.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
