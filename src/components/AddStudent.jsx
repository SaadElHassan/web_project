import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function AddStudent() {
  const [students, setStudents] = useState([]);

  // Form states
  const [student_id, setId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [major, setMajor] = useState("");
  //get students
  const getStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/students/getstudents"
      );
      if (response.status === 200) {
        setStudents(response.data);
      }
      if (response.status === 204) {
        setStudents([]);
      }
    } catch (err) {
      toast.error("Something went wrong while fetching students");
    }
  };
  // Clear form
  const clear = () => {
    setId("");
    setFname("");
    setLname("");
    setMajor("");
  };
  // Add student
  const addStudent = async () => {
    if (!student_id || !fname || !lname || !major) {
      toast.error("Please fill in all fields before adding a student.");
      return;
    }
    const studentToAdd = { student_id, fname, lname, major };
    try {
      const response = await axios.post(
        "http://localhost:5000/students/addstudent/",
        studentToAdd
      );
      if (response.status === 201) {
        const newStudent = { ...studentToAdd, id: response.data.id };
        setStudents([...students, newStudent]);
        toast.success("Student added successfully!");
      }
      clear();
    } catch (err) {
      if (err.status === 400 && student_id) {
        toast.error(err.response?.data?.message || "id should be a number");
      } else {
        toast.error("Something went wrong while deleting the student");
      }
    }
  };
  //delete student
  const deleteStudent = async (studentId) => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/students/deletestudents/" + studentId
      );
      if (response.status === 200) {
        setStudents(
          students.filter((student) => student.student_id !== studentId)
        );
        toast.success(response.data.message);
      }
    } catch (err) {
      if (err.status === 400 && studentId) {
        toast.error(err.response?.data?.message || "id should be a number");
      } else {
        toast.error("Something went wrong while deleting the student");
      }
    }
  };
  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-slate-50 py-10">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-slate-900">Add Student</h1>
          </div>
          {/* Form Section */}
          <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-slate-900">
              student form
            </h2>

            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  id
                </label>
                <input
                  placeholder="Student ID"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-slate-900 outline-none"
                  value={student_id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  first name
                </label>
                <input
                  placeholder="Student First Name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-slate-900 outline-none"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  last name
                </label>
                <input
                  placeholder="Student Last Name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-slate-900 outline-none"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  major
                </label>
                <input
                  placeholder="Student Major"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-slate-900 outline-none"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <button
                  type="button"
                  className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition"
                  onClick={addStudent}
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
                    <th className="px-6 py-4 font-semibold">Id</th>
                    <th className="px-6 py-4 font-semibold">First Name</th>
                    <th className="px-6 py-4 font-semibold">Last Name</th>
                    <th className="px-6 py-4 font-semibold">Major</th>
                    <th className="px-6 py-4 font-semibold">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200 bg-white">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4">{student.student_id}</td>
                      <td className="px-6 py-4">{student.fname}</td>
                      <td className="px-6 py-4">{student.lname}</td>
                      <td className="px-6 py-4">{student.major}</td>
                      <td className="px-6 py-4">
                        <button
                          className="rounded-lg bg-rose-600 px-4 py-2 text-xs font-semibold text-white hover:bg-rose-500 transition"
                          onClick={() => deleteStudent(student.student_id)}
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
      </div>
    </div>
  );
}

export default AddStudent;
