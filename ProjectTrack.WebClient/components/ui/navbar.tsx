import React from 'react';
import Link from 'next/link';
import Button from "./button";

const menu = [
  {
    text: 'Проекты',
    link: '/projects',
    active: false
  }
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
          <Button>Войти</Button>
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