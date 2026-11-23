import { useMemo, useState } from 'react'
import Icon from './Icon.jsx'
import { CATEGORIES, formatRupiah } from '../data.js'

function OrderButton({ item, qty, onAdd, onDec, compact = false }) {
  if (qty > 0) {
    return (
      <div className={`stepper ${compact ? '' : 'stepper--block'}`} role="group" aria-label={`Jumlah ${item.name}`}>
        <button onClick={() => onDec(item.id)} aria-label={`Kurangi ${item.name}`}>
          <Icon name="minus" size={16} />
        </button>
        <output aria-live="polite">{qty}</output>
        <button onClick={() => onAdd(item.id)} aria-label={`Tambah ${item.name}`}>
          <Icon name="plus" size={16} />
        </button>
      </div>
    )
  }
  return (
    <button className={`btn btn--gold ${compact ? 'btn--sm' : 'btn--block'}`} onClick={() => onAdd(item.id)}>
      <Icon name="plus" size={16} /> Tambah
    </button>
  )
}

function Price({ value }) {
  if (value == null) return null
  return <span className="price">{formatRupiah(value)}</span>
}

function CardsBlock({ items, cart, onAdd, onDec }) {
  return (
    <div className="cards">
      {items.map((item) => (
        <article className="card" key={item.id}>
          <div className="card__img">
            <img src={item.image} alt={item.name} loading="lazy" />
          </div>
          <div className="card__body">
            <h4>{item.name}</h4>
            <p>{item.desc}</p>
            <div className="card__foot">
              <Price value={item.price} />
              <OrderButton item={item} qty={cart[item.id] || 0} onAdd={onAdd} onDec={onDec} />
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

function ListBlock({ category, items, cart, onAdd, onDec }) {
  const groups = []
  items.forEach((i) => {
    const key = i.group || ''
    let g = groups.find((x) => x.key === key)
    if (!g) groups.push((g = { key, items: [] }))
    g.items.push(i)
  })

  return (
    <div className="listblock">
      <figure className="listblock__photo">
        <img src={category.image} alt={`Foto ${category.label}`} loading="lazy" />
        <figcaption>{category.label}</figcaption>
      </figure>
      <div className="listblock__items">
        {groups.map((g) => (
          <div key={g.key || 'all'}>
            {g.key && <h4 className="subgroup">{g.key}</h4>}
            <ul className="rows">
              {g.items.map((item) => (
                <li className="row" key={item.id}>
                  {item.no && <span className="row__no">{item.no}</span>}
                  <div className="row__text">
                    <strong>{item.name}</strong>
                    {item.desc && <small>{item.desc}</small>}
                  </div>
                  <Price value={item.price} />
                  <OrderButton item={item} qty={cart[item.id] || 0} onAdd={onAdd} onDec={onDec} compact />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Menu({ active, onActive, cart, onAdd, onDec }) {
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return CATEGORIES.filter((c) => active === 'all' || c.id === active)
      .map((c) => ({
        ...c,
        items: c.items.filter(
          (i) =>
            !q ||
            i.name.toLowerCase().includes(q) ||
            (i.desc || '').toLowerCase().includes(q) ||
            c.label.toLowerCase().includes(q),
        ),
      }))
      .filter((c) => c.items.length > 0)
  }, [active, query])

  return (
    <section id="menu" className="section menu">
      <div className="container">
        <header className="heading">
          <p className="eyebrow">Menu Kami</p>
          <h2>Pilih Favoritmu</h2>
          <p className="heading__sub">Tambahkan menu ke keranjang, lalu kirim pesanan ke WhatsApp admin. Pembayaran diurus admin lewat chat.</p>
        </header>

        <div className="toolbar">
          <div className="tabs" role="tablist" aria-label="Kategori menu">
            {[{ id: 'all', label: 'Semua' }, ...CATEGORIES].map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={active === c.id}
                className={`tab ${active === c.id ? 'is-active' : ''}`}
                onClick={() => onActive(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <label className="search">
            <Icon name="search" size={18} />
            <input
              type="search"
              placeholder="Cari menu, mis. matcha"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Cari menu"
            />
          </label>
        </div>

        {visible.length === 0 && <p className="empty">Menu &ldquo;{query}&rdquo; tidak ditemukan. Coba kata kunci lain.</p>}

        {visible.map((c) => (
          <section className="category" key={c.id} aria-labelledby={`cat-${c.id}`}>
            <div className="category__head">
              <h3 id={`cat-${c.id}`}>{c.label}</h3>
              <span className="count">{c.items.length} menu</span>
            </div>
            {c.layout === 'cards' ? <CardsBlock items={c.items} cart={cart} onAdd={onAdd} onDec={onDec} /> : <ListBlock category={c} items={c.items} cart={cart} onAdd={onAdd} onDec={onDec} />}
          </section>
        ))}
      </div>
    </section>
  )
}
