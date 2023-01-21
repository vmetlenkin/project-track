﻿import React, {useState} from 'react';
import MainLayout from '../../layouts/main-layout';
import Heading from '../../components/ui/heading';
import Card from '../../components/ui/card';
import Container from '../../components/ui/container';
import Button from "../../components/ui/button";
import NewProjectModal from "../../components/new-project-modal/new-project-modal";

const ProjectsPage = () => {
  const [newProjectModal, showNewProjectModal] = useState(false);
  
  return (
    <MainLayout>
      <Heading>Мои проекты</Heading>
      <Container>
        <div className="flex justify-end">
          <Button onClick={() => showNewProjectModal(true)}>Новый проект</Button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Card />
        </div>
      </Container>
      <NewProjectModal show={newProjectModal} onClose={() => showNewProjectModal(false)}/>
    </MainLayout>
  );
};

export default ProjectsPage;