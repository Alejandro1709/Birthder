import { useState } from 'react';
import type IContact from '../types/contact';

type SearchbarProps = {
  contacts: IContact[];
  onContactsChange: React.Dispatch<React.SetStateAction<IContact[]>>;
};

function Searchbar({ contacts, onContactsChange }: SearchbarProps) {
  const [search, setSearch] = useState<string>('');
  const [filteredContacts, setFilteredContacts] =
    useState<IContact[]>(contacts);

  const handleContactSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredContacts(filtered);
    onContactsChange(filteredContacts);
  };

  return (
    <div className='flex flex-row gap-2 w-full'>
      <input
        className='flex-1 p-[6px] bg-indigo-500 rounded-md text-white placeholder-gray-300 outline-none'
        type='text'
        placeholder='Search'
        value={search}
        onChange={(e) => handleContactSearch(e)}
      />
      <button className='p-[6px] bg-indigo-500 rounded-md text-white hover:bg-indigo-600 transition-all'>
        Filter
      </button>
    </div>
  );
}

export default Searchbar;
