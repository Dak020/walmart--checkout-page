'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'

const screenshotUrl =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-10-02%20at%2021.57.57-XgwCXIhERh1boxjg7em0T51B43Xl7c.png'

export default function Page() {
  const [promo, setPromo] = useState('')
  const [applied, setApplied] = useState(false)
  const subtotal = 538.24
  const discount = applied ? 250 : 0
  const total = subtotal - discount

  function applyPromo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (promo.trim()) setApplied(true)
  }

  return (
    <main className="cart-page">
      <div className="cart-image-wrap" aria-label="Walmart cart preview">
        <img src={screenshotUrl} alt="Walmart cart with Halloween products" className="cart-image" />
      </div>

      <aside className="checkout-column" aria-label="Checkout summary">
        <section className="checkout-card">
          <button className="checkout-button" type="button">Continue to checkout</button>
          <p className="signin-copy">For the best shopping experience, sign in</p>
          <div className="summary-divider" />
          <div className="summary-row strong"><span>Subtotal (18 items)</span><span>${subtotal.toFixed(2)}</span></div>
          <div className="summary-row"><span>Shipping</span><span className="free">Free</span></div>
          <div className="summary-row"><span>Taxes</span><span>Calculated at checkout</span></div>
          <div className="promo-box">
            <div className="promo-title">Add promo code</div>
            <form onSubmit={applyPromo} className="promo-form">
              <label htmlFor="promo" className="sr-only">Promo code</label>
              <input
                id="promo"
                value={promo}
                onChange={(event) => setPromo(event.target.value.toUpperCase())}
                placeholder="Enter code"
                autoComplete="off"
                maxLength={20}
                suppressHydrationWarning
              />
              <button type="submit">Apply</button>
            </form>
            {applied && <p className="promo-success">Discount applied</p>}
          </div>
          {applied && <div className="discount-row"><span>Discount</span><span>-${discount.toFixed(2)}</span></div>}
          <div className="total-row"><span>Estimated total</span><span>${total.toFixed(2)}</span></div>
          <div className="later-card">
            <div><strong>OnePay Later</strong><small>Financing options available</small></div>
            <button type="button">Continue</button>
          </div>
        </section>
        <label className="gift-card"><input type="checkbox" /> <span>This order is a gift</span><span aria-hidden="true">🎁</span></label>
      </aside>
    </main>
  )
}
