import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Prices from './components/Prices';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="font-sans antialiased bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Prices />
        <Team />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
