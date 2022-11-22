import React from 'react';
import MainLayout from '../../layouts/main-layout';
import Heading from '../../components/ui/heading';
import Card from '../../components/ui/card';
import Container from '../../components/ui/container';
import AuthModal from "../../components/auth-modal/auth-modal";

const ProjectsPage = () => {
  return (
    <MainLayout>
      <Heading>Мои проекты</Heading>
      <Container>
        <div className="flex justify-between mb-4">
          <div>
            
          </div>
          <div>
            <AuthModal />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Card />
        </div>
      </Container>
    </MainLayout>
  );
};

export default ProjectsPage;