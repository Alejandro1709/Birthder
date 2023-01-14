import React from 'react';
import { NavLink } from 'react-router-dom';
import type IContact from '../types/contact';
import Searchbar from './Searchbar';

type HeaderProps = {
  initialContacts: IContact[];
  input: string;
  onContactsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Header({ initialContacts, input, onContactsChange }: HeaderProps) {
  return (
    <header className='flex flex-col gap-4 p-4 bg-indigo-400 select-none'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='flex-1 text-2xl text-center text-white uppercase font-semibold'>
          <NavLink to='/'>Birthder</NavLink>
        </h1>
        <NavLink
          to='/contacts/new'
          className='p-[6px] bg-indigo-500 rounded-md text-white hover:bg-indigo-600 transition-all'
        >
          Add
        </NavLink>
      </div>
      <Searchbar
        contacts={initialContacts}
        input={input}
        onContactsChange={onContactsChange}
      />
    </header>
  );
}

export default Header;
