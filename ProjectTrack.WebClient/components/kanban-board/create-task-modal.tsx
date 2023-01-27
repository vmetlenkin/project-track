import React from 'react';
import Modal from "../ui/modal";
import Button from "../ui/button";
import { ProjectApi, TaskApi } from "../../api";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../redux/hooks";
import { addTaskCard } from "../../redux/slices/project";
import FormHeadingInput from "../ui/form-heading-input";
import AvatarList from "../ui/avatar-list";
import { FormProvider, useForm } from "react-hook-form";
import Textarea from "../ui/textarea";

type Props = {
  show: boolean;
  column: string;
  onClose: () => void;
}

const CreateTaskModal: React.FC<Props> = (props) => {
  const router = useRouter(); 
  const { pid } = router.query;
  
  const dispatch = useAppDispatch();

  const form = useForm({
    mode: "onChange"
  });

  const handleCreateTask = async (dto) => {
    try {
      dto = {
        projectId: pid + '',
        columnId: props.column,
        title: dto.title,
        text: dto.text
      }

      console.log(dto);

      const response = await TaskApi.create(dto);
      dispatch(addTaskCard(response));

      props.onClose();
    } catch (err) {
      console.error(err);
    }
  }
  
  return (
    <Modal title="Новая карточка" show={props.show} onClose={props.onClose}>
      <div className="px-6 pb-6">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(handleCreateTask)} className="gap-6 font-semibold">
            <div>
              <FormHeadingInput name="title" placeholder="Название задачи" />
            </div>
            <div className="py-6 border-b">
              <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Участники</div>
              <AvatarList />
            </div>
            <div className="flex-1 py-6">
              <Textarea name="text" placeholder="Описание задачи..." />
            </div>
            <Button>Создать</Button>
          </form>
        </FormProvider>
      </div>
    </Modal>
  );
};

export default CreateTaskModal;