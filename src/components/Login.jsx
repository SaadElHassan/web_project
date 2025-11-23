import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {

    e.preventDefault();
    if (username.trim() && password.trim()) {
      if (onLoginSuccess) onLoginSuccess();
      navigate('/home');
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

           <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-800 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
</form>


</div>
</div>
</div>
  )
}

export default Login