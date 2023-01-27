import React, { useState } from 'react';
import {DragDropContext, Draggable, Droppable, DropResult} from "@hello-pangea/dnd";
import Badge from "../ui/badge";
import EditTaskModal from "./edit-task-modal";
import Dropdown from "../ui/dropdown";
import AvatarList from "../ui/avatar-list";
import CreateTaskModal from "./create-task-modal";
import { useRouter } from "next/router";

type Props = {
  data: any | null
}

const KanbanBoard: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  const { pid } = router.query;
  
  const [columns, updateColumns] = useState(data);
  
  const [taskModal, showTaskModal] = useState(false);
  const [createTaskModal, showCreateTaskModal] = useState(false);

  const [currentColumnId, setCurrentColumnId] = useState('');

  const handleCreateTaskClick = (columnId: string) => {
    setCurrentColumnId(columnId);
    showCreateTaskModal(true);
  }
  
  const handleOnDragEnd = (result) => {
    const { source, destination } = result;
    
    if (!destination) return;
    
    if (destination.droppableId === source.droppableId) {
      const items = Array.from(columns[source.droppableId].tasks);
      const [removed] = items.splice(source.index, 1);
      items.splice(destination.index, 0, removed);

      const updatedState = {
        ...columns,
        [source.droppableId]: {
          tasks: items
        }
      };
      
      updateColumns(updatedState);
    } else {
      const startColumn = [...columns[source.droppableId].tasks];
      const finishColumn = [...columns[destination.droppableId].tasks];
      const [removed] = startColumn.splice(source.index, 1);
      finishColumn.splice(destination.index, 0, removed);

      const updatedState = {
        ...columns,
        [source.droppableId]: {
          tasks: startColumn
        },
        [destination.droppableId]: {
          tasks: finishColumn
        },
      };
      
      updateColumns(updatedState);
    }
  }
  
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="flex gap-4 items-start">
          {Object.keys(columns).map(columnId => (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided) => (
                <div className="bg-[#F4F3F6] rounded-sm w-1/4" {...provided.droppableProps} ref={provided.innerRef}>
                  <div className="px-2 py-2">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">
                        <span className="ml-0.5">{data[0].name}</span> 
                        <span className="text-gray-400 ml-2">{columns[columnId].tasks.length}</span>
                      </h3>
                      <Dropdown />
                    </div>
                    {columns[columnId].tasks.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div
                            className="bg-white rounded-sm mb-2 p-4 font-semibold space-y-4"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            onClick={() => showTaskModal(true)}
                          >
                            <div className="flex">
                              <Badge>Kanban</Badge>
                              <Badge color="red">C#</Badge>
                            </div>
                            <div>{task.title}</div>
                            <AvatarList size="sm" />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                  <button 
                    onClick={() => handleCreateTaskClick((columns[columnId].id))} 
                    className="flex justify-center bg-[#EBEAED] p-4 font-medium hover:bg-gray-300 w-full rounded-b-sm"
                  >
                    Новая карточка
                  </button>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
      <EditTaskModal show={taskModal} onClose={() => showTaskModal(false)} />
      <CreateTaskModal column={currentColumnId} show={createTaskModal} onClose={() => showCreateTaskModal(false)} />
    </>
  );
};

export default KanbanBoard;