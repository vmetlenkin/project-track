import React from 'react';

type Props = {
  children: React.ReactNode
}

const Button: React.FC<Props> = ({ children }) => {
  return (
    <button type="button" className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 
      font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none 
      dark:focus:ring-indigo-300">
      {children}
    </button>
  );
};

export default Button;