import React, { useState } from 'react';

const DropDownRole = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("Select Role");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const handleOptionClick = (event) => {
    setSelectedCourse(event.target.innerText);  
    setIsOpen(false); 
  };

  return (
    <div className="relative mt-4 w-34" onMouseLeave={closeDropdown}>
      <label className="block text-gray-600 mb-2">Currently you are</label>
      <div
        className="block  bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer"
        onClick={toggleDropdown}
        onMouseEnter={toggleDropdown}
      >
        {selectedCourse}
      </div>
      {isOpen && (
        <ul className="absolute mt-1  bg-white border border-gray-300 rounded shadow-lg z-10">
          <li className="py-2 px-3 hover:bg-slate-200 cursor-pointer" onClick={handleOptionClick}>Student</li>
          <li className="py-2 px-3 hover:bg-slate-200 cursor-pointer" onClick={handleOptionClick}>Trainner</li>
          <li className="py-2 px-3 hover:bg-slate-200 cursor-pointer" onClick={handleOptionClick}>Working</li>
          
        </ul>
      )}
    </div>
  );
};

export default DropDownRole;
