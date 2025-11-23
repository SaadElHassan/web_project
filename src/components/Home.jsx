import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
  return (
   <div className="bg-amber-50 min-h-screen flex flex-col items-center justify-start space-y-8 pt-4">
        {/* contact Navigation Card */}
        <div className="backdrop-blur-md bg-blue-100/70 border border-blue-300 shadow-lg rounded-xl p-6 mt-12 max-w-2xl w-full flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2"> contact us</h2>
          <p className="mb-3">contact us if you are facing any issue.</p>
          <button
            className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition duration-200"
            onClick={() => navigate('/contact')}
          >
            Go to contact
          </button>
        </div>
        </div>
  )
}

export default Home