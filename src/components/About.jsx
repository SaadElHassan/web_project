import React from 'react'

function About() {
  return (
  <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white flex items-start justify-center py-12 px-4"> 
          <div className="w-full max-w-4xl">
<div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">About Student Portal</h1>
          <p className="mt-2 text-gray-600">A simple, modern portal to browse and register for courses — built for clarity and speed.</p>
        </div>
        <div className="bg-white shadow-sm rounded-2xl border border-green-100 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">What this site does</h2>
          <p className="text-gray-700 leading-relaxed">This portal helps students easily discover courses, manage registrations, and view their enrolled classes. It focuses on a clean, responsive experience so you can get tasks done quickly on any device.</p>
        </div>


         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
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
        </div>

         <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">How to use</h2>
          <ol className="list-decimal  space-y-2 text-gray-700">
            <li>Visit the <span className="font-medium">Courses</span> page to browse offerings.</li>
            <li>Select a course to view details and prerequisites.</li>
            <li>Click <span className="font-medium">Register</span> to enroll and confirm your selection.</li>
          </ol>
        </div>

    </div>
    </div>

  )
}

export default About