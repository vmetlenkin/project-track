﻿import React from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../../../layouts/main-layout';
import Heading from '../../../components/ui/heading';
import Tabs from '../../../components/ui/tabs';
import Container from '../../../components/ui/container';
import Breadcrumbs from "../../../components/ui/breadcrumbs";
import {wrapper} from "../../../redux/store";
import { useAppSelector } from "../../../redux/hooks";
import { fetchProjectById } from "../../../redux/slices/project";
import KanbanBoard from "../../../components/KanbanBoard/KanbanBoard";

const ProjectPage = () => {
  const router = useRouter();
  const { pid, page } = router.query;
  
  const project = useAppSelector(state => state.project.data.project);
  
  const tabs = [
    {
      text: 'Kanban доска',
      link: {
        pathname: `/projects/${pid}`,
        query: { page: 'kanban' }
      },
      active: page === 'kanban'
    }
  ];
  
  return (
    <MainLayout>
      <Heading>
        <Breadcrumbs />
        <h1 className="text-3xl font-semibold mt-4 mb-8">
          {page === 'kanban' && 'Kanban доска'}
        </h1>
        <Tabs tabs={tabs} />
      </Heading>
      <Container>
        {page === 'kanban' && project && <KanbanBoard id={project.kanbanBoards[0].id} />}
      </Container>
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
      
      const { pid } = ctx.query;
      await store.dispatch(fetchProjectById(pid as string))
    }
);
export default ProjectPage;