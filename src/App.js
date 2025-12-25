import {Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import About from "./components/About";
import Home from "./components/Home";
import Registration from "./components/Registration";
import ContactUs from "./components/ContactUs";
import AddCourse from "./components/AddCourse";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (<>
    
     
    <div>
    {isLoggedIn && <Navbar onLogout={handleLogout} />}
    <ToastContainer />
    <Routes>
      
      <Route path="/" Component={() => <Login onLoginSuccess={handleLogin} />} />
      <Route path="/home" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/registration" Component={Registration} />
      <Route path="/contact" Component={ContactUs} />
      <Route path="/addCourse" Component={AddCourse} />

          

     </Routes>
    
  </div>
     </>
  );
}

export default App;
