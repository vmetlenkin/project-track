import React from 'react';
import {PlusIcon} from "@heroicons/react/20/solid";

type Props = {
  size?: 'sm' | 'normal',
  onAdd?: () => void
}

const AvatarList: React.FC<Props> = (props) => {
  const {
    onAdd,
    size = 'normal'
  } = props;
  
  const style = {
    size: {
      'sm': 'w-10 h-10',
      'normal': 'w-10 h-10' 
    }
  }
  
  return (
    <div className="flex -space-x-4">
      <img className={`${style.size[size]} rounded-full border-4 border-white dark:border-zinc-900`}
           src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
      <img className={`${style.size[size]} rounded-full border-4 border-white dark:border-zinc-900`}
           src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="" />
      <img className={`${style.size[size]} rounded-full border-4 border-white dark:border-zinc-900`}
           src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />
      <img className={`${style.size[size]} rounded-full border-4 border-white dark:border-zinc-900`}
           src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="" />

      {props.onAdd && (
        <div className={`${style.size[size]} inline-flex border cursor-pointer overflow-hidden relative justify-center 
          items-center bg-white hover:bg-gray-50 rounded-full`} onClick={onAdd}
        >
          <span className="font-medium text-gray-600">
            <PlusIcon className="w-6 h-6" />
          </span>
        </div>
      )}
      
    </div>
  );
};

export default AvatarList;