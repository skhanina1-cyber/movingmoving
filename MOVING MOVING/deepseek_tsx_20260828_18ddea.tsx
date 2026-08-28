// app/quote/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

// Item definitions with prices
const ITEMS = [
  { id: 'sofa', label: '🛋️ Sofa / Couch', price: 35 },
  { id: 'mattress', label: '🛏️ Mattress', price: 25 },
  { id: 'chair', label: '🪑 Chair', price: 15 },
  { id: 'fridge', label: '🧊 Fridge / Freezer', price: 35 },
  { id: 'washer', label: '🧺 Washing Machine', price: 30 },
  { id: 'tv', label: '📺 TV / Monitor', price: 20 },
  { id: 'rubbish-bags', label: '🗑️ Rubbish Bag', price: 8 },
]

export default function QuotePage() {
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({})
  const [postcode, setPostcode] = useState('')
  const [total, setTotal] = useState<number | null>(null)

  const updateQuantity = (itemId: string, delta: number) => {
    setSelectedItems(prev => {
      const current = prev[itemId] || 0
      const newValue = Math.max(0, current + delta)
      if (newValue === 0) {
        const { [itemId]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [itemId]: newValue }
    })
    setTotal(null) // Reset quote when items change
  }

  const calculateQuote = () => {
    const subtotal = Object.entries(selectedItems).reduce((sum, [id, qty]) => {
      const item = ITEMS.find(i => i.id === id)
      return sum + (item ? item.price * qty : 0)
    }, 0)

    // Simple multiplier based on postcode (simplified)
    const multiplier = postcode.toUpperCase().startsWith('E') ? 1.2 : 1.0
    const adjustedTotal = Math.max(subtotal * multiplier, 60) // Minimum £60
    const vat = adjustedTotal * 0.20
    const finalTotal = adjustedTotal + vat

    setTotal(finalTotal)
  }

  const totalItems = Object.values(selectedItems).reduce((a, b) => a + b, 0)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-4xl">
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Get Your Instant Quote</h1>
        <p className="text-gray-600 mb-8">Select what you need collecting and we'll give you a price</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Item Selection */}
          <div className="space-y-4">
            {ITEMS.map(item => {
              const quantity = selectedItems[item.id] || 0
              return (
                <div key={item.id} className="bg-white rounded-xl shadow-sm p-4 flex justify-between items-center">
                  <div>
                    <span className="font-medium">{item.label}</span>
                    <span className="text-sm text-gray-500 ml-2">£{item.price}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-semibold">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-full bg-blue-600 text-white hover:bg-blue-700"
                    >
                      +
                    </button>
                  </div>
                </div>
              )
            })}

            <div className="bg-white rounded-xl shadow-sm p-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                📮 Your Postcode
              </label>
              <input
                type="text"
                placeholder="e.g., SW1A 1AA"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={calculateQuote}
              disabled={totalItems === 0}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 disabled:opacity-50 transition"
            >
              Get Quote
            </button>
          </div>

          {/* Right: Quote Result */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            {total !== null ? (
              <>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Your Quote</h2>
                <div className="text-4xl font-bold text-green-600 mb-4">
                  £{total.toFixed(2)}
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Including VAT · {Object.keys(selectedItems).length} item(s)
                </p>
                <Link
                  href="/booking"
                  className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition"
                >
                  Book Now →
                </Link>
                <p className="text-xs text-gray-400 text-center mt-3">
                  No hidden fees · Licensed & insured
                </p>
              </>
            ) : (
              <div className="text-center text-gray-400 py-8">
                <div className="text-5xl mb-3">💷</div>
                <p>Select items above</p>
                <p className="text-sm">Your quote will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}