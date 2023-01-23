import React, {useState} from 'react';
import Modal from "../ui/modal";
import AvatarList from "../ui/avatar-list";
import Badge from "../ui/badge";
import Button from "../ui/button";
import {ProjectApi, UserApi} from "../../api";
import {setCookie} from "nookies";
import {setUserData} from "../../redux/slices/user";
import {useAppSelector} from "../../redux/hooks";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {LoginFormSchema} from "../../utils/validations";
import FormField from "../ui/form-field";
import FormHeadingInput from "../ui/form-heading-input";

type Props = {
  show: boolean,
  onClose: () => void
}

const NewProjectModal: React.FC<Props> = (props) => {
  const userId = useAppSelector((state) => state.user.data.id);
  const form = useForm({
    mode: "onChange"
  });
  
  const handleCreateProject = async (dto: any) => {
    try {
      dto.userId = userId;
      
      const response = await ProjectApi.create(dto);
      console.log(response);
      props.onClose();
      // dispatch(setUserData(data));
    } catch (err: any) {
      console.error(err);
    }
  }
  
  return (
    <Modal title="Создать проект" show={props.show} onClose={props.onClose}>
      <div className="px-6 pb-6">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(handleCreateProject)} className="gap-6 font-semibold">
            <div>
              <FormHeadingInput name="name" placeholder="Название проекта" />
            </div>
            <div className="py-6 border-b">
              <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Участники</div>
              <AvatarList />
            </div>
            <div className="flex-1 py-6">
              <textarea className="w-full outline-none font-medium" placeholder="Расскажите о своем проекте..." />
            </div>
            <Button>Создать проект</Button>
          </form>
        </FormProvider>
      </div>
    </Modal>
  );
};

export default NewProjectModal;