<div><ul className="hidden md:flex justify-evenly items-center gap-8 mr-30 font-bold">
  {/* Men dropdown first */}
  <div className="relative group">
    <li className="cursor-pointer transition-colors flex items-center gap-1 text-gray-800 hover:text-pink-600">
      <a href="/men">Men</a>
    </li>
    <div className="absolute left-0 top-full mt-0 w-52 bg-white shadow-lg rounded-md
    opacity-0 invisible group-hover:opacity-100 group-hover:visible
    transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto">
      <ul className="flex flex-col gap-2 p-4 text-sm text-gray-700">
        <li className="hover:text-pink-500">Topwear</li>
        <li className="hover:text-pink-500">Bottomwear</li>
        <li className="hover:text-pink-500">Footwear</li>
        <li className="hover:text-pink-500">Sportswear</li>
        <li className="hover:text-pink-500">Accessories</li>
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
</div>
