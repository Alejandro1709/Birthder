import React from 'react';

type FilterProps = {
  onFilter: (e: React.MouseEvent<HTMLLIElement>) => void;
};

function Filter({ onFilter }: FilterProps) {
  return (
    <div className='p-[6px] absolute right-0 top-12 w-[200px] bg-indigo-500 rounded-md text-white shadow-lg'>
      <ul>
        <li
          className='p-[2px] hover:bg-indigo-600 transition-all rounded cursor-pointer'
          onClick={onFilter}
        >
          All
        </li>
        <li
          className='p-[2px] hover:bg-indigo-600 transition-all rounded cursor-pointer'
          onClick={onFilter}
        >
          Name
        </li>
        <li
          className='p-[2px] hover:bg-indigo-600 transition-all rounded cursor-pointer'
          onClick={onFilter}
        >
          Genre
        </li>
        <li
          className='p-[2px] hover:bg-indigo-600 transition-all rounded cursor-pointer'
          onClick={onFilter}
        >
          Birthdate
        </li>
      </ul>
    </div>
  );
}

export default Filter;
