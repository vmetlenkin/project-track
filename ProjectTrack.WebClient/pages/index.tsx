import React from 'react';
import MainLayout from '../layouts/main-layout';
import Heading from '../components/ui/heading';

const Home = () => {
  return (
    <MainLayout>
      <Heading>Название проекта</Heading>
      <div className="flex container mx-auto">
        <div className="w-1/2">1</div>
        <div className="w-1/2">
          <h3>Заголовок задачи</h3>
          <p>Текст текущей задачи</p>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home;
