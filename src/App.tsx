import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import contacts from './data/contacts';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import useLockBodyScroll from './hooks/useLockBodyScroll';
import CreateContactPage from './pages/CreateContactPage';
import type IContact from './types/contact';

function App() {
  const [input, setInput] = useState('');
  const [filteredContacts, setFilteredContacts] =
    useState<IContact[]>(contacts);

  const handleContactSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredContacts(filtered);
  };

  const handleAddContact = (newContact: IContact) => {
    setFilteredContacts((prev) => [...prev, newContact]);
  };

  const handleApplyFilterContacts = (filter: string) => {
    if (filter === 'Name') {
      const filtered = filteredContacts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setFilteredContacts(filtered);
    } else return;
  };

  useLockBodyScroll();

  return (
    <main className='md:flex flex-col md:h-screen justify-center items-center bg-slate-100 transition-all'>
      <section className='md:w-[680px] bg-white md:shadow-md md:rounded-md overflow-hidden'>
        <Header
          initialContacts={filteredContacts}
          input={input}
          onContactsChange={handleContactSearch}
          onFilter={handleApplyFilterContacts}
        />
        <Routes>
          <Route
            path='/'
            element={<HomePage initialContacts={filteredContacts} />}
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
