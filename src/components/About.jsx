import React from 'react'

function About() {
  return (
  <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white flex items-start justify-center py-12 px-4"> 
          <main className="w-full max-w-4xl">
<header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">About Student Portal</h1>
          <p className="mt-2 text-gray-600">A simple, modern portal to browse and register for courses — built for clarity and speed.</p>
        </header>
        <section className="bg-white shadow-sm rounded-2xl border border-green-100 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">What this site does</h2>
          <p className="text-gray-700 leading-relaxed">This portal helps students easily discover courses, manage registrations, and view their enrolled classes. It focuses on a clean, responsive experience so you can get tasks done quickly on any device.</p>
        </section>


         <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-white border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">Discover</h3>
            <p className="text-sm text-gray-600 mt-2">Search and filter available courses with helpful metadata and clear descriptions.</p>
          </div>
          <div className="p-4 bg-white border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">Register</h3>
            <p className="text-sm text-gray-600 mt-2">Securely enroll in classes and track your registration status in one place.</p>
          </div>
          <div className="p-4 bg-white border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">Manage</h3>
            <p className="text-sm text-gray-600 mt-2">View enrolled courses, drop or swap when allowed, and keep your schedule organized.</p>
          </div>
        </section>

        

    </main>
    </div>

  )
}

export default About