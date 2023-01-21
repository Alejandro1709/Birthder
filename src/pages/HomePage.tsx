import Contacts from '../components/Contacts';
import useContacts from '../hooks/useContacts';

function HomePage() {
  const { initialContacts } = useContacts();

  return <Contacts contacts={initialContacts} />;
}

export default HomePage;
