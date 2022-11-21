import React from 'react';

type Props = {
  children: React.ReactNode,
  color?: 'indigo' | 'green' | 'red'
}

const Badge: React.FC<Props> = (props) => {
  const {
    children,
    color = 'indigo'
  } = props;
  
  const theme = {
    'indigo': 'bg-indigo-100 text-indigo-800',
    'green': 'bg-green-100 text-green-800',
    'red': 'bg-red-100 text-red-800'
  }
  
  return (
    <span className={`${theme[color]} text-sm font-medium mr-2 px-2 py-1 rounded`}>
      {children}
    </span>
  );
};

export default Badge;