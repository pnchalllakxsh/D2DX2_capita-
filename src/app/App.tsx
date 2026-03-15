import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyD2DX2 } from './components/WhyD2DX2';
import { Journey } from './components/Journey';
import { Apply } from './components/Apply';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { ScrollToTop } from './components/ScrollToTop';
import { SectionTransition } from './components/SectionTransition';
import { SmoothScroll } from './components/SmoothScroll';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <SmoothScroll />
        <Navbar />
        <main>
          <Hero />
          <SectionTransition>
            <About />
          </SectionTransition>
          <SectionTransition delay={0.04}>
            <Services />
          </SectionTransition>
          <SectionTransition delay={0.06}>
            <WhyD2DX2 />
          </SectionTransition>
          <Journey />
          <SectionTransition delay={0.1}>
            <Apply />
          </SectionTransition>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
