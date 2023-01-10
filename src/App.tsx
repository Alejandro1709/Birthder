import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import useLockBodyScroll from './hooks/useLockBodyScroll';
import CreateContactPage from './pages/CreateContactPage';

function App() {
  useLockBodyScroll();

  return (
    <main className='md:flex flex-col md:h-screen justify-center items-center bg-slate-100 transition-all'>
      <section className='md:w-[680px] bg-white md:shadow-md md:rounded-md overflow-hidden'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contacts/new' element={<CreateContactPage />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
