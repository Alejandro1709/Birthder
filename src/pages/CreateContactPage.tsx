import CreateContactForm from '../components/CreateContactForm';
import useContacts from '../hooks/useContacts';

function CreateContactPage() {
  const { handleAddContact } = useContacts();

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold text-gray-800'>Create Contact</h1>
      <CreateContactForm onContactCreation={handleAddContact} />
    </div>
  );
}

export default CreateContactPage;
