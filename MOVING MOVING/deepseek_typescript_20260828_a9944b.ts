// app/api/orders/[id]/route.ts
import { NextResponse } from 'next/server'

// This is a mock - in production, use a real database
let orders: any[] = []

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const order = orders.find(o => o.id === params.id)
  
  if (!order) {
    return NextResponse.json(
      { error: 'Order not found' },
      { status: 404 }
    )
  }
  
  return NextResponse.json(order)
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const index = orders.findIndex(o => o.id === params.id)
    
    if (index === -1) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      )
    }
    
    orders[index] = { ...orders[index], ...body }
    
    return NextResponse.json(orders[index])
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update order' },
      { status: 500 }
    )
  }
}