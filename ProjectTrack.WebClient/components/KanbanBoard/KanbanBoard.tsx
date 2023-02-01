import React, { useEffect, useState } from 'react';
import { DragDropContext } from "@hello-pangea/dnd";
import { fetchKanbanBoard, moveKanbanTask } from '../../redux/slices/kanban';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import EditTaskModal from "./components/EditTaskModal";
import CreateTaskModal from "./components/CreateTaskModal";
import Spinner from "../ui/Spinner";
import KanbanColumn from "./components/KanbanColumn";

type KanbanBoardProps = {
  id: string;
};

const KanbanBoard: React.FC<KanbanBoardProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const { board } = useAppSelector(state => state.kanban);
  
  useEffect(() => {
    dispatch(fetchKanbanBoard(id))
  }, [dispatch]);
  
  const [editTaskModal, showEditTaskModal] = useState(false);
  const [createTaskModal, showCreateTaskModal] = useState(false);

  // ID колонки
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
    return <Spinner />
  }
  
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="flex gap-4 items-start">
          {board.columns.map((column) => (
            <KanbanColumn
              key={column.id}
              column={column} 
              edit={() => showEditTaskModal(true)} 
              onCreateTask={() => handleCreateTaskClick(column.id)}
            />
          ))}
        </div>
      </DragDropContext>
      <EditTaskModal show={editTaskModal} onClose={() => showEditTaskModal(false)} />
      <CreateTaskModal column={currentColumnId} show={createTaskModal} onClose={() => showCreateTaskModal(false)} />
    </>
  );
};

export default KanbanBoard;