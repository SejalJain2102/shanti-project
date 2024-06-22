import React, { useState } from 'react';
import { useField, useFormikContext } from 'formik';

const DropDownButton = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const handleOptionClick = (course) => {
    setFieldValue(name, {
      ...field.value,
      [course]: !field.value[course],
    });
    setIsOpen(false);
  };

  const selectedCourses = Object.keys(field.value)
    .filter((key) => field.value[key])
    .map((key) => key.charAt(0).toUpperCase() + key.slice(1))
    .join(', ');

  return (
    <div className="relative mt-4 w-34" onMouseLeave={closeDropdown}>
      <label className="block text-gray-600 mb-2">Select Courses</label>
      <div
        className="block bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer"
        onClick={toggleDropdown}
        onMouseEnter={toggleDropdown}
      >
        {selectedCourses || 'Select Course'}
      </div>
      {isOpen && (
        <ul className="absolute mt-1 bg-white border border-gray-300 rounded shadow-lg z-10">
          <li className="py-2 px-3 hover:bg-slate-200 cursor-pointer" onClick={() => handleOptionClick('nodeJs')}>
            NodeJs
          </li>
          <li className="py-2 px-3 hover:bg-slate-200 cursor-pointer" onClick={() => handleOptionClick('reactJs')}>
            ReactJs
          </li>
          <li className="py-2 px-3 hover:bg-slate-200 cursor-pointer" onClick={() => handleOptionClick('python')}>
            Python
          </li>
          <li className="py-2 px-3 hover:bg-slate-200 cursor-pointer" onClick={() => handleOptionClick('digitalMarketing')}>
            Digital Marketing
          </li>
        </ul>
      )}
      {meta.touched && meta.error ? <div className="text-red-600">{meta.error}</div> : null}
    </div>
  );
};

export default DropDownButton;
