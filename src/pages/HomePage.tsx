import Contacts from '../components/Contacts';
import type IContact from '../types/contact';

type HomePageProps = {
  initialContacts: IContact[];
};

function HomePage({ initialContacts }: HomePageProps) {
  return <Contacts contacts={initialContacts} />;
}

export default HomePage;
