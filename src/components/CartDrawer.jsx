import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { BUSINESS, ITEM_INDEX, formatRupiah, waCart } from '../data.js'

export default function CartDrawer({ open, onClose, cart, onAdd, onDec, onRemove, onClear }) {
  const [service, setService] = useState(BUSINESS.serviceOptions[0])
  const [note, setNote] = useState('')

  const entries = Object.entries(cart).filter(([id]) => ITEM_INDEX[id])
  const total = entries.reduce((s, [id, q]) => s + (ITEM_INDEX[id].price || 0) * q, 0)
  const hasPrices = entries.some(([id]) => ITEM_INDEX[id].price != null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const send = () => {
    window.open(waCart(cart, service, note), '_blank', 'noopener')
  }

  return (
    <>
      <div className={`overlay ${open ? 'is-open' : ''}`} onClick={onClose} aria-hidden="true" />
      <aside className={`drawer ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Keranjang pesanan" aria-hidden={!open}>
        <header className="drawer__head">
          <h2>Pesanan Kamu</h2>
          <button className="drawer__close" onClick={onClose} aria-label="Tutup keranjang">
            <Icon name="x" size={22} />
          </button>
        </header>

        {entries.length === 0 ? (
          <div className="drawer__empty">
            <Icon name="bag" size={44} strokeWidth={1.4} />
            <p>Keranjang masih kosong.</p>
            <button className="btn btn--gold" onClick={onClose}>
              Pilih Menu
            </button>
          </div>
        ) : (
          <>
            <ul className="drawer__list">
              {entries.map(([id, q]) => {
                const it = ITEM_INDEX[id]
                return (
                  <li key={id} className="line">
                    <img src={it.thumb} alt="" />
                    <div className="line__text">
                      <strong>{it.name}</strong>
                      <small>{it.categoryLabel}</small>
                      {it.price != null && <span className="price">{formatRupiah(it.price * q)}</span>}
                    </div>
                    <div className="line__ctrl">
                      <div className="stepper stepper--sm">
                        <button onClick={() => onDec(id)} aria-label={`Kurangi ${it.name}`}>
                          <Icon name="minus" size={14} />
                        </button>
                        <output>{q}</output>
                        <button onClick={() => onAdd(id)} aria-label={`Tambah ${it.name}`}>
                          <Icon name="plus" size={14} />
                        </button>
                      </div>
                      <button className="line__del" onClick={() => onRemove(id)} aria-label={`Hapus ${it.name}`}>
                        <Icon name="trash" size={16} />
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="drawer__form">
              <fieldset>
                <legend>Layanan</legend>
                <div className="seg">
                  {BUSINESS.serviceOptions.map((o) => (
                    <label key={o} className={service === o ? 'is-on' : ''}>
                      <input type="radio" name="service" checked={service === o} onChange={() => setService(o)} />
                      {o}
                    </label>
                  ))}
                </div>
              </fieldset>
              <label className="note">
                <span>Catatan (opsional)</span>
                <textarea rows="2" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Alamat antar, level pedas, tanpa es, dll." />
              </label>
            </div>

            <footer className="drawer__foot">
              {hasPrices && (
                <div className="drawer__total">
                  <span>Perkiraan total</span>
                  <strong>{formatRupiah(total)}</strong>
                </div>
              )}
              <button className="btn btn--wa btn--lg btn--block" onClick={send}>
                <Icon name="chat" size={18} /> Pesan via WhatsApp
              </button>
              <p className="drawer__hint">Pesanan dikirim ke WhatsApp admin. Pembayaran diurus admin lewat chat.</p>
              <button className="drawer__clear" onClick={onClear}>
                Kosongkan keranjang
              </button>
            </footer>
          </>
        )}
      </aside>
    </>
  )
}
