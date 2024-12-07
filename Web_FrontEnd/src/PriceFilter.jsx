import React, { useState } from 'react';

const NavbarWithDropdown = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="p-4 bg-gray-100">
      {/* Navbar */}
      <div className="flex space-x-4 items-center">
        <input
          type="text"
          placeholder="Search and select area"
          className="border px-4 py-2 rounded-md w-80"
        />
        <button className="px-4 py-2 bg-white border rounded-md hover:bg-gray-50">Buy</button>
        <button className="px-4 py-2 bg-white border rounded-md hover:bg-gray-50">Apartments</button>
        <button className="px-4 py-2 bg-white border rounded-md hover:bg-gray-50">1 Bed</button>

        {/* Dropdown Button */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="px-4 py-2 bg-white border rounded-md hover:bg-gray-50">
            Price
          </button>

          {/* Dropdown Menu */}
          {dropdownVisible && (
            <div className="absolute left-0 mt-2 w-64 p-4 bg-white shadow-lg rounded-lg z-10">
              {/* Arrow */}
              <div className="absolute top-0 left-6 -mt-2 w-4 h-4 bg-white transform rotate-45 "></div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <button className="px-2 py-1 border rounded-md">Any</button>
                </div>
                <div>
                  <button className="px-2 py-1 border rounded-md">Apartments</button>
                </div>
                <div>
                  <button className="px-2 py-1 border rounded-md">Villas</button>
                </div>
                <div>
                  <button className="px-2 py-1 border rounded-md">Townhouses</button>
                </div>
                <div>
                  <button className="px-2 py-1 border rounded-md">Hotel Apartments</button>
                </div>
                <div>
                  <button className="px-2 py-1 border rounded-md">Penthouses</button>
                </div>
                {/* Add more property types as needed */}
              </div>

              <div className="flex justify-between mt-4">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md">Reset</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md">Done</button>
              </div>
            </div>
          )}
        </div>

        <button className="px-4 py-2 bg-red-500 text-white rounded-md">SEARCH</button>
        <button className="px-4 py-2 bg-white border rounded-md hover:bg-gray-50">Filters</button>
      </div>
    </div>
  );
};

export default NavbarWithDropdown;
