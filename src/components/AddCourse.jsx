import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function AddCourse() {
  const [courses, setCourses] = useState([]);

  // Form states

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const getCourses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/courses/getcourses"
      );
      if (response.status === 200) {
        setCourses(response.data);
      }
      if (response.status === 204) {
        setCourses([]);
      }
    } catch (err) {
      toast.error("Something went wrong while fetching courses");
    }
  };
  // Clear form
  const clear = () => {
    setName("");
    setDescription("");
  };
  // Add course
  const addCourse = async () => {
    if (!name || !description) {
      toast.error("Please fill in all fields before adding a course.");
      return;
    }
    const courseToAdd = { name, description };
    try {
      const response = await axios.post(
        "http://localhost:5000/courses/addcourse",
        courseToAdd
      );
      if (response.status === 201) {
        const newCourse = { ...courseToAdd, id: response.data.id };
        setCourses([...courses, newCourse]);
        toast.success("Course added successfully!");
      }
      clear();
    } catch (err) {
      toast.error(err.status);
    }
  };
  //delete course
   const deleteCourse = async (courseName) => {
    try {
     
      const response = await axios.delete(
        "http://localhost:5000/courses/deletecourse/" + courseName
      );
      if (response.status === 200) {
        setCourses(courses.filter((course) => course.name !== courseName));
        toast.success(response.data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Error deleting course.");
    } 
  };
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div>
      <div className="min-h-screen bg-slate-50 py-10">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-slate-900">Add Course</h1>
          </div>
          {/* Form Section */}
          <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-slate-900">
              Course Form
            </h2>

            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  placeholder="Course Name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-slate-900 outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Description
                </label>
                <input
                  placeholder="Course Description"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-slate-900 outline-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <button
                  type="button"
                  className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition"
                  onClick={addCourse}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
                  onClick={clear}
                >
                  Clear
                </button>
              </div>
            </form>
          </div>

          {/* Table Section */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-slate-900">
                Courses (Table)
              </h2>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-left text-slate-700">
                    <th className="px-6 py-4 font-semibold">Name</th>
                    <th className="px-6 py-4 font-semibold">Description</th>
                    <th className="px-6 py-4 font-semibold">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200 bg-white">
                    {courses.map((course) => (
                        <tr key={course.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4">{course.name}</td>
                        <td className="px-6 py-4">{course.description}</td>
                        <td className="px-6 py-4">
                             <button className="rounded-lg bg-rose-600 px-4 py-2 text-xs font-semibold text-white hover:bg-rose-500 transition"
                             onClick={() => deleteCourse(course.name)}>
                          Delete
                        </button>
                        </td>
                        </tr>
                    ))}

                  <tr className="hidden">
                    <td colSpan={3} className="px-6 py-4 text-slate-600">
                      No courses loaded yet.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
