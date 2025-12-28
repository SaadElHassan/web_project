import axios from 'axios';
import React, { useState, useContext} from 'react';
import { toast } from "react-toastify";
import { AuthContext } from '../App';

function Login({ onLoginSuccess }) {
  const { login } = useContext(AuthContext);
  
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const clear = () => {
    setId("");
    setPassword("");
  };
  
 
//get users role
 const getUser = async () => {
const u = { id, password };
    try {
      const response = await axios.post(
        "http://localhost:5000/users/getusersrole/",
        u
      );
      if (response.status === 200) {
       
        login(response.data);
        toast.success(" Successful Login");
      }
      if (response.status === 204) {
        toast.error("id or password are wrong")
        clear();
      }
    } catch (err) {
      
      toast.error("Something went wrong");
     
    }
  };
  




  return (
<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-8">
 <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900">Student Portal</h1>
            <p className="text-gray-600 mt-2">Sign in to your account</p>
          </div>

           <form onSubmit={(e) => { e.preventDefault(); getUser(); }} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-800 mb-2">
                Username
              </label>
              <input
                type="text"
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter your ID"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
             <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-800 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg "
              />
            </div>
             <button
              type="submit"
              disabled={!id.trim() || !password.trim()}
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-semibold rounded-lg shadow transition duration-200"
            >
              Login
            </button>
</form>


</div>
</div>
</div>
  )
}

export default Login