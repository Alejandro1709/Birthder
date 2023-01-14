import { useRef, useState } from 'react';
import type IContact from '../types/contact';

type SearchbarProps = {
  contacts: IContact[];
  input: string;
  onContactsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Searchbar({ contacts, input, onContactsChange }: SearchbarProps) {
  return (
    <div className='flex flex-row gap-2 w-full'>
      <input
        className='flex-1 p-[6px] bg-indigo-500 rounded-md text-white placeholder-gray-300 outline-none'
        type='text'
        placeholder='Search'
        value={input}
        onChange={(e) => onContactsChange(e)}
      />
      <button className='p-[6px] bg-indigo-500 rounded-md text-white hover:bg-indigo-600 transition-all'>
        Filter
      </button>
    </div>
  );
}

export default Searchbar;
