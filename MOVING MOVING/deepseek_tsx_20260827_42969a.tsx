// app/page.tsx
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            🚚 MovingMoving
          </Link>
          <nav className="flex gap-6">
            <Link href="/quote" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
              Get Quote
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Rubbish Clearance &amp; Furniture Removal
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Professional man-and-van collections for your home or business
        </p>
        <Link 
          href="/quote" 
          className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 inline-block"
        >
          Get Instant Quote →
        </Link>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Collect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-2">🗑️ Rubbish Clearance</h3>
              <p className="text-gray-600">General household junk, trade waste, and bulky items</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-2">🛋️ Furniture Removal</h3>
              <p className="text-gray-600">Sofas, mattresses, chairs, and large furniture</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-2">🏠 House Clearance</h3>
              <p className="text-gray-600">Full or partial clearance of properties, garages, and sheds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} MovingMoving. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}