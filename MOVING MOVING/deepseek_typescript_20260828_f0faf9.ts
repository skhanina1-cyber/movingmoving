// app/api/orders/stats/route.ts
import { NextResponse } from 'next/server'

// Mock data - replace with real database queries
export async function GET() {
  const mockStats = {
    totalOrders: 27,
    pendingOrders: 5,
    todayOrders: 3,
    totalRevenue: 2450.00,
    ordersByStatus: [
      { status: 'PENDING', _count: 5 },
      { status: 'CONFIRMED', _count: 8 },
      { status: 'COLLECTED', _count: 10 },
      { status: 'DISPOSED', _count: 4 }
    ]
  }
  
  return NextResponse.json(mockStats)
}