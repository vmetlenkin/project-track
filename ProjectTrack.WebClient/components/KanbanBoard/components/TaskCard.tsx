import React, { useRef, useState } from 'react';
import AvatarList from "../../ui/avatar-list";
import { Draggable } from "@hello-pangea/dnd";
import { KanbanColumnTask } from "../../../types/kanban-board";
import Badge from "../../ui/badge";

type TaskCardProps = {
  task: KanbanColumnTask;
  index: number;
  onClick: (string) => void;
};

const TaskCard: React.FC<TaskCardProps> = ({ 
  task, 
  index, 
  onClick
}) => {
  
  
  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided) => (
          <div
            className="bg-white dark:bg-zinc-900 rounded-md mb-2 p-4 font-semibold space-y-4"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onClick={() => onClick(index)}
          >
            <div className="flex">
              {/* Теги */}
              <Badge>Без тегов</Badge>
            </div>
            <div>{task.title}</div>
            <AvatarList size="sm" />
          </div>
        )}
      </Draggable>
      
    </>
  );
};

export default TaskCard;