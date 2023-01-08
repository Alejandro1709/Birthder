function Contact() {
  return (
    <article className='flex flex-row gap-4 p-4 bg-white last:mb-2 last:border-none border-b cursor-pointer'>
      <div className='flex flex-row items-center justify-between w-full'>
        <div className='flex flex-row items-center gap-4'>
          <div className='h-12 w-12 bg-gray-400 rounded overflow-hidden'>
            <img src='https://i.pravatar.cc/300' alt='avatar' />
          </div>
          <div className='flex flex-col gap-0.5'>
            <h2 className='text-lg font-bold'>Jason Abraham Second</h2>
            <p>25 days left until his birthday</p>
          </div>
        </div>
        <button className='p-2 bg-indigo-500 rounded-md text-white hover:bg-indigo-600 transition-all'>
          Saludate
        </button>
      </div>
    </article>
  );
}

export default Contact;
