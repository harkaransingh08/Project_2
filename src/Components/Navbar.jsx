import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white px-6 py-3 w-full">
      {/* Logo */}
      <h1 className="text-2xl font-bold">MyLogo</h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6">
        <li className="hover:text-cyan-400 cursor-pointer">Home</li>
        <li className="hover:text-cyan-400 cursor-pointer">About</li>
        <li className="hover:text-cyan-400 cursor-pointer">Services</li>
        <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-4">
        <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-1 rounded">Sign In</button>
        <button className="border border-cyan-500 hover:bg-cyan-600 px-4 py-1 rounded">Sign Up</button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 py-6 md:hidden">
          <li className="hover:text-cyan-400 cursor-pointer">Home</li>
          <li className="hover:text-cyan-400 cursor-pointer">About</li>
          <li className="hover:text-cyan-400 cursor-pointer">Services</li>
          <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
          <div className="flex gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-1 rounded">Sign In</button>
            <button className="border border-cyan-500 hover:bg-cyan-600 px-4 py-1 rounded">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
}
