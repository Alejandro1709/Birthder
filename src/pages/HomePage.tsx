import { useEffect } from 'react';
import Contacts from '../components/Contacts';
import useContacts from '../hooks/useContacts';
import { getContacts } from '../services/contacts';

function HomePage() {
  const { initialContacts, setContacts } = useContacts();

  useEffect(() => {
    getContacts().then((contacts) => setContacts(contacts));
  }, []);

  return <Contacts contacts={initialContacts} />;
}

export default HomePage;
