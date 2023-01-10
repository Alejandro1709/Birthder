import { useState } from 'react';

function CreateContactForm() {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    avatar: '',
    gender: '',
    birthday: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(data);
  };

  return (
    <form className='flex flex-col gap-2 mt-2' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-1'>
        <label htmlFor='name' className='text-gray-800'>
          Full Name:
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
          placeholder='John Doe'
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='email' className='text-gray-800'>
          Email:
        </label>
        <input
          type='text'
          name='email'
          id='email'
          className='p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
          placeholder='john@example.com'
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='phone' className='text-gray-800'>
          Phone:
        </label>
        <input
          type='text'
          name='phone'
          id='name'
          className='p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
          placeholder='555-555-555'
          value={data.phone}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='avatar' className='text-gray-800'>
          Avatar:
        </label>
        <input
          type='file'
          name='avatar'
          id='avatar'
          className='p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
          value={data.avatar}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='birthday' className='text-gray-800'>
          Birthday:
        </label>
        <input
          type='date'
          name='birthday'
          id='birthday'
          className='p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
          value={data.birthday}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='gender' className='text-gray-800'>
          Gender:
        </label>
        <select
          className='p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
          name='gender'
          value={data.gender}
          onChange={handleChange}
        >
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
