import React from 'react'

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-linear-to-r from-[#0B0B0B] via-black to-orange-500 
                    px-6">

      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-md 
                      rounded-2xl shadow-xl 
                      grid grid-cols-1 md:grid-cols-2 gap-10 
                      p-8">               

        <div className="flex items-center justify-center">
          <img
            src="https://img.freepik.com/free-vector/positive-lettering-with-photo_23-2148464028.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Sign up illustration"
            className="w-full max-w-md rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col justify-center items-start gap-6 text-white">

          <h1 className="text-3xl font-bold text-orange-400 hover:text-orange-300 hover:scale-110 cursor-pointer transition-all duration-300">
            Sign Up
          </h1>

          <p className="text-white/80">
            Welcome to <span className="font-semibold text-orange-300">Migration Hub</span><br />
            Please enter your information to access your account.
          </p>

          <div className="w-full bg-white/90 rounded-xl p-6 text-black">
           <input type=" " />
          </div>

        </div>
      </div>
    </div>
  )
}
