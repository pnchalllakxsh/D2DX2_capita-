import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyD2DX2 } from './components/WhyD2DX2';
import { Journey } from './components/Journey';
import { Apply } from './components/Apply';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyD2DX2 />
        <Journey />
        <Apply />
      </main>
      <Footer />
    </div>
  );
}