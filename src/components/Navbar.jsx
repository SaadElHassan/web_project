import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../App';
import { useContext} from 'react';
function Navbar() {
  
  const { role, logout } = useContext(AuthContext);

 
  return (
    <div className="bg-gradient-to-r from-blue-500 via-red-300 to-purple-400 shadow-lg px-8 py-3 flex items-center justify-between w-full sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="text-2xl font-bold text-white">🎓</div>
        <div className="text-xl font-semibold text-white  drop-shadow">
          Student Portal
        </div>
      </div>

      <div className="flex gap-6 items-center">
        <Link
          className={`text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-amber-200 transition duration-200 ${
            role === 1 ? "" : "hidden"
          }`}
          to="/home"
        >
          Home
        </Link>
        <Link
          className={`text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-amber-200 transition duration-200 ${
            role === 2 ? "" : "hidden"
          }`}
          to="/addstudent"
        >
          Students
        </Link>

        <Link
          className={`text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-amber-200 transition duration-200 ${
            role === 2 ? "" : "hidden"
          }`}
          to="/addcourse"
        >
          courses
        </Link>
         <Link
          className={`text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-amber-200 transition duration-200 ${
            role === 2 ? "" : "hidden"
          }`}
          to="/reports"
        >
          reports
        </Link>
        <Link
          className={`text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-amber-200 transition duration-200 ${
            role === 1 ? "" : "hidden"
          }`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-amber-200 transition duration-200 ${
            role === 1 ? "" : "hidden"
          }`}
          to="/registration"
        >
          Registration
        </Link>
        <Link
          className={`text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-amber-200 transition duration-200 ${
            role === 1 ? "" : "hidden"
          }`}
          to="/contact"
        >
          Contact
        </Link>
        <button
          onClick={logout}
          className="text-white font-medium px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition duration-200 "
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
