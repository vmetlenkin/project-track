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

const ProjectPage = () => {
  const router = useRouter();
  const { pid, page } = router.query;
  
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
        {page === 'kanban' && <KanbanBoard />}
      </Container>
    </MainLayout>
  );
};

  export default ProjectPage;