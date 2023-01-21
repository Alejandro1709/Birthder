import { useState } from 'react';
import useContacts from '../hooks/useContacts';
import Filter from './Filter';

function Searchbar() {
  const { input, handleApplyFilterContacts, handleContactSearch } =
    useContacts();

  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('All');

  const handleApplyFilter = (e: React.MouseEvent<HTMLLIElement>) => {
    setCurrentFilter(e.currentTarget.innerText);
    handleApplyFilterContacts(currentFilter);
    setIsSelectOpen(false);
  };

  return (
    <div className='flex flex-row gap-2 w-full relative'>
      <input
        className='flex-1 p-[6px] bg-indigo-500 rounded-md text-white placeholder-gray-300 outline-none'
        type='text'
        placeholder='Search'
        value={input}
        onChange={(e) => handleContactSearch(e)}
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
