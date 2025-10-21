import React, { useState } from "react";

export default function Navbar() {
  // Object array for links
  const navLinks = [
    { name: "Men", path: "/men" },
    { name: "Women", path: "/women" },
    { name: "Kids", path: "/kids" },
    { name: "Home", path: "/" },
    { name: "Beauty", path: "/beauty" },
    { name: "Genz", path: "/genz" },
    { name: "Studio", path: "/studio" },
  ];

  // useState to track which link is active
  const [active, setActive] = useState("Home");

  // Arrow function for handling click
  const handleClick = (name) => {
    setActive(name);
  };

  return (
    <div className="p-4 bg-gray-100 arial">
      <nav className=" flex justify-between">
        {/* Logo */}
        <ul>
          <img src="https://tinyurl.com/yy8uhxp7" alt="Myntra" width={80} />
        </ul>

        {/* Navbar Links */}
        <ul className=" hidden md:flex justify-evenly items-center gap-5">
          {navLinks.map((link) => (
            <li
              key={link.path}
              onClick={() => handleClick(link.name)}
              className={`cursor-pointer transition-colors ${
                active === link.name
                  ? "text-pink-600 font-bold border-b-2 border-pink-600"
                  : "text-gray-800 hover:text-pink-600"
              }`}
            >
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Right side icons + search */}
        <footer className="flex justify-evenly items-center gap-5">
          {/* Search box */}
          <ul className="bg-gray-200 flex gap-3 items-center rounded-xl px-3 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
            <input
              type="text"
              placeholder="Search for product......"
              className="bg-gray-200 outline-none"
            />
          </ul>

          {/* Profile / Wishlist / Bag */}
          <ul className="flex justify-evenly items-center gap-5">
            <li className="cursor-pointer">Profile</li>
            <li className="cursor-pointer">Wishlist</li>
            <li className="cursor-pointer">Bag</li>
          </ul>
        </footer>
      </nav>
    </div>
  );
}
