import { useState } from 'react';
import type IContact from '../types/contact';
import Filter from './Filter';

type SearchbarProps = {
  contacts: IContact[];
  input: string;
  onContactsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilter: (filter: string) => void;
};

function Searchbar({
  contacts,
  onFilter,
  input,
  onContactsChange,
}: SearchbarProps) {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('All');

  const handleApplyFilter = (e: React.MouseEvent<HTMLLIElement>) => {
    setCurrentFilter(e.currentTarget.innerText);
    onFilter(currentFilter);
    setIsSelectOpen(false);
  };

  return (
    <div className='flex flex-row gap-2 w-full relative'>
      <input
        className='flex-1 p-[6px] bg-indigo-500 rounded-md text-white placeholder-gray-300 outline-none'
        type='text'
        placeholder='Search'
        value={input}
        onChange={(e) => onContactsChange(e)}
      />
      <button
        className='p-[6px] bg-indigo-500 rounded-md text-white hover:bg-indigo-600 transition-all'
        onClick={() => setIsSelectOpen(!isSelectOpen)}
      >
        Filter
      </button>
      {isSelectOpen ? <Filter onFilter={handleApplyFilter} /> : null}
    </div>
  );
}

export default Searchbar;
