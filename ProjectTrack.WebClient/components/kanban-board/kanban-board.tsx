import React, { useEffect, useState } from 'react';
import {DragDropContext, Draggable, Droppable, DropResult} from "@hello-pangea/dnd";
import Badge from "../ui/badge";
import Modal from "../ui/modal";
import EditTaskModal from "./edit-task-modal";
import Dropdown from "../ui/dropdown";
import AvatarList from "../ui/avatar-list";

const data = {
  'tasks': {
    tasks: [
      {
        id: '1',
        title: "💼 Add discount code to checkout page and something else",
        date: "Sep 14",
        type: "Feature Request"
      },
      {
        id: '2',
        title: "Provide documentation on integrations",
        date: "Sep 12"
      },
      {
        id: '3',
        title: "Design shopping cart dropdown",
        date: "Sep 9",
        type: "Design"
      },
      {
        id: '4',
        title: "Design shopping cart dropdown",
        date: "Sep 9",
        type: "Design"
      }
    ]
  },
  'inprocess': {
    tasks: [
      {
        id: '5',
        title: "💼 Aупкукуукпукп",
        date: "Sep 14",
        type: "Feature Request"
      },
      {
        id: '6',
        title: "укпкуп укп",
        date: "Sep 12"
      }
    ]
  },
  '3': {
    tasks: [
      {
        id: '10',
        title: "💼 Aупкукуукпукп",
        date: "Sep 14",
        type: "Feature Request"
      },
      {
        id: '11',
        title: "укпкуп укп",
        date: "Sep 12"
      }
    ]
  },
  '4': {
    tasks: [
      {
        id: '12',
        title: "💼 Aупкукуукпукп",
        date: "Sep 14",
        type: "Feature Request"
      },
      {
        id: '14',
        title: "укпкуп укп",
        date: "Sep 12"
      }
    ]
  }
};

const KanbanBoard = () => {
  const [columns, updateColumns] = useState(data);
  const [taskModal, showTaskModal] = useState(false);
  
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
                        <span className="ml-0.5">Новые задачи</span> 
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
                  <button className="flex justify-center bg-[#EBEAED] p-4 font-medium hover:bg-gray-300 w-full rounded-b-sm">
                    Новая карточка
                  </button>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
      <EditTaskModal show={taskModal} onClose={() => showTaskModal(false)}/>
    </>
  );
};

export default KanbanBoard;