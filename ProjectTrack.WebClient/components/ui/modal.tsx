import React, {useEffect, useState} from 'react';
import AvatarList from './avatar-list';
import Badge from './badge';

type Props = {
  title: string,
  children: React.ReactNode,
  show: boolean,
  onClose: () => void
}

const Modal: React.FC<Props> = ({ title, children, show, onClose }) => {
  return (
    <div>
      <div className={`${show ? 'fixed' : 'hidden'} flex justify-center items-center bg-black bg-opacity-50 
        overflow-y-auto overflow-x-hiddenx top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full`}
      >
        <div className="relative w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-md shadow">
            <div className="flex justify-between items-center py-4 pl-6 pr-4 rounded-t">
              <Badge>{title}</Badge>
              <button type="button" onClick={onClose} className="text-gray-400 bg-transparent 
                hover:bg-gray-200 hover:text-gray-900 rounded-md text-sm p-1.5 ml-auto inline-flex items-center"
              >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {children}
            <div className="flex items-center px-6 py-4 space-x-2 rounded-b border-gray-200">
              <button data-modal-toggle="defaultModal" type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center">
                Создать проект
              </button>
              <button data-modal-toggle="defaultModal" type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
                Отмена
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;