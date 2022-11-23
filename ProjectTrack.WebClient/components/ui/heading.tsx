import React from 'react';
import Container from "./container";

type Props = {
  children: React.ReactNode
}

const Heading: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-white pt-8 mb-5">
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default Heading;