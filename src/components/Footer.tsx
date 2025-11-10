import svgPaths from '../imports/svg-89342ybl2e';
import imgImageGeoPeruvian from "../assets/geoperuvian-footer.png";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navegacion: [
      { label: 'Inicio', page: 'inicio' },
      { label: 'Nosotros', page: 'nosotros' },
      { label: 'Servicios', page: 'servicios' },
      { label: 'Blogs', page: 'blogs' },
      { label: 'Socios Aliados', page: 'socios-aliados' },
    ],
    contacto: [
      { label: 'Contacto', page: 'contacto' },
      { label: 'Soporte', page: 'soporte' },
    ],
  };

  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-8 mt-4">
          {/* Brand Column - Full width on mobile (col-span-2), takes specific space on desktop */}
          <div className="col-span-2 lg:col-span-5 flex flex-col items-center lg:items-start">
            <button 
              onClick={() => handleNavClick('inicio')}
              className="mb-4 cursor-pointer transition-transform hover:scale-105 inline-block"
            >
              <img 
                src={imgImageGeoPeruvian} 
                alt="GeoPeruvian" 
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </button>
            <p className="text-white/60 mb-4 max-w-sm leading-6 text-center lg:text-left">
              Transformando datos geológicos en decisiones estratégicas mediante IA y analítica avanzada.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 justify-center lg:justify-start w-full">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/geoperuvian" target="_blank"
                className="w-10 h-10 bg-white/5 hover:bg-[#C7482C]/20 border border-white/10 rounded-full flex items-center justify-center transition-all group"
                aria-label="LinkedIn"
              >
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
                  <g >
                    <path 
                      d={svgPaths.p204bd7c0} 
                      stroke="white" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeOpacity="0.7" 
                      strokeWidth="1.5"
                      className="group-hover:stroke-white transition-all"
                    />
                    <path 
                      d={svgPaths.pad25e80} 
                      stroke="white" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeOpacity="0.7" 
                      strokeWidth="1.5"
                      className="group-hover:stroke-white transition-all"
                    />
                    <path 
                      d={svgPaths.p127a4d00} 
                      stroke="white" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeOpacity="0.7" 
                      strokeWidth="1.5"
                      className="group-hover:stroke-white transition-all"
                    />
                  </g>
                </svg>
              </a>


              {/* Email */}
              <a
                href="mailto:contacto@geoperuviangroup.com"
                target="_blank"
                className="w-10 h-10 bg-white/5 hover:bg-[#C7482C]/20 border border-white/10 rounded-full flex items-center justify-center transition-all group"
                aria-label="Email"
              >
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
                  <g>
                    <path 
                      d={svgPaths.p97bb7c0} 
                      stroke="white" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeOpacity="0.7" 
                      strokeWidth="1.5"
                      className="group-hover:stroke-white transition-all"
                    />
                    <path 
                      d={svgPaths.p1b122e80} 
                      stroke="white" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeOpacity="0.7" 
                      strokeWidth="1.5"
                      className="group-hover:stroke-white transition-all"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>

          {/* Navegación Column - 1 column on mobile, positioned on desktop */}
          <div className="col-span-1 lg:col-span-3 lg:col-start-7">
            <h4 className="text-white mb-3">Navegación</h4>
            <ul className="space-y-2">
              {footerLinks.navegacion.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleNavClick(link.page)} 
                    className="text-white/60 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto Column - 1 column on mobile, positioned on desktop */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-white mb-3">Contacto</h4>
            <ul className="space-y-2">
              {footerLinks.contacto.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleNavClick(link.page)} 
                    className="text-white/60 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/60 text-sm">
            © {currentYear} GeoPeruvian. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
