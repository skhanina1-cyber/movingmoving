// app/booking/confirmation/page.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const [orderNumber, setOrderNumber] = useState('')

  useEffect(() => {
    const order = searchParams.get('order')
    if (order) {
      setOrderNumber(order)
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container max-w-2xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Booking Confirmed!
          </h1>
          <p className="text-gray-600 mb-6">
            Your collection has been successfully booked.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <p className="text-sm text-gray-500">Order Reference</p>
            <p className="text-2xl font-bold text-blue-600">
              {orderNumber || 'MOV-000000'}
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 mb-6 text-left">
            <p className="font-semibold text-blue-800">📧 What's Next?</p>
            <p className="text-sm text-blue-700">
              We'll send you a confirmation email and confirm your collection time within 2 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Back to Home
            </Link>
            <Link
              href="/quote"
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              New Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}