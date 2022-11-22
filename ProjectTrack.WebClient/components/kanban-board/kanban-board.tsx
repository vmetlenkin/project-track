import React, { useEffect, useState } from 'react';
import {DragDropContext, Draggable, Droppable, DropResult} from "@hello-pangea/dnd";
import Badge from "../ui/badge";
import Modal from "../ui/modal";

const columns = {
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
  const [tasks, updateTasks] = useState(columns);
  const [taskModal, showTaskModal] = useState(false);
  
  const handleOnDragEnd = (result) => {
    const { source, destination } = result;
    
    if (!destination) return;
    
    if (destination.droppableId === source.droppableId) {
      const items = Array.from(tasks[source.droppableId].tasks);
      const [removed] = items.splice(source.index, 1);
      items.splice(destination.index, 0, removed);

      const updatedState = {
        ...tasks,
        [source.droppableId]: {
          tasks: items
        }
      };
      
      updateTasks(updatedState);
    } else {
      const startColumn = [...tasks[source.droppableId].tasks];
      const finishColumn = [...tasks[destination.droppableId].tasks];
      const [removed] = startColumn.splice(source.index, 1);
      finishColumn.splice(destination.index, 0, removed);

      const updatedState = {
        ...tasks,
        [source.droppableId]: {
          tasks: startColumn
        },
        [destination.droppableId]: {
          tasks: finishColumn
        },
      };
      
      updateTasks(updatedState);
    }
  }
  
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="flex gap-4 items-start">
          <Droppable droppableId="tasks">
            {(provided) => (
              <div className="bg-[#F4F3F6] rounded-sm w-1/4" {...provided.droppableProps} ref={provided.innerRef}>
                <div className="p-4">
                  <h3 className="text-xl mb-4 font-semibold">
                    Новые задачи <span className="text-gray-400">{tasks['tasks'].tasks.length}</span>
                  </h3>
                  {tasks['tasks'].tasks.map((task, index) => (
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
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
                <button className="flex justify-center bg-gray-200 p-4 font-medium hover:bg-gray-300 w-full rounded-b-sm">
                  Новая карточка
                </button>
              </div>
            )}
          </Droppable>
          <Droppable droppableId="inprocess">
            {(provided) => (
              <div className="bg-[#F4F3F6] rounded-sm w-1/4" {...provided.droppableProps} ref={provided.innerRef}>
                <div className="p-4">
                  <h3 className="text-xl mb-4 font-semibold">В процессе</h3>
                  {tasks['inprocess'].tasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          className="bg-white rounded-sm mb-2 p-4 font-semibold space-y-4"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}>
                          <div className="flex">
                            <Badge>Kanban</Badge>
                            <Badge color="red">C#</Badge>
                          </div>
                          <div>{task.title}</div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
                <button className="flex justify-center bg-gray-200 p-4 font-medium hover:bg-gray-300 w-full rounded-b-sm">
                  Новая карточка
                </button>
              </div>
            )}
          </Droppable>
          <Droppable droppableId="3">
            {(provided) => (
              <div className="bg-[#F4F3F6] rounded-sm w-1/4" {...provided.droppableProps} ref={provided.innerRef}>
                <div className="p-4">
                  <h3 className="text-xl mb-4 font-semibold">В процессе</h3>
                  {tasks['3'].tasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          className="bg-white rounded-sm mb-2 p-4 font-semibold space-y-4"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}>
                          <div className="flex">
                            <Badge>Kanban</Badge>
                            <Badge color="red">C#</Badge>
                          </div>
                          <div>{task.title}</div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
                <button className="flex justify-center bg-gray-200 p-4 font-medium hover:bg-gray-300 w-full rounded-b-sm">
                  Новая карточка
                </button>
              </div>
            )}
          </Droppable>
          <Droppable droppableId="4">
            {(provided) => (
              <div className="bg-[#F4F3F6] rounded-sm w-1/4" {...provided.droppableProps} ref={provided.innerRef}>
                <div className="p-4">
                  <h3 className="text-xl mb-4 font-semibold">В процессе</h3>
                  {tasks['4'].tasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          className="bg-white rounded-sm mb-2 p-4 font-semibold space-y-4"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}>
                          <div className="flex">
                            <Badge>Kanban</Badge>
                            <Badge color="red">C#</Badge>
                          </div>
                          <div>{task.title}</div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
                <button className="flex justify-center bg-gray-200 p-4 font-medium hover:bg-gray-300 w-full rounded-b-sm">
                  Новая карточка
                </button>
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
      <Modal title="Редактировать карточку" show={taskModal} onClose={() => showTaskModal(false)}>
        <h1 className="text-2xl font-semibold h-[500px]">Add discount code to the checkout</h1>
      </Modal>
    </>
  );
};

export default KanbanBoard;