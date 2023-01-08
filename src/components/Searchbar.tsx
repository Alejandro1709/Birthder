function Searchbar() {
  return (
    <div className='flex flex-row gap-2 w-full'>
      <input
        className='flex-1 p-[6px] bg-indigo-500 rounded-md text-white placeholder-gray-300 outline-none'
        type='text'
        placeholder='Search'
      />
      <button className='p-[6px] bg-indigo-500 rounded-md text-white hover:bg-indigo-600 transition-all'>
        Filter
      </button>
    </div>
  );
}

export default Searchbar;
