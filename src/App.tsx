import Header from './components/Header';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Admision from './components/Admision';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main style={{ marginTop: '0px' }}>
        <Hero />
        <Nosotros />
        <Admision />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;
