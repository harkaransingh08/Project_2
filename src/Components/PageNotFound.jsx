import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[90vh] w-full flex items-center justify-center p-6">
      
      {/* Darker Glassmorphism Card to pop against the Orange/Gray background */}
      <div className="w-full max-w-xl bg-black/20 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/10 p-10 md:p-14 text-center">
        
        {/* Themed Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-[#FF9A3D]/20 rounded-2xl rotate-12 flex items-center justify-center border border-[#FF9A3D]/30 shadow-[0_0_20px_rgba(255,154,61,0.2)]">
             <span className="text-4xl font-black text-[#FF9A3D] -rotate-12">!</span>
          </div>
        </div>

        {/* Brand Matched Status Code */}
        <h1 className="text-9xl font-black text-[#FF9A3D] tracking-tighter mb-2 drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
          404
        </h1>
        
        {/* Message using your dark teal/gray color */}
        <h2 className="text-3xl font-bold text-white mb-4">Lost in Transit?</h2>
        <p className="text-gray-300 text-lg mb-10 max-w-xs mx-auto leading-relaxed">
          The page you are looking for has migrated elsewhere. Let's get your journey back on track.
        </p>

        {/* Buttons matched to your "Back to Home" style in the screenshots */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-10 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-900/40 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <FaHome size={18} /> Home
          </Link>
          
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto px-10 py-3.5 border border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <FaArrowLeft size={16} /> Go Back
          </button>
        </div>

        {/* Branding Footer */}
        <div className="mt-12 pt-6 border-t border-white/5">
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            Migration Planet © 2026
          </p>
        </div>
      </div>
    </div>
  );
}