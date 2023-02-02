import React, { useEffect } from 'react';
import {Bars4Icon, TagIcon} from "@heroicons/react/20/solid";
import Modal from "../../ui/modal";
import AvatarList from "../../ui/avatar-list";
import Badge from "../../ui/badge";
import Button from "../../ui/button";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import FormHeadingInput from "../../ui/form-heading-input";
import Textarea from "../../ui/textarea";
import { FormProvider, useForm } from "react-hook-form";
import Spinner from "../../ui/Spinner";
import { deleteTask, updateTask } from "../../../redux/slices/kanban";
import { UpdateTaskRequest } from "../../../redux/api/task-api";

type EditTaskModalProps = {

  show: boolean,
  onClose: () => void
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  show, 
  onClose
}) => {
  const dispatch = useAppDispatch();
  const { task, isLoading } = useAppSelector(state => state.kanban);

  const form = useForm({
    mode: "onChange"
  });

  useEffect(() => {
    if (task) {
      form.setValue('title', task.title);
      form.setValue('text', task.text);
    }
  }, [task]);
  
  const handleUpdateTask = (formData) => {
    const request: UpdateTaskRequest = {
      id: task.id,
      title: formData.title,
      text: formData.text
    }
    
    dispatch(updateTask(request));
    onClose();
  }

  const handleTaskDelete = () => {
    dispatch(deleteTask(task.id));
    onClose();
  }
  
  if (isLoading) {
    return (
      <Modal>
          <div className="flex h-80 items-center justify-center">
            <Spinner />
          </div>
      </Modal>
    )
  }
  
  return (
    <Modal title="Редактировать карточку" show={show} onClose={onClose}>
      <Modal.Content>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(handleUpdateTask)} className="gap-6 font-semibold">
            <div>
              <FormHeadingInput name="title" />
            </div>
            <div className="py-6 border-b dark:border-zinc-700">
              <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Автор</div>
              <AvatarList />
            </div>
            <div className="flex-1 py-6">
              <div className="flex gap-6 font-semibold">
                <div>
                  <Bars4Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-4 h-6">Описание</div>
                  <Textarea name="text" />
                </div>
              </div>
            </div>
            <div className="flex gap-6 font-semibold">
              <div>
                <TagIcon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-4 h-6">Теги</div>
                <Badge close>Дизайн</Badge>
                <Badge close>Фронтенд</Badge>
                <Badge close>TypeScript</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-2 rounded-b border-gray-200 py-6">
              <Button>Сохранить</Button>
              <button className="bg-red-500 hover:bg-red-600 focus:ring-red-300" onClick={handleTaskDelete}>Удалить</button>
            </div>
          </form>
        </FormProvider>
      </Modal.Content>
    </Modal>
  );
};

export default EditTaskModal;