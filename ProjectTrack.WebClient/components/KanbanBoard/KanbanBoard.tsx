import React, { useEffect, useState } from 'react';
import {DragDropContext, Draggable, Droppable, DropResult} from "@hello-pangea/dnd";
import Badge from "../ui/badge";
import Dropdown from "../ui/dropdown";
import AvatarList from "../ui/avatar-list";
import { changeTaskCardPosition, fetchKanbanByProject, moveKanbanTask } from '../../redux/slices/kanban';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import EditTaskModal from "./components/EditTaskModal";
import CreateTaskModal from "./components/CreateTaskModal";
import TaskCard from "./components/TaskCard";

type KanbanBoardProps = {
  id: string;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ id }) => {
  const { board } = useAppSelector(state => state.kanban);
  const dispatch = useAppDispatch();

  // Получаем и загружаем данные доски в store
  useEffect(() => {
    dispatch(fetchKanbanByProject(id))
  }, [dispatch]);
  
  const [editTaskModal, showEditTaskModal] = useState(false);
  const [createTaskModal, showCreateTaskModal] = useState(false);

  const [currentColumnId, setCurrentColumnId] = useState('');

  const handleCreateTaskClick = (columnId: string) => {
    setCurrentColumnId(columnId);
    showCreateTaskModal(true);
  }
  
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    dispatch(moveKanbanTask(result));
  }

  if (!board) {
    return <div>Loading!</div>
  }
  
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="flex gap-4 items-start">
          {board.columns.map((column, i) => (
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <div className="bg-[#F4F3F6] dark:bg-zinc-800 rounded-sm w-1/4" {...provided.droppableProps} ref={provided.innerRef}>
                  <div className="px-2 py-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">
                        <span className="ml-0.5">{board.columns[i].name}</span>
                        <span className="text-gray-400 ml-2">{board.columns[i].tasks.length}</span>
                      </h3>
                      <Dropdown />
                    </div>
                    {board.columns[i].tasks?.map((task, index) => (
                      <TaskCard key={task.id} task={task} index={index} edit={() => showEditTaskModal(true)} />
                    ))}
                    {provided.placeholder}
                  </div>
                  <button
                    onClick={() => handleCreateTaskClick((board.columns[i].id))}
                    className="flex justify-center bg-[#EBEAED] dark:bg-indigo-700 dark:hover:bg-indigo-800 p-4 font-medium hover:bg-gray-300 w-full rounded-b-sm"
                  >
                    Новая карточка
                  </button>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
      <EditTaskModal show={editTaskModal} onClose={() => showEditTaskModal(false)} />
      <CreateTaskModal column={currentColumnId} show={createTaskModal} onClose={() => showCreateTaskModal(false)} />
    </>
  );
};

export default KanbanBoard;