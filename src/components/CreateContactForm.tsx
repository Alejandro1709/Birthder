import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type IContact from '../types/contact';

type CreateContactFormProps = {
  onContactCreation: (newContact: IContact) => void;
};

function CreateContactForm({ onContactCreation }: CreateContactFormProps) {
  const [data, setData] = useState<IContact>({
    name: '',
    email: '',
    phone: '',
    gender: '',
    birthday: '',
  });

  const router = useNavigate();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newContact: IContact = {
      id: Math.floor(Math.random() * 1000000),
      name: data.name,
      email: data.email,
      phone: data.phone,
      birthday: data.birthday,
      gender: data.gender,
    };

    onContactCreation(newContact);
    router('/');
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
