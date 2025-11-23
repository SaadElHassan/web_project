import React, { useState } from 'react';


function ContactUs() {
 var reporter = {
    
    fullname: "",
    email: "",
    message: "",
  };
  const [stds, setStds] = useState([]);

  const [state, setState] = useState(reporter);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-white flex items-start justify-center py-12 px-4">
      <main className="w-full max-w-3xl">
<header className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Contact Us</h1>
          <p className="mt-2 text-gray-600">Have a question or need help? Send us a message and we'll get back to you.</p>
        </header>


                <div className="bg-white shadow-sm rounded-2xl border border-green-100 p-6">
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-600 mt-1">iloveAhmadTrad@habibiTrad.DR</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-600 mt-1">70 306 002</p>
            </div>
          </div>

         <form className="space-y-4" onSubmit={(e) => {e.preventDefault();
             setStds([...stds, state]);
              setState(reporter);
          }
            
          }>
            <div>
              <label
              htmlFor="fullname"
              className=" block text-sm font-medium text-gray-800 mb-2">Your name</label>
              <input
               value={state.fullname}
                name="fullname"
                type="text"
                onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg " placeholder="Full name" />
            </div>
            <div>
              <label 
              htmlFor="email"
              className="block text-sm font-medium text-gray-800 mb-2">Email</label>
              <input
              value={state.email}
                name="email"
                type="text"
                onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg " placeholder="you@example.com" />
            </div>  
            <div>
              <label
              htmlFor="message"
               className=" block text-sm font-medium text-gray-800 mb-2">Message</label>
              <textarea
              value={state.message}
                name="message"
                type="text"
                onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg " rows="4" placeholder="How can we help?" />
            </div>
            </form>
</div>
      </main>
</div>
)
}

export default ContactUs