import { useState } from 'react';
import { shallow } from 'zustand/shallow';
import { useContactsStore } from '../stores/contactsStore';
import type IContact from '../types/contact';

function useContacts() {
  const [input, setInput] = useState('');

  const { initialContacts, setContacts } = useContactsStore(
    (state) => ({
      initialContacts: state.initialContacts,
      setContacts: state.setContacts,
    }),
    shallow
  );

  const handleContactSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    const filtered = initialContacts.filter((contact) =>
      contact.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setContacts(filtered);
  };

  const handleAddContact = (newContact: IContact) => {
    setContacts([...initialContacts, newContact]);
  };

  const handleApplyFilterContacts = (filter: string) => {
    if (filter === 'Name') {
      const filtered = initialContacts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setContacts(filtered);
    } else return;
  };

  return {
    input,
    initialContacts,
    handleContactSearch,
    handleAddContact,
    handleApplyFilterContacts,
  };
}

export default useContacts;
