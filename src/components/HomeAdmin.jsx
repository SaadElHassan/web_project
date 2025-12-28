import React from 'react'
import { useNavigate } from 'react-router-dom';

function HomeAdmin() {
    const navigate = useNavigate();
  return (
   <div className="bg-amber-50 min-h-screen flex flex-col items-center justify-start space-y-8 pt-4">
        {/* Add Student Navigation Card */}
        <div className="backdrop-blur-md bg-blue-100/70 border border-blue-300 shadow-lg rounded-xl p-6 mt-12 max-w-2xl w-full flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2"> Add Student</h2>
          <p className="mb-3">Add new students to the system.</p>
          <button
            className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition duration-200"
            onClick={() => navigate('/addstudent')}
          >
            Go to Add Student
          </button>
        </div>
         {/* Add Course Navigation Card */}
        <div className="backdrop-blur-md bg-green-100/70 border border-green-300 shadow-lg rounded-xl p-6 max-w-2xl w-full flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">ℹ️ Add Course</h2>
          <p className="mb-3">Add new courses to the portal.</p>
          <button
            className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow transition duration-200"
            onClick={() => navigate('/addcourse')}
          >
            Go to Add Course
          </button>
        </div>
        {/* Reports Navigation Card  */}
        <div className=" bg-purple-100 border border-amber-300 shadow-lg rounded-xl p-6 pb-4 max-w-2xl w-full flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">📝 Reports</h2>
          <p className="mb-3">This section allows you to:</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">✔️ View student reports</li>
            <li className="flex items-center gap-2">📝 View course report</li>
           
          </ul>
          <button
            className="mt-6 px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow transition duration-200"
            onClick={() => navigate('/reports')}
          >
            Go to Reports
          </button>
        </div>
        </div>
  )
}

export default HomeAdmin