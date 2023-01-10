import type IContact from '../types/contact';
import Contact from './Contact';

type Props = {
  contacts: IContact[];
};

function Contacts({ contacts }: Props) {
  return (
    <div className='flex flex-col h-full overflow-scroll'>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default Contacts;
