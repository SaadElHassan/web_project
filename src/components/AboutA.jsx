import React from 'react'

function AboutA() {
  return (
  <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white flex items-start justify-center py-12 px-4"> 
          <div className="w-full max-w-4xl">
<div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">About Admin Portal</h1>
          <p className="mt-2 text-gray-600">A comprehensive admin interface for managing students, courses, and reports — designed for efficiency and control.</p>
        </div>
        <div className="bg-white shadow-sm rounded-2xl border border-green-100 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">What this admin portal does</h2>
          <p className="text-gray-700 leading-relaxed">This portal empowers administrators to manage student records, create and maintain course offerings, and oversee system reports. It provides a streamlined, secure environment for administrative tasks to ensure smooth operation of the student portal.</p>
        </div>


         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-white border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">Manage Students</h3>
            <p className="text-sm text-gray-600 mt-2">Add new students with detailed information, view existing student records, and remove students as needed.</p>
          </div>
          <div className="p-4 bg-white border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">Manage Courses</h3>
            <p className="text-sm text-gray-600 mt-2">Create new courses with descriptions, browse and edit course listings, and maintain the course catalog.</p>
          </div>
          <div className="p-4 bg-white border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">View Reports</h3>
            <p className="text-sm text-gray-600 mt-2">Access and review system reports, analyze data, and delete outdated or unnecessary reports.</p>
          </div>
        </div>

         <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">How to use the admin portal</h2>
          <ol className="list-decimal  space-y-2 text-gray-700">
            <li>Navigate to the <span className="font-medium">Add Student</span> page to create new student accounts and manage existing ones.</li>
            <li>Visit the <span className="font-medium">Add Course</span> page to add new courses and update course information.</li>
            <li>Check the <span className="font-medium">Reports</span> page to view available reports and remove any that are no longer needed.</li>
          </ol>
        </div>

    </div>
    </div>

  )
}

export default AboutA