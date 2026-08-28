// app/admin/settings/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AdminSettings() {
  const [prices, setPrices] = useState({
    sofa: 35,
    mattress: 25,
    chair: 15,
    fridge: 35,
    washer: 30,
    tv: 20,
    'rubbish-bags': 8
  })

  const [minCharge, setMinCharge] = useState(60)
  const [vatRate, setVatRate] = useState(20)

  const handlePriceChange = (item: string, value: string) => {
    setPrices(prev => ({ ...prev, [item]: parseFloat(value) || 0 }))
  }

  const handleSave = () => {
    alert('Settings saved! (In production, this would save to the database)')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-3xl">
        <Link href="/admin" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to Dashboard
        </Link>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">⚙️ Settings</h1>

          {/* Pricing */}
          <div className="mb-6">
            <h2 className="font-semibold text-gray-700 mb-3">💰 Item Pricing</h2>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(prices).map(([item, price]) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="capitalize w-24 text-sm">{item.replace('-', ' ')}</span>
                  <span className="text-gray-400">£</span>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => handlePriceChange(item, e.target.value)}
                    className="w-20 border rounded px-2 py-1 focus:ring-2 focus:ring-blue-500"
                    step="1"
                    min="0"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* General */}
          <div className="mb-6">
            <h2 className="font-semibold text-gray-700 mb-3">📋 General</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Minimum Charge (£)
                </label>
                <input
                  type="number"
                  value={minCharge}
                  onChange={(e) => setMinCharge(parseFloat(e.target.value) || 0)}
                  className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  step="1"
                  min="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  VAT Rate (%)
                </label>
                <input
                  type="number"
                  value={vatRate}
                  onChange={(e) => setVatRate(parseFloat(e.target.value) || 0)}
                  className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  step="0.1"
                  min="0"
                  max="100"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            💾 Save Settings
          </button>
        </div>
      </div>
    </div>
  )
}