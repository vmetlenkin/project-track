import React from 'react';
import Badge from './badge';

const Table = () => {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase border-b">
        <tr>
          <th scope="col" className="py-3 px-6">
            <div className="flex items-center">
              ID задачи
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor"
                     viewBox="0 0 320 512">
                  <path
                    d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/>
                </svg>
              </a>
            </div>
          </th>
          <th scope="col" className="py-3 px-6">
            <div className="flex items-center">
              Заголовок задачи
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor"
                     viewBox="0 0 320 512">
                  <path
                    d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/>
                </svg>
              </a>
            </div>
          </th>
          <th scope="col" className="py-3 px-6">
            <div className="flex items-center">
              Приоритет
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor"
                     viewBox="0 0 320 512">
                  <path
                    d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/>
                </svg>
              </a>
            </div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr className="bg-white border-b hover:bg-gray-50">
          <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
            <span className="text-indigo-700 cursor-pointer font-semibold">MP-30</span>
          </th>
          <td className="py-4 px-6 font-semibold">
            <Badge color="green">
              <span className="font-semibold">О</span>
            </Badge> Create an announcment
          </td>
          <td className="py-4 px-6">
            <span className="text-indigo-700 cursor-pointer font-semibold">Обычная</span>
          </td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50">
          <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
            <span className="text-indigo-700 cursor-pointer font-semibold">MP-40</span>
          </th>
          <td className="py-4 px-6">
            <Badge color="red">
              <span className="font-semibold">К</span>
            </Badge> Сверстать макет сайта
          </td>
          <td className="py-4 px-6">
            <span className="text-indigo-700 cursor-pointer font-semibold">Критическая</span>
          </td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50">
          <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
            <span className="text-indigo-700 cursor-pointer font-semibold">MP-40</span>
          </th>
          <td className="py-4 px-6">
            <Badge color="red">
              <span className="font-semibold">К</span>
            </Badge> Сверстать макет сайта
          </td>
          <td className="py-4 px-6">
            <span className="text-indigo-700 cursor-pointer font-semibold">Критическая</span>
          </td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50">
          <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
            <span className="text-indigo-700 cursor-pointer font-semibold">MP-40</span>
          </th>
          <td className="py-4 px-6">
            <Badge color="red">
              <span className="font-semibold">К</span>
            </Badge> Сверстать макет сайта
          </td>
          <td className="py-4 px-6">
            <span className="text-indigo-700 cursor-pointer font-semibold">Критическая</span>
          </td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50">
          <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
            <span className="text-indigo-700 cursor-pointer font-semibold">MP-40</span>
          </th>
          <td className="py-4 px-6">
            <Badge color="red">
              <span className="font-semibold">К</span>
            </Badge> Сверстать макет сайта
          </td>
          <td className="py-4 px-6">
            <span className="text-indigo-700 cursor-pointer font-semibold">Критическая</span>
          </td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50">
          <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
            <span className="text-indigo-700 cursor-pointer font-semibold">MP-40</span>
          </th>
          <td className="py-4 px-6">
            <Badge color="red">
              <span className="font-semibold">К</span>
            </Badge> Сверстать макет сайта
          </td>
          <td className="py-4 px-6">
            <span className="text-indigo-700 cursor-pointer font-semibold">Критическая</span>
          </td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50">
          <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
            <span className="text-indigo-700 cursor-pointer font-semibold">MP-40</span>
          </th>
          <td className="py-4 px-6">
            <Badge color="red">
              <span className="font-semibold">К</span>
            </Badge> Сверстать макет сайта
          </td>
          <td className="py-4 px-6">
            <span className="text-indigo-700 cursor-pointer font-semibold">Критическая</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;