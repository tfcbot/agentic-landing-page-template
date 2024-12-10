import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Headaches from './components/sections/Headaches';
import Benefits from './components/sections/Benefits';
import Timeline from './components/sections/Timeline';
import WhoFor from './components/sections/WhoFor';
import NotFor from './components/sections/NotFor';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Headaches />
        <Benefits />
        <Timeline />
        <WhoFor />
        <NotFor />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
