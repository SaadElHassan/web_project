import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Registration() {
  const [selectedCourseName, setSelectedCourseName] = useState("math");
  const [courseOptions, setCourseOptions] = useState([]);
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [flag, setFlag] = useState(false);

  //add course to registered courses
  const addCourseToRegistered = async () => {
    try {
      const newCourse = { name, description };
      const response = await axios.post(
        "http://localhost:5000/selectedcourses/addselectedcourse",
        newCourse
      );
      if (response.status === 201) {
        setRegisteredCourses([...registeredCourses, newCourse]);

        toast.success("Course registered successfully!");
        setFlag(false);
      }
    } catch (err) {
      toast.error("error while registering course");
    }
  };
  //get registered courses
  const getRegisteredCourses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/selectedcourses/getselectedcourses"
      );
      if (response.status === 200) {
        setRegisteredCourses(response.data);
      }
      if (response.status === 204) {
        setRegisteredCourses([]);
      }
    } catch (err) {
      toast.error("Something went wrong while fetching registered courses");
    }
  };

  //get course by name to add it later to registered courses
  const getCourseByName = async (courseName) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/courses/getcoursesbyname/" + courseName
      );
      if (response.status === 200) {
        setName(response.data.name);
        setDescription(response.data.description);
        setFlag(true);
      }
    } catch (err) {
      toast.error("Something went wrong while fetching course details");
    }
  };
//delete registered course
  const handleRemoveCourse = async (courseN) => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/selectedcourses/deleteselectedcourse/" + courseN
      );
      if (response.status === 200) {
        setRegisteredCourses(
          registeredCourses.filter((course) => course.name !== courseN)
        );
        toast.success(response.data.message);
      }
    } catch (err) {
      toast.error("Something went wrong while deleting the course.");
    }
  };

  const getCourses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/courses/getcourses"
      );
      if (response.status === 200) {
        setCourseOptions(response.data);
      }
      if (response.status === 204) {
        toast.info("No courses available");
        setCourseOptions([]);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while fetching courses");
    }
  };
  useEffect(() => {
    getCourses();
    getRegisteredCourses();
  }, []);
  useEffect(() => {
    if (flag) {
      addCourseToRegistered();
    }
  }, [addCourseToRegistered, flag]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 via-blue-100 to-purple-100 py-10">
      <div className=" bg-white/70 border border-purple-300 shadow-xl rounded-2xl p-8 max-w-lg w-full flex flex-col items-center mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-purple-700">
          📝 Register a Course
        </h2>
        <form
          className="w-full flex flex-col gap-4 items-center"
          onSubmit={(e) => {
            e.preventDefault();
            getCourseByName(selectedCourseName);
          }}
        >
          <select
            className="px-4 py-2 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full"
            value={selectedCourseName}
            onChange={(e) => setSelectedCourseName(e.target.value)}
          >
            {courseOptions.map((course) => (
              <option key={course.key} value={course.name}>
                {course.name}
              </option>
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
      {/*table*/}
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
                <th className="px-6 py-4 font-semibold">name</th>
                <th className="px-6 py-4 font-semibold">description</th>
                <th className="px-6 py-4 font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 bg-white">
              {registeredCourses.map((course) => (
                <tr key={course.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4">{course.name}</td>
                  <td className="px-6 py-4">{course.description}</td>

                  <td className="px-6 py-4">
                    <button
                      className="rounded-lg bg-rose-600 px-4 py-2 text-xs font-semibold text-white hover:bg-rose-500 transition"
                      onClick={() => handleRemoveCourse(course.name)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              <tr className="hidden">
                <td colSpan={3} className="px-6 py-4 text-slate-600">
                  No students loaded yet.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Registration;
