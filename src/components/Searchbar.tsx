import { useRef, useState } from 'react';
import type IContact from '../types/contact';

type SearchbarProps = {
  contacts: IContact[];
  onContactsChange: React.Dispatch<React.SetStateAction<IContact[]>>;
};

function Searchbar({ contacts, onContactsChange }: SearchbarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [filteredContacts, setFilteredContacts] =
    useState<IContact[]>(contacts);

  console.log('I rendered');

  const handleContactSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!inputRef.current) return;

    inputRef.current.value = e.target.value;

    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    console.log(filtered);

    setFilteredContacts(filtered);
    onContactsChange(filtered);
  };

  return (
    <div className='flex flex-row gap-2 w-full'>
      <input
        className='flex-1 p-[6px] bg-indigo-500 rounded-md text-white placeholder-gray-300 outline-none'
        type='text'
        placeholder='Search'
        value={inputRef.current?.value}
        onChange={(e) => handleContactSearch(e)}
        ref={inputRef}
      />
      <button className='p-[6px] bg-indigo-500 rounded-md text-white hover:bg-indigo-600 transition-all'>
        Filter
      </button>
    </div>
  );
}

export default Searchbar;
