import { motion } from 'motion/react';
import svgPaths from '../imports/svg-n4q3es7c41';
import imgBanderaNacionalDeTelaDePeru1 from "figma:asset/25e3aff8ab419057f59e21a5361bcead60a3eba3.png";

export function PeruPartnerCard() {
  return (
    <motion.div
      className="bg-[#1C1C1C] border border-white/10 rounded-lg overflow-hidden hover:border-[#C7482C]/50 transition-all"
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      {/* Header with Peru Flag Background */}
      <div className="relative h-[137px] overflow-hidden border-b border-white/10">
        {/* Background Flag Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            alt="" 
            className="absolute max-w-none object-cover opacity-20 w-full h-full object-center" 
            src={imgBanderaNacionalDeTelaDePeru1} 
          />
          <div className="absolute bg-[rgba(199,72,44,0.2)] inset-0" />
        </div>
        
        {/* Peru Text */}
        <div className="absolute left-[24px] top-[24px]">
          <p className="font-['Montserrat'] text-[24px] text-white leading-[32px]">
            Perú
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col">
        {/* Company Name with Icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="relative w-5 h-5 flex-shrink-0">
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
          <h4 className="font-['Montserrat'] text-[20px] text-white leading-[28px] font-bold">
            Geoperuvian
          </h4>
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
          <p className="font-['Montserrat'] text-[14px] text-[rgba(255,255,255,0.7)] leading-[20px]">
            Santiago de Surco – Lima
          </p>
        </div>

        {/* Phone Numbers */}
        <div className="flex items-start gap-3 mb-3">
          <div className="relative w-[18px] h-[18px] flex-shrink-0 mt-0.5">
            <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <g clipPath="url(#clip0_24_2472)">
                <path d={svgPaths.p3302df00} stroke="#C7482C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
              <defs>
                <clipPath id="clip0_24_2472">
                  <rect fill="white" height="18" width="18" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <p className="font-['Montserrat'] text-[16px] text-[rgba(255,255,255,0.7)] leading-[27.2px]">
              (+51-01) 4891892
            </p>
            <p className="font-['Montserrat'] text-[16px] text-[rgba(255,255,255,0.6)] leading-[27.2px]">
              (+51) 943049976
            </p>
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
            href="mailto:contacto.peru@geoperuviangroup.com"
            className="font-['Montserrat'] text-[14px] text-[rgba(255,255,255,0.7)] leading-[20px] hover:text-[#C7482C] transition-colors break-all"
          >
            contacto.peru@geoperuviangroup.com
          </a>
        </div>

        {/* Contact Button */}
        <motion.a
          href="mailto:contacto.peru@geoperuviangroup.com"
          className="bg-[#1c1c1c] border border-[rgba(255,255,255,0.1)] rounded-[6px] h-[36px] flex items-center justify-center gap-2 text-white hover:bg-[#C7482C]/10 hover:border-[#C7482C] transition-all group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="font-['Montserrat'] text-[14px] leading-[20px]">
            Contactar
          </span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 16 16">
            <g>
              <path d="M3.33333 8H12.6667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p1d405500} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </g>
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}
