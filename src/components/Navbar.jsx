import React from 'react'


function Navbar({onLogout}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate('/');
  };
  return (
 <></>
  )
}

export default Navbar