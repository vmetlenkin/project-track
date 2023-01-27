import React from 'react';
import Modal from "../ui/modal";
import Button from "../ui/button";
import AvatarList from "../ui/avatar-list";
import Badge from "../ui/badge";
import {Bars4Icon, TagIcon} from "@heroicons/react/20/solid";
import Textarea from "../ui/textarea";

type Props = {
  show: boolean,
  onClose: () => void
}

const EditTaskModal: React.FC<Props> = (props) => {
  return (
    <Modal title="Редактировать карточку" show={props.show} onClose={props.onClose}>
      <Modal.Content>
        <div>
          <input type="text" className="text-2xl font-semibold outline-none w-full mb-2" value="Add discount code to the checkout" />
          <div className="text-sm font-medium">создал <a className="link">Влад Метленкин</a>, 22 часа назад</div>
        </div>
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Исполнители</div>
          <AvatarList />
        </div>
        <div className="flex gap-6 font-semibold">
          <div>
            <Bars4Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-4 h-6">Описание</div>
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
      </Modal.Content>
      <Modal.Footer>
        <div className="flex items-center space-x-2 rounded-b border-gray-200">
          <Button>Сохранить</Button>
          <Button color="red">Удалить</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTaskModal;