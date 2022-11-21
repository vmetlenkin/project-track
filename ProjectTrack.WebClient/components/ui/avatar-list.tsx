import React from 'react';

const AvatarList = () => {
  return (
    <div className="flex -space-x-4">
      <img className="w-10 h-10 rounded-full border-2 border-white"
           src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
      <img className="w-10 h-10 rounded-full border-2 border-white"
           src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="" />
      <img className="w-10 h-10 rounded-full border-2 border-white"
           src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />
      <img className="w-10 h-10 rounded-full border-2 border-white"
           src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="" />
      <div className="inline-flex border-2 border-white cursor-pointer overflow-hidden relative justify-center 
        items-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full"
      >
        <span className="font-medium text-gray-600 dark:text-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default AvatarList;