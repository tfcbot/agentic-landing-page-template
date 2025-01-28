import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Benefits from './components/sections/Benefits';
import Timeline from './components/sections/Timeline';
import WhoFor from './components/sections/WhoFor';
import NotFor from './components/sections/NotFor';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';
import Pricing from './components/sections/Pricing';
import PricingCalculator from './components/sections/PricingCalculator';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Timeline />
        <Pricing />
        <PricingCalculator />
        <WhoFor />
        <NotFor />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
