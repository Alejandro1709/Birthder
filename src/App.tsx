import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useContactsStore } from './stores/contactsStore';
import contacts from './data/contacts';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import useLockBodyScroll from './hooks/useLockBodyScroll';
import CreateContactPage from './pages/CreateContactPage';
import type IContact from './types/contact';

function App() {
  const [input, setInput] = useState('');

  const state = useContactsStore();

  const handleContactSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    state.setContacts(filtered);
  };

  const handleAddContact = (newContact: IContact) => {
    state.setContacts([...state.initialContacts, newContact]);
  };

  const handleApplyFilterContacts = (filter: string) => {
    if (filter === 'Name') {
      const filtered = state.initialContacts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      state.setContacts(filtered);
    } else return;
  };

  useLockBodyScroll();

  return (
    <main className='md:flex flex-col md:h-screen justify-center items-center bg-slate-100 transition-all'>
      <section className='md:w-[680px] bg-white md:shadow-md md:rounded-md overflow-hidden'>
        <Header
          initialContacts={state.initialContacts}
          input={input}
          onContactsChange={handleContactSearch}
          onFilter={handleApplyFilterContacts}
        />
        <Routes>
          <Route
            path='/'
            element={<HomePage initialContacts={state.initialContacts} />}
          />
          <Route
            path='/contacts/new'
            element={<CreateContactPage onContactCreation={handleAddContact} />}
          />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
