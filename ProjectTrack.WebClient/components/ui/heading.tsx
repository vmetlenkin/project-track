import React from 'react';

type Props = {
  children: React.ReactNode
}

const Heading: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-white pt-8 mb-5">
      <div className="container mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Heading;