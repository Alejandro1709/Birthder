import CreateContactForm from '../components/CreateContactForm';
import type IContact from '../types/contact';

type CreateContactPageProps = {
  onContactCreation: (newContact: IContact) => void;
};

function CreateContactPage({ onContactCreation }: CreateContactPageProps) {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold text-gray-800'>Create Contact</h1>
      <CreateContactForm onContactCreation={onContactCreation} />
    </div>
  );
}

export default CreateContactPage;
