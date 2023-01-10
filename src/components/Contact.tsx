import type IContact from '../types/contact';
import { countdown } from '../utils/date';

type Props = {
  contact: IContact;
};

function Contact({ contact }: Props) {
  const daysLeft = countdown(contact.birthday);

  const pronouns = contact.gender === 'Male' ? 'his' : 'her';

  return (
    <article className='flex flex-row gap-4 p-4 bg-white last:mb-2 last:border-none border-b cursor-pointer'>
      <div className='flex flex-row items-center justify-between w-full'>
        <div className='flex flex-row items-center gap-4'>
          <div className='h-12 w-12 bg-gray-400 rounded overflow-hidden'>
            <img src={contact.avatar} alt='avatar' />
          </div>
          <div className='flex flex-col gap-0.5'>
            <h2 className='text-lg font-bold'>{contact.name}</h2>
            {daysLeft !== 0 ? (
              <p>
                {daysLeft} {daysLeft <= 1 ? 'day' : 'days'} left until{' '}
                <span>{pronouns} birthday</span>
              </p>
            ) : (
              <p>Happy Birthday!!!</p>
            )}
          </div>
        </div>
        {daysLeft === 0 ? (
          <button className='p-2 bg-indigo-500 rounded-md text-white hover:bg-indigo-600 transition-all'>
            Congratulate
          </button>
        ) : (
          <button className='p-2 bg-indigo-500 rounded-md text-white hover:bg-indigo-600 transition-all'>
            Remind Me
          </button>
        )}
      </div>
    </article>
  );
}

export default Contact;
