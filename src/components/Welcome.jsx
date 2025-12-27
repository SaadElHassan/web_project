import React from 'react'

function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl mb-4">🎓</div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Welcome Back to
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-blue-600 mb-6">
          Student Portal
        </h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Your gateway to academic success. Explore courses, manage your profile, and stay connected.
        </p>
      </div>
    </div>
  )
}

export default Welcome