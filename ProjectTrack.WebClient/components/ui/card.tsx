import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-white p-4 rounded">
      {children}
    </div>
  );
};

export default Card;