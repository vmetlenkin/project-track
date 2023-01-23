import React from 'react';
import Card from "./ui/card";
import Badge from "./ui/badge";
import Dropdown from "./ui/dropdown";
import Link from "next/link";
import AvatarList from "./ui/avatar-list";
import { ProjectResponse } from "../api/types";

type Props = {
  project: ProjectResponse;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <div>
          <Badge>Вебсайт</Badge>
          <Badge color="green">Разработка</Badge>
        </div>
        <div>
          <Dropdown />
        </div>
      </div>
      <Link href={{pathname: `/projects/${project.id}`, query: { page: 'kanban' }} }>
        <h5 className="text-xl font-semibold mb-4 hover:text-indigo-700">{project.name}</h5>
      </Link>
      <p className="mb-4">
        Небольшое описание проекта...
      </p>
      <div className="flex justify-between">
        <div>

        </div>
        <AvatarList />
      </div>
    </Card>
  );
};

export default ProjectCard;