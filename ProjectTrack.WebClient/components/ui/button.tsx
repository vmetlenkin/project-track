import React from 'react';

type Props = {
  children: React.ReactNode,
  color?: 'indigo' | 'green' | 'red'
}

const Button: React.FC<Props> = (props) => {
  const {
    children,
    color = 'indigo'
  } = props;

  const theme = {
    'indigo': 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-300',
    'green': 'bg-green-600 hover:bg-green-700 focus:ring-green-300',
    'red': 'bg-red-500 hover:bg-red-600 focus:ring-red-300'
  };
  
  return (
    <button type="button" className={`${theme[color]} text-white font-medium rounded-md text-sm px-5 py-2.5 focus:ring-4
      focus:outline-none`}> 
      {children}
    </button>
  );
};

export default Button;