import { motion } from 'motion/react';
import svgPaths from '../imports/svg-n4q3es7c41';
import imgBanderaPeru from "figma:asset/25e3aff8ab419057f59e21a5361bcead60a3eba3.png";
import imgBanderaChile from "figma:asset/6d61751136786de8c26ce6c0b0bd7c62bddcdb9a.png";
import imgBanderaArgentina from "figma:asset/87af45450c28bc13efc59b16beea5cee4dbd4177.png";
import { Globe } from 'lucide-react';

interface PartnerCardProps {
  country: string;
  flagImage: string;
  flagOverlay: string;
  companyName: string;
  companyDescription?: string;
  location: string;
  phones: string[];
  email: string;
  onNavigate?: (page: string) => void;
  delay?: number;
}

function PartnerCard({
  country,
  flagImage,
  flagOverlay,
  companyName,
  companyDescription,
  location,
  phones,
  email,
  onNavigate,
  delay = 0
}: PartnerCardProps) {
  const handleContactClick = () => {
    if (onNavigate) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        onNavigate('contact');
      }, 300);
    }
  };

  return (
    <motion.div
      className="bg-[#1C1C1C] border border-white/10 rounded-lg overflow-hidden hover:border-[#C7482C]/50 transition-all hover:shadow-[0_20px_50px_rgba(199,72,44,0.2)] h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Header with Flag Background */}
      <div className="relative h-[120px] sm:h-[137px] overflow-hidden border-b border-white/10">
        {/* Background Flag Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            alt="" 
            className="absolute max-w-none object-cover opacity-20 w-full h-full object-center" 
            src={flagImage} 
          />
          <div className={`absolute inset-0 ${flagOverlay}`} />
        </div>
        
        {/* Country Text */}
        <div className="absolute left-6 top-6 sm:top-12">
          <p className="font-['Montserrat'] text-xl sm:text-2xl text-white leading-8">
            {country}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Company Name with Icon */}
        <div className="flex items-start gap-3 mb-4">
          <div className="relative w-5 h-5 flex-shrink-0 mt-1">
            <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g>
                <path d="M8.33333 10H11.6667" stroke="#C7482C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M8.33333 6.66667H11.6667" stroke="#C7482C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p16bb4600} stroke="#C7482C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p3b103700} stroke="#C7482C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p24196980} stroke="#C7482C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </g>
            </svg>
          </div>
          <div>
            <h4 className="font-['Montserrat'] text-lg sm:text-xl text-white leading-7 font-bold">
              {companyName}
            </h4>
            {companyDescription && (
              <p className="font-['Montserrat'] text-sm text-[rgba(255,255,255,0.6)] leading-5 mt-1">
                {companyDescription}
              </p>
            )}
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3 mb-3">
          <div className="relative w-[18px] h-[18px] flex-shrink-0 mt-0.5">
            <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <g>
                <path d={svgPaths.p625a980} stroke="#C7482C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p18c84c80} stroke="#C7482C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
          <p className="font-['Montserrat'] text-sm text-[rgba(255,255,255,0.7)] leading-5">
            {location}
          </p>
        </div>

        {/* Phone Numbers */}
        <div className="flex items-start gap-3 mb-3">
          <div className="relative w-[18px] h-[18px] flex-shrink-0 mt-0.5">
            <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <g clipPath={`url(#clip0_phone_${country})`}>
                <path d={svgPaths.p3302df00} stroke="#C7482C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
              <defs>
                <clipPath id={`clip0_phone_${country}`}>
                  <rect fill="white" height="18" width="18" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col">
            {phones.map((phone, idx) => (
              <p 
                key={idx} 
                className={`font-['Montserrat'] text-sm sm:text-base leading-6 sm:leading-[27.2px] ${
                  idx === 0 ? 'text-[rgba(255,255,255,0.7)]' : 'text-[rgba(255,255,255,0.6)]'
                }`}
              >
                {phone}
              </p>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3 mb-6">
          <div className="relative w-[18px] h-[18px] flex-shrink-0 mt-0.5">
            <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <g>
                <path d={svgPaths.p97bb7c0} stroke="#C7482C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p1b122e80} stroke="#C7482C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
          <a
            href={`mailto:${email}`}
            className="font-['Montserrat'] text-xs text-[rgba(255,255,255,0.7)] leading-5 hover:text-[#C7482C] transition-colors break-all"
          >
            {email}
          </a>
        </div>

        {/* Contact Button */}
        <motion.button
          onClick={handleContactClick}
          className="bg-[#1c1c1c] border border-[rgba(255,255,255,0.1)] rounded-[6px] h-9 flex items-center justify-center gap-2 text-white hover:bg-[#C7482C]/10 hover:border-[#C7482C] transition-all group mt-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="font-['Montserrat'] text-sm leading-5 font-medium">
            Contactar
          </span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 16 16">
            <g>
              <path d="M3.33333 8H12.6667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p1d405500} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </g>
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}

interface ResponsivePartnersProps {
  onNavigate?: (page: string) => void;
}

export function ResponsivePartners({ onNavigate }: ResponsivePartnersProps = {}) {
  const partners = [
    {
      country: "Perú",
      flagImage: imgBanderaPeru,
      flagOverlay: "bg-[rgba(199,72,44,0.2)]",
      companyName: "Geoperuvian",
      location: "Santiago de Surco – Lima",
      phones: ["(+51-01) 4891892", "(+51) 943049976"],
      email: "contacto.peru@geoperuviangroup.com"
    },
    {
      country: "Chile",
      flagImage: imgBanderaChile,
      flagOverlay: "bg-[rgba(21,93,252,0.2)]",
      companyName: "Grupo GB | CINCO",
      location: "La Reina, Santiago",
      phones: ["(+56-2) 2 209 33 19", "(+56-9) 9 329 35 78"],
      email: "contacto.chile@geoperuviangroup.com"
    },
    {
      country: "Argentina",
      flagImage: imgBanderaArgentina,
      flagOverlay: "bg-[rgba(0,188,255,0.2)]",
      companyName: "Newensa S.A.",
      companyDescription: "Consultoría Especializada",
      location: "Las Heras, Mendoza",
      phones: ["(+54-0261) 4236300", "(+54-9) 2615 51 5666"],
      email: "contacto.argentina@geoperuviangroup.com"
    }
  ];

  return (
    <div className="w-full">
      {/* Grid Container - Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {partners.map((partner, index) => (
          <PartnerCard
            key={partner.country}
            {...partner}
            onNavigate={onNavigate}
            delay={index * 0.15}
          />
        ))}
      </div>

      {/* Regional Presence Section */}
      <motion.div
        className="mt-12 bg-[#1C1C1C] border border-white/10 rounded-lg p-6 sm:p-8 hover:border-[#C7482C]/30 transition-all"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 bg-[#C7482C]/10 border border-[#C7482C]/30 rounded-lg flex items-center justify-center flex-shrink-0">
            <Globe className="w-6 h-6 text-[#C7482C]" />
          </div>
          <div className="flex-1">
            <h3 className="font-['Montserrat'] text-xl sm:text-2xl text-white mb-2">
              Presencia Regional
            </h3>
            <p className="font-['Montserrat'] text-sm sm:text-base text-[rgba(255,255,255,0.7)] leading-relaxed">
              Nuestros socios en Perú, Chile y Argentina nos permiten ofrecer servicios de consultoría especializados en minería, geología y analítica de datos en toda la región de América del Sur.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
