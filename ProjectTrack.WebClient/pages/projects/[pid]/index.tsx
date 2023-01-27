import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../../../layouts/main-layout';
import Heading from '../../../components/ui/heading';
import Table from '../../../components/ui/table';
import Tabs from '../../../components/ui/tabs';
import Avatar from '../../../components/ui/avatar';
import Container from '../../../components/ui/container';
import KanbanBoard from "../../../components/kanban-board/kanban-board";
import Breadcrumbs from "../../../components/ui/breadcrumbs";
import AvatarList from "../../../components/ui/avatar-list";
import {wrapper} from "../../../redux/store";
import { useAppSelector } from "../../../redux/hooks";
import { ProjectApi } from "../../../api";
import { setProjectData, setProjectListData } from "../../../redux/slices/project";

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
          {page === 'tasks' && ( 
              <>
                Задачи <span className="text-gray-400">20</span> 
              </>
          )}
          {page === 'kanban' && 'Kanban доска'}
        </h1>
        <Tabs tabs={tabs} />
      </Heading>
      <Container>
        {page === 'kanban' && project && <KanbanBoard data={project.kanbanColumns} />}
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

      try {
        const { pid } = ctx.query;
        console.log(pid);
        const projectData = await ProjectApi.getById(pid as string);
        store.dispatch(setProjectData(projectData));
      } catch (err) {
        console.error('Failed to load project data: ' + err);
      }
    }
);
export default ProjectPage;