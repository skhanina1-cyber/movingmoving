// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')
  
  // Add sample orders
  const sampleOrders = [
    {
      orderNumber: 'MOV-202601',
      customerName: 'John Smith',
      customerEmail: 'john@example.com',
      customerPhone: '07700 900123',
      customerAddress: '123 Main Street',
      postcode: 'SW1A 1AA',
      collectionDate: new Date(),
      items: [{ name: 'Sofa', quantity: 1, price: 35 }],
      subtotal: 35,
      vat: 7,
      total: 42,
      status: 'CONFIRMED'
    }
  ]
  
  for (const order of sampleOrders) {
    await prisma.order.create({ data: order })
  }
  
  console.log('✅ Database seeded!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })