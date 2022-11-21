﻿import React from 'react';
import Link from 'next/link';

const menu = [
  {
    text: 'Проекты',
    link: '/projects',
    active: false
  },
  {
    text: 'Сообщения',
    link: '',
    active: false
  },
];

const Navbar = () => {
  return (
    <nav
      className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-100">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">Flowbite</span>
        </Link>
        <div className="flex md:order-2">
          <button type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                  focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Войти
          </button>
          <button data-collapse-toggle="navbar-sticky" type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
                  focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 
                01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col mt-4 border border-gray-100 rounded-lg bg-gray-50 
              md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            {menu.map(item => (
              <li key={item.text}>
                <Link href={item.link} className="block py-2 pl-3 pr-4 font-semibold text-white bg-indigo-50 rounded md:text-indigo-700">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;