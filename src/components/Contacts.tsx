import { useEffect } from 'react';
import useContacts from '../hooks/useContacts';
import Contact from './Contact';
import { getContacts } from '../services/contacts';

function Contacts() {
  const { initialContacts, setContacts } = useContacts();

  useEffect(() => {
    getContacts().then((contacts) => setContacts(contacts));
  }, []);

  return (
    <div className='flex flex-col h-[570px] overflow-scroll'>
      {initialContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default Contacts;
