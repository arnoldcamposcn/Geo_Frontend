import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Partners } from '../components/Partners';
import { Contact } from '../components/Contact';

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps = {}) {
  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      // Fallback navigation
      const path = page === 'home' ? '/' : `/${page}`;
      window.history.pushState(null, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] pt-20 overflow-x-hidden w-full">
      <Hero onNavigate={handleNavigate} />
      <About onNavigate={handleNavigate} />
      <Services onNavigate={handleNavigate} />
      <Partners onNavigate={handleNavigate} />
      <Contact />
    </div>
  );
}
