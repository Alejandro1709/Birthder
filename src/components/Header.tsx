import { NavLink } from 'react-router-dom';
import Searchbar from './Searchbar';

function Header() {
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
      <Searchbar />
    </header>
  );
}

export default Header;
