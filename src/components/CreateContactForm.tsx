function CreateContactForm() {
  return (
    <form className='flex flex-col gap-2 mt-2'>
      <div className='flex flex-col gap-1'>
        <label htmlFor='name' className='text-gray-800'>
          Full Name:
        </label>
        <input
          type='text'
          id='name'
          className='p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
          placeholder='John Doe'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='email' className='text-gray-800'>
          Email:
        </label>
        <input
          type='text'
          id='email'
          className='p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
          placeholder='john@example.com'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='phone' className='text-gray-800'>
          Phone:
        </label>
        <input
          type='number'
          id='name'
          className='p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
          placeholder='555-555-555'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='avatar' className='text-gray-800'>
          Avatar:
        </label>
        <input
          type='file'
          id='avatar'
          className='p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='birthday' className='text-gray-800'>
          Birthday:
        </label>
        <input
          type='date'
          id='birthday'
          className='p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='gender' className='text-gray-800'>
          Gender:
        </label>
        <select className='p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'>
          <option defaultChecked>-- Select your gender --</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
      </div>
      <button className='mt-4 p-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600'>
        Create Contact
      </button>
    </form>
  );
}

export default CreateContactForm;
