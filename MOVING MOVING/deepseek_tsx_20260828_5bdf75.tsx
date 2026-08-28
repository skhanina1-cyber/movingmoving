// app/admin/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

// Mock data - in production, this comes from your database
const mockOrders = [
  {
    id: '1',
    orderNumber: 'MOV-202601',
    customerName: 'John Smith',
    total: 95.00,
    status: 'CONFIRMED',
    collectionDate: '2026-08-28T10:00:00',
    items: [{ name: 'Sofa', quantity: 1 }, { name: 'Mattress', quantity: 1 }]
  },
  {
    id: '2',
    orderNumber: 'MOV-202602',
    customerName: 'Sarah Williams',
    total: 160.00,
    status: 'PENDING',
    collectionDate: '2026-08-29T14:00:00',
    items: [{ name: 'Fridge', quantity: 1 }, { name: 'Rubbish Bags', quantity: 5 }]
  },
  {
    id: '3',
    orderNumber: 'MOV-202603',
    customerName: 'David Brown',
    total: 75.00,
    status: 'COLLECTED',
    collectionDate: '2026-08-27T09:00:00',
    items: [{ name: 'Mattress', quantity: 2 }]
  }
]

const statusColors = {
  PENDING: 'bg-yellow-100 text-yellow-800',
  CONFIRMED: 'bg-blue-100 text-blue-800',
  COLLECTED: 'bg-green-100 text-green-800',
  DISPOSED: 'bg-gray-100 text-gray-800',
  CANCELLED: 'bg-red-100 text-red-800'
}

export default function AdminDashboard() {
  const [orders] = useState(mockOrders)

  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'PENDING').length,
    today: orders.filter(o => {
      const today = new Date().toDateString()
      return new Date(o.collectionDate).toDateString() === today
    }).length,
    revenue: orders.reduce((sum, o) => sum + o.total, 0)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage your orders and collections</p>
          </div>
          <Link
            href="/admin/settings"
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            ⚙️ Settings
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-sm text-gray-500">Total Orders</p>
            <p className="text-2xl font-bold">{stats.total}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-sm text-gray-500">Pending</p>
            <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-sm text-gray-500">Today's Collections</p>
            <p className="text-2xl font-bold text-green-600">{stats.today}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-sm text-gray-500">Revenue</p>
            <p className="text-2xl font-bold text-blue-600">£{stats.revenue.toFixed(2)}</p>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="font-semibold">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Order</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Customer</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Items</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Total</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-mono font-semibold text-blue-600">
                      {order.orderNumber}
                    </td>
                    <td className="px-6 py-4">{order.customerName}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1 flex-wrap">
                        {order.items.slice(0, 2).map((item, i) => (
                          <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {item.name} × {item.quantity}
                          </span>
                        ))}
                        {order.items.length > 2 && (
                          <span className="text-xs text-gray-500">+{order.items.length - 2} more</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold">£{order.total.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status as keyof typeof statusColors]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/admin/orders/${order.id}`}
                        className="text-blue-600 hover:underline text-sm"
                      >
                        View →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}