import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50" type="button">
        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
        </svg>
      </button>
      <div id="dropdownDotsHorizontal" className={`${isOpen ? 'absolute' : 'hidden'} z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow`}>
        <ul className="py-1 text-sm text-gray-700">
          <li>
            <a href="#"
               className="block py-2 px-4 hover:bg-gray-100">Настройки</a>
          </li>
        </ul>
        <div className="py-1">
          <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Удалить</a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;