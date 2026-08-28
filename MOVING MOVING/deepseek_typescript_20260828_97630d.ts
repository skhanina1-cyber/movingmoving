// app/api/orders/route.ts
import { NextResponse } from 'next/server'

// Mock database - in production, use Prisma with PostgreSQL
let orders: any[] = []

export async function GET() {
  return NextResponse.json(orders)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const newOrder = {
      id: Date.now().toString(),
      orderNumber: `MOV-${Date.now().toString().slice(-6)}`,
      ...body,
      status: 'PENDING',
      createdAt: new Date().toISOString()
    }
    
    orders.push(newOrder)
    
    return NextResponse.json(newOrder, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}