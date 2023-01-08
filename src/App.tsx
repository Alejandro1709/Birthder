import Contacts from './components/Contacts';
import Header from './components/Header';
import useLockBodyScroll from './hooks/useLockBodyScroll';

function App() {
  useLockBodyScroll();

  return (
    <main className='md:flex flex-col md:h-screen justify-center items-center bg-slate-100 transition-all'>
      <section className='h-2/4 md:w-[680px] bg-white md:shadow-md md:rounded-md overflow-hidden'>
        <Header />
        <Contacts />
      </section>
    </main>
  );
}

export default App;
