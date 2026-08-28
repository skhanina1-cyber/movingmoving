// app/admin/orders/[id]/page.tsx
'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

// Mock order detail
const mockOrder = {
  id: '1',
  orderNumber: 'MOV-202601',
  customerName: 'John Smith',
  customerEmail: 'john@email.com',
  customerPhone: '07700 900123',
  customerAddress: '123 Main Street',
  postcode: 'SW1A 1AA',
  total: 95.00,
  status: 'CONFIRMED',
  collectionDate: '2026-08-28T10:00:00',
  notes: 'Please call 10 minutes before arrival',
  items: [
    { name: 'Sofa', quantity: 1, price: 35, total: 35 },
    { name: 'Mattress', quantity: 1, price: 25, total: 25 },
    { name: 'Rubbish Bags', quantity: 3, price: 8, total: 24 }
  ]
}

export default function OrderDetailPage() {
  const params = useParams()
  const order = mockOrder

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-4xl">
        <Link href="/admin" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to Dashboard
        </Link>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Order {order.orderNumber}
              </h1>
              <p className="text-gray-500 text-sm">
                Created on {new Date(order.collectionDate).toLocaleDateString()}
              </p>
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800`}>
              {order.status}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Customer Details */}
            <div>
              <h2 className="font-semibold text-gray-700 mb-3">👤 Customer</h2>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p><strong>Name:</strong> {order.customerName}</p>
                <p><strong>Email:</strong> {order.customerEmail}</p>
                <p><strong>Phone:</strong> {order.customerPhone}</p>
                <p><strong>Address:</strong> {order.customerAddress}, {order.postcode}</p>
              </div>
            </div>

            {/* Collection Details */}
            <div>
              <h2 className="font-semibold text-gray-700 mb-3">📦 Collection</h2>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p><strong>Date:</strong> {new Date(order.collectionDate).toLocaleDateString()}</p>
                <p><strong>Time:</strong> {new Date(order.collectionDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                {order.notes && <p><strong>Notes:</strong> {order.notes}</p>}
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="mt-6">
            <h2 className="font-semibold text-gray-700 mb-3">🛒 Items</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              {order.items.map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b last:border-0">
                  <span>{item.name} × {item.quantity}</span>
                  <span>£{item.total.toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between font-bold mt-3 pt-3 border-t">
                <span>Total</span>
                <span className="text-green-600">£{order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}