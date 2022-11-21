import React, {useEffect, useState} from 'react';
import AvatarList from './avatar-list';
import Badge from './badge';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showId, setShowId] = useState(false);
  const [name, setName] = useState('');
  const [projectId, setProjectId] = useState('');
  
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center space-x-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center"
        type="button" data-modal-toggle="defaultModal">
        <svg className="block w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
        <div>Создать проект</div>
      </button>
      
      <div className={`${isOpen ? 'fixed' : 'hidden'} flex justify-center items-center bg-black bg-opacity-50 overflow-y-auto overflow-x-hiddenx top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full`}>
        <div className="relative w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-md shadow">
            <div className="flex justify-between items-center py-4 pl-6 pr-4 rounded-t">
              <Badge>Новый проект</Badge>
              <button type="button" onClick={() => setIsOpen(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="defaultModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="px-6">
              <input 
                type="text" 
                className="border-none inline outline-none text-2xl mb-2 font-semibold w-full" 
                placeholder="Название проекта"
                value={name} 
                onInput={(event: any) => setName(event.target.value)}
                onKeyUp={(event: any) => setProjectId(name)}
              />
              <div className={`${name.length ? 'flex' : 'hidden'} gap-2 text-sm font-semibold text-gray-500`}>
                ID
                <input 
                  type="text" 
                  className="border-none inline outline-none text-sm text-indigo-700 font-semibold" 
                  value={projectId}
                  onInput={(event: any) => setProjectId(event.target.value)} 
                />
                <span className="inline-flex items-center p-1 mr-2 text-sm font-semibold text-green-800 bg-green-100 rounded-full">
                  <svg aria-hidden="true" className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clip-rule="evenodd"></path></svg>
                  <span className="sr-only">Icon description</span>
                </span>
              </div>
            </div>
            <div className="p-6 border-b">
              <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Участники</div>
              <AvatarList />
            </div>
            <div className="p-6 space-y-6 border-b">
              <form>
                <div className="flex gap-6 text-sm font-semibold">
                  <div>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-4 h-6">Описание</div>
                    <textarea className="w-full outline-none font-medium" placeholder="Расскажите о своем проекте..." />
                  </div>
                </div>
                <div className="flex gap-6 text-sm font-semibold">
                  <div>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-4 h-6">Теги</div>
                    <span id="badge-dismiss-default" className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded">
                      Веб-сайт
                      <button type="button"
                              className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900"
                              data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                          <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"
                               xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"
                                                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                                        clip-rule="evenodd"></path></svg>
                          <span className="sr-only">Remove badge</span>
                      </button>
                    </span>
                    <span id="badge-dismiss-default" className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded">
                      Разработка
                      <button type="button"
                              className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900"
                              data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                          <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"
                               xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"
                                                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                                        clip-rule="evenodd"></path></svg>
                          <span className="sr-only">Remove badge</span>
                      </button>
                    </span>
                    <span id="badge-dismiss-default" className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded">
                      Разработка
                      <button type="button"
                              className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900"
                              data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                          <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"
                               xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"
                                                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                                        clip-rule="evenodd"></path></svg>
                          <span className="sr-only">Remove badge</span>
                      </button>
                    </span>
                  </div>
                </div>
              </form>
            </div>
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