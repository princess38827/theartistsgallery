import React from 'react'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            The Artists Gallery
          </h1>
          <p className="text-lg text-gray-600">
            A community of online artists of all kinds to socialize and enjoy each other's work
          </p>
        </header>
        
        <main className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome to The Artists Gallery
            </h2>
            <p className="text-gray-600">
              This is a community space for artists to connect, share, and appreciate creative work.
            </p>
          </div>
        </main>
      </div>
      <Analytics />
    </div>
  )
}

export default App
