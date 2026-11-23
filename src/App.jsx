import { useCallback, useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Menu from './components/Menu.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import { Features, Signature, AboutBand, Reviews, Location, CtaBand, Footer, FloatingWa } from './components/Sections.jsx'
import { ITEM_INDEX } from './data.js'

function loadCart() {
  try {
    const raw = JSON.parse(window.localStorage.getItem('sr-cart') || '{}')
    return Object.fromEntries(Object.entries(raw).filter(([id, q]) => ITEM_INDEX[id] && q > 0))
  } catch {
    return {}
  }
}

export default function App() {
  const [active, setActive] = useState('all')
  const [cart, setCart] = useState(loadCart)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem('sr-cart', JSON.stringify(cart))
    } catch {
      /* abaikan */
    }
  }, [cart])

  const add = useCallback((id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 })), [])
  const dec = useCallback(
    (id) =>
      setCart((c) => {
        const next = { ...c }
        if ((next[id] || 0) <= 1) delete next[id]
        else next[id] -= 1
        return next
      }),
    [],
  )
  const remove = useCallback(
    (id) =>
      setCart((c) => {
        const next = { ...c }
        delete next[id]
        return next
      }),
    [],
  )
  const clear = useCallback(() => setCart({}), [])
  const close = useCallback(() => setOpen(false), [])
  const openCart = useCallback(() => setOpen(true), [])
  const count = useMemo(() => Object.values(cart).reduce((s, q) => s + q, 0), [cart])

  const pickCategory = useCallback((id) => {
    setActive(id)
    requestAnimationFrame(() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }))
  }, [])

  return (
    <>
      <Navbar cartCount={count} onOpenCart={openCart} />
      <main>
        <Hero />
        <Features />
        <Signature onPick={pickCategory} />
        <Menu active={active} onActive={setActive} cart={cart} onAdd={add} onDec={dec} />
        <AboutBand />
        <Reviews />
        <Location />
        <CtaBand />
      </main>
      <Footer />
      <FloatingWa count={count} onOpenCart={openCart} />
      <CartDrawer open={open} onClose={close} cart={cart} onAdd={add} onDec={dec} onRemove={remove} onClear={clear} />
    </>
  )
}
