import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Hero, Headaches, Benefits, Timeline, FAQ, CTA } from './components/sections';
import WhoFor from './components/sections/WhoFor';
import NotFor from './components/sections/NotFor';
import BlogSection from './components/sections/BlogSection';
import { defaultContent } from './config/content';

export default function Home() {
  const {
    hero,
    headaches,
    benefits,
    timeline,
    faq,
    cta
  } = defaultContent;

  return (
    <>
      <Header />
      <main>
        <Hero content={hero} />
        <Headaches content={headaches} />
        <Benefits content={benefits} />
        <Timeline content={timeline} />
        <WhoFor />
        <NotFor />
        <BlogSection />
        <FAQ content={faq} />
        <CTA content={cta} />
      </main>
      <Footer />
    </>
  );
}
