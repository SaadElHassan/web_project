import React from 'react'
import { useNavigate } from 'react-router-dom';


function Navbar({onLogout}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate('/');
  };
  return (
 <nav className="bg-gradient-to-r from-blue-500 via-red-300 to-purple-400 shadow-lg px-8 py-3 flex items-center justify-between w-full sticky top-0 z-50">
 <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-white">🎓</span>
        <span className="text-xl font-semibold text-white  drop-shadow">Student Portal</span>
      </div>








 </nav>
  )
}

export default Navbar