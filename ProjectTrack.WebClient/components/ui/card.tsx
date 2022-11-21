import React from 'react';
import Badge from './badge';
import Dropdown from './dropdown';
import Link from 'next/link';
import AvatarList from './avatar-list';

const Card = () => {
  return (
    <div className="bg-white p-4 rounded  ">
      <div className="flex justify-between items-center mb-4">
        <div>
          <Badge>Вебсайт</Badge>
          <Badge color="green">Разработка</Badge>
        </div>
        <div>
          <Dropdown />
        </div>
      </div>
      <Link href="/projects/1">
        <h5 className="text-xl font-semibold mb-4 hover:text-indigo-700">Разработка сайта</h5>
      </Link>
      <p className="mb-4">
        Небольшое описание проекта, чтобы описать что будет...
      </p>
      <div className="flex justify-between">
        <div>
          
        </div>
        <AvatarList />
      </div>
    </div>
  );
};

export default Card;