import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import imgImageGeoPeruvian from "../assets/geoperuvian-footer.png";


interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({ currentPage = 'home', onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', page: 'inicio' },
    { label: 'Nosotros', page: 'nosotros' },
    { label: 'Servicios', page: 'servicios' },
    { label: 'Socios Aliados', page: 'socios-aliados' },
    { label: 'Blogs', page: 'blogs' },
    { label: 'Contacto', page: 'contacto' },
  ];

  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C1C1C]/95 backdrop-blur-sm">
      <div aria-hidden="true" className="absolute border-b border-[rgba(255,255,255,0.1)] border-solid inset-x-0 bottom-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-28">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="relative shrink-0 cursor-pointer transition-transform hover:scale-105"
          >
            <div className="h-10 w-auto sm:h-12 md:h-14 flex items-center">
              <img 
                alt="GeoPeruvian" 
                className="h-full w-auto object-contain" 
                src={imgImageGeoPeruvian} 
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-12">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page)}
                className={`font-['Syne',_sans-serif] cursor-pointer leading-[24px] text-[16px] text-nowrap transition-all hover:scale-105 ${
                  currentPage === item.page
                    ? 'text-[#c7482c]'
                    : 'text-[rgba(255,255,255,0.8)] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* CTA Button */}
            <button 
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=51943049976&text=Buenos+dias+Geoperuvian+Group%0D%0ADeseo+mas+informaci%C3%B3n&type=phone_number&app_absent=0', '_blank')}
              className="bg-[#c7482c] h-[36px] px-[16px] py-[8px] rounded-full transition-all hover:bg-[#8B4114] hover:scale-105 active:scale-95"
            >
              <p className="font-['Syne',_sans-serif] cursor-pointer font-medium leading-[20px] text-[14px] text-nowrap text-white whitespace-pre">
                Contactar ahora
              </p>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-left py-2 font-['Syne',_sans-serif] cursor-pointer text-[16px] transition-colors ${
                    currentPage === item.page
                      ? 'text-[#c7482c]'
                      : 'text-[rgba(255,255,255,0.8)] hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=51943049976&text=Buenos+dias+Geoperuvian+Group%0D%0ADeseo+mas+informaci%C3%B3n&type=phone_number&app_absent=0', '_blank')}
                className="bg-[#c7482c] h-[36px] px-[16px] py-[8px] rounded-[6px] w-full transition-all hover:bg-[#8B4114] active:scale-95"
              >
                <p className="font-['Syne',_sans-serif] cursor-pointer font-medium leading-[20px] text-[14px] text-white">
                  Contactar ahora
                </p>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
