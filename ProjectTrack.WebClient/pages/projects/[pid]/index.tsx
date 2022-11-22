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

const ProjectPage = () => {
  const router = useRouter();
  const { pid, page } = router.query;
  
  const tabs = [
    {
      text: 'Список задач',
      link: { 
        pathname: `/projects/${pid}`,
        query: { page: 'tasks' }
      },
      active: page === 'tasks'
    },
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
          {page === 'kanban' && (
              <>
                Kanban доска
              </>
          )}
        </h1>
        <Tabs tabs={tabs} />
      </Heading>
      <Container>
        {page === 'tasks' && (
          <div className="flex gap-4">
              <div className="bg-white w-1/2">
                <Table />
              </div>
              <div className="bg-white w-1/2 p-4">
                <div>
                  <div className="flex items-center gap-4 mb-2 text-sm font-semibold text-gray-500">
                    <div>Автор</div>
                    <Avatar />
                    <div className="text-indigo-700 hover:underline cursor-pointer">Кэрри Паркер</div>
                  </div>
                  <div className="flex items-center gap-4 mb-2 text-sm font-semibold text-gray-500">
                    <div>Обновлено</div>
                    <Avatar />
                    <div className="text-indigo-700 hover:underline cursor-pointer">Кэрри Паркер</div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Your first project task</h3>
                  <p>
                    YouTrack — это инструмент управления проектами, который адаптируется под потребности различных
                    команд в компании. Это инфoрмаци я сообщества Стартпак. В YouTrack можно планировать проекты и
                    отслеживать задачи, использовать Agile-доски, организовывать спринты и релизы, вести базу знаний,
                    использовать диаграмму Ганта, отслеживать время выполнения работы, создавать отчёты и панели
                    мониторинга, настраивать рабочие процессы. YouTrack полностью подстраивается под бизнес-процессы
                    различных команд — от небольших стартапов до корпораций.

                    70 тысяч команд во всём мире используют YouTrack.

                    Доступны версии на сервере или в облаке.
                  </p>
                </div>
              </div>
            </div>
        )}
        {page === 'kanban' && <KanbanBoard />}
      </Container>
    </MainLayout>
  );
};

  export default ProjectPage;