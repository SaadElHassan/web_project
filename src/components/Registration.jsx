import React, { useState } from 'react'

function Registration() {
    const [selectedCourse, setSelectedCourse] = useState('Math');
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const courseOptions = ['Physics', 'Math', 'Chemistry', 'Biology', 'Computer Science', 'English', 'History'];
  const handleAddCourse = (e) => {
    e.preventDefault();
    if (!registeredCourses.includes(selectedCourse)) {
      setRegisteredCourses([...registeredCourses, selectedCourse]);
    }
  };

  const handleRemoveCourse = (course) => {
    setRegisteredCourses(registeredCourses.filter(c => c !== course));
  };
  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 via-blue-100 to-purple-100 py-10">
<div className=" bg-white/70 border border-purple-300 shadow-xl rounded-2xl p-8 max-w-lg w-full flex flex-col items-center mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-purple-700">📝 Register a Course</h2>
        <form className="w-full flex flex-col gap-4 items-center" onSubmit={handleAddCourse}>
          <select
            className="px-4 py-2 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full"
            value={selectedCourse}
            onChange={e => setSelectedCourse(e.target.value)}
          >
            {courseOptions.map(course => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
          <button
            type="submit"
            className="mt-2 px-5 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow transition duration-200 w-full"
          >
            Add Course
          </button>
        </form>
      </div>
 {registeredCourses.length > 0 && (
        <div className=" bg-white/70 border border-purple-300 shadow-xl rounded-2xl p-8 max-w-lg w-full flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4 text-purple-700">📋 Registered Courses</h3>
          <table className="min-w-full text-center border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Course</th>
                <th className="px-4 py-2 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {registeredCourses.map(course => (
                <tr key={course}>
                  <td className="px-4 py-2 border-b">{course}</td>
                  <td className="px-4 py-2 border-b">
                    <button
                      className="px-3 py-1 bg-red-400 hover:bg-red-600 text-white rounded transition duration-200"
                      onClick={() => handleRemoveCourse(course)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

   </div>
  )
}

export default Registration