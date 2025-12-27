import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { createContext } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import About from "./components/About";
import Home from "./components/Home";
import Registration from "./components/Registration";
import ContactUs from "./components/ContactUs";
import AddCourse from "./components/AddCourse";
import AddStudent from "./components/AddStudent";
import Welcome  from "./components/Welcome";
import Reports from "./components/Reports";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const AuthContext = createContext();

function App() {
  const navigate = useNavigate();
 
  const [role, setRole] = useState(0);

  
  const login = (data) => {
     const roleValue = typeof data === 'object' ? data.role : data;
    setRole(roleValue);
   
    navigate("/");
  };
  const logout = () => {
    setRole(0);
    navigate("/login");
  };

  return (
    <>
      <AuthContext.Provider value={{ role, login, logout }}>
        {role!==0 && <Navbar />}
       
        <ToastContainer />
        <Routes>
          
    <Route path = "/" Component={Welcome} />
   
   
          {!role && (<Route path="*" element={<Navigate to="/login" replace />} />)}
          {role === 1  && (
            <>
              <Route path="/home" Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/registration" Component={Registration} />
              <Route path="/contact" Component={ContactUs} />
            </>
          )}

          <Route
            path="/login"
            Component={Login}
          />
          {role === 2 && (
            <>
              <Route path="/addCourse" Component={AddCourse} />
              <Route path="/addStudent" Component={AddStudent} />
              <Route path="/reports" Component={Reports} />
            </>
          )}
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
