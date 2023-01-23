import React, {useState} from 'react';
import MainLayout from '../../layouts/main-layout';
import Heading from '../../components/ui/heading';
import Card from '../../components/ui/card';
import Container from '../../components/ui/container';
import Button from "../../components/ui/button";
import NewProjectModal from "../../components/new-project-modal/new-project-modal";
import { wrapper } from "../../redux/store";
import { ProjectApi } from "../../api";
import { NextPage } from "next";
import { ProjectResponse } from "../../api/types";
import ProjectCard from "../../components/project-card";

type Props = {
  projects: ProjectResponse[];
}

const ProjectsPage: NextPage<Props> = ({ projects }) => {
  const [newProjectModal, showNewProjectModal] = useState(false);
  
  return (
    <MainLayout>
      <Heading>
        <div className="pb-8 flex justify-between items-center">
          <h1>Мои проекты</h1>
          <Button onClick={() => showNewProjectModal(true)}>Новый проект</Button>
        </div>
      </Heading>
      <Container>
        <div className="grid grid-cols-3 gap-4">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </Container>
      <NewProjectModal show={newProjectModal} onClose={() => showNewProjectModal(false)}/>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (ctx) => {
      const user = store.getState().user.data;

      if (!user) {
        return {
          redirect: {
            destination: '/login',
            permanent: false,
          }
        };
      }

      const projects = await ProjectApi.getByUserId();
      
      return {
        props: { projects }
      } 
    }
);
export default ProjectsPage;