import Contacts from '../components/Contacts';
import contacts from '../data/contacts';

function HomePage() {
  return <Contacts contacts={contacts} />;
}

export default HomePage;
