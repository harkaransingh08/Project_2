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
    <div className="p-4 bg-white arial shadow-2xl">
      <nav className=" flex justify-between">
        <ul className="cursor-pointer hover:underline">
          <img src="https://tinyurl.com/yy8uhxp7" alt="Myntra" width={80} />
        </ul>

          

        <ul className="hidden md:flex justify-evenly items-center gap-8 mr-30 font-bold">
  {/* Men dropdown first */}
  <div className="relative group">
    <li className="cursor-pointer transition-colors flex items-center gap-1 text-gray-800 hover:text-pink-600">
      <a href="/men">Men</a>
    </li>
    <div className="absolute left-0 top-full mt-0 w-52 bg-white shadow-lg rounded-md
    opacity-0 invisible group-hover:opacity-100 group-hover:visible
    transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto">
      <ul className=" absolute right-0 top-full mt-1 w-80 px-8 py-2 cursor-pointer bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] arial font-light
opacity-0 scale-95 transform origin-top-right transition-all duration-200 ease-out
pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto ">
        
        <div className="text-sm"> 
          <li className="text-pink-700 font-bold">Top Wear</li> <br />
          <li className="hover:text-pink-500 hover:scale-110">Topwear</li> <br />
        <li className="hover:text-pink-500 hover:scale-110">Bottom Wear</li> <br />
        <li className="hover:text-pink-500 hover:scale-110">Foot Wear</li> <br />
        <li className="hover:text-pink-500 hover:scale-110">Sports Wear</li><br />
        <li className="hover:text-pink-500 hover:scale-110">Accessories</li><br />
        </div>

        <hr />

        <div>
            <li className="text-pink-700 font-bold">Indian & Festival Wear</li> <br />
            <li className="hover:text-pink-500 hover:scale-110">Kurtas & Kurtas Set</li> <br />
            <li className="hover:text-pink-500 hover:scale-110">Shervanies</li> <br />
            <li className="hover:text-pink-500 hover:scale-110">Nehru Jackets</li> <br />
            <li className="hover:text-pink-500 hover:scale-110">Dhotis</li> <br />
            <li></li>
        </div>

      </ul>
    </div>
  </div>    

  {/* Then render the rest of navLinks (excluding "Men") */}
  {navLinks
    .filter((link) => link.name !== "Men")
    .map((link) => (
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

        <footer className="flex justify-evenly items-center gap-5 font-medium ">
          <ul className="bg-gray-100 flex gap-3 items-center rounded-sm px-3 py-1 h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search text-gray-700"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>  
            <input
              type="text"
              placeholder="Search for products,brands and more"
              className="bg-gray-100 outline-none w-80"
            />
          </ul>

          <ul className="hidden md:flex justify-evenly items-center gap-8">
            <div className="relative group">
  <li className="cursor-pointer hover:text-orange-600 z-50 hover:underline flex flex-col items-center text-xs">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-user-icon lucide-user"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
    Profile
  </li>

 
  <div className="absolute right-0 top-full mt-1 w-80 px-8 py-2 cursor-pointer bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] arial font-light
opacity-0 scale-95 transform origin-top-right transition-all duration-200 ease-out
pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
">
    <ul className="text-gray-700 text-sm mt-4 bg-white">
      <li>
        <b className="font-bold">Welcome , </b> <br />
        To access account and manage orders. <br /><br />
        <button className="border h-10 w-30 text-pink-600 border-black hover:border-pink-600 cursor-pointer">
          Login / Sign Up
        </button>
        <br /><br />
        <hr />
        <ul className="flex flex-col gap-3 cursor-pointer">
          <li className="hover:text-pink-500 hover:scale-110 transform transition-all duration-200">Orders</li>
          <li className="hover:text-pink-500 hover:scale-110 transform transition-all duration-200">Wishlist</li>
          <li className="hover:text-pink-500 hover:scale-110 transform transition-all duration-200">Gift Cards</li>
          <li className="hover:text-pink-500 hover:scale-110 transform transition-all duration-200">Contact Us</li>
          <li className="hover:text-pink-500 hover:scale-110 transform transition-all duration-200">Myntra Insider</li>
        </ul>
      </li>
    </ul>
    <hr />
    <ul className="flex flex-col gap-3 cursor-pointer mt-2">
      <li className="hover:text-pink-500 hover:scale-110 transform transition-all duration-200">Myntra Credit</li>
      <li className="hover:text-pink-500 hover:scale-110 transform transition-all duration-200">Coupons</li>
      <li className="hover:text-pink-500 hover:scale-110 transform transition-all duration-200">Save Cards</li>
      <li className="hover:text-pink-500 hover:scale-110 transform transition-all duration-200">Saved VPA</li>
      <li className="hover:text-pink-500 hover:scale-110 transform transition-all duration-200">Saved Addresses</li>
    </ul>
  </div>
</div>


            <li className="cursor-pointer hover:text-orange-600 hover:underline flex flex-col items-center text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart-icon lucide-heart"
              >
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
              </svg>
              Wishlist
            </li>

            <li className="cursor-pointer hover:text-orange-600 hover:underline flex flex-col items-center text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-handbag-icon lucide-handbag"
              >
                <path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z" />
                <path d="M8 11V6a4 4 0 0 1 8 0v5" />
              </svg>
              Bag
            </li>
          </ul>
        </footer>

      </nav>
    </div>
  );
}
