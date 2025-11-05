import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import heroImage from 'figma:asset/c4a371629a793ebac9126a95f52d9f05591f75a9.png';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps = {}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={heroImage}
            alt="Mining technology with drones and digital analytics"
            className="w-full h-full object-cover object-center scale-105 sm:scale-110"
            style={{ 
              minWidth: '100%',
              minHeight: '100%'
            }}
          />
          {/* Primary color overlay */}
          <div className="absolute inset-0 bg-[#C7482C]/60"></div>
          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 w-full py-32 mt-20 sm:mt-24 md:mt-28"
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Slogan */}
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="font-['Saira_Semi_Condensed'] text-base md:text-lg text-white tracking-wide uppercase border-2 border-white/80 px-6 py-3 rounded-full bg-black/40 backdrop-blur-sm shadow-lg">
                De los Datos al Valor del Yacimiento
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="font-['Saira_Semi_Condensed'] text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Estimación de Recursos y Optimización Geo-Minero-Metalúrgica Potenciada por IA
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="font-['Montserrat'] text-lg md:text-xl text-white/90 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Consultoría especializada que transforma datos geológicos en valor estratégico para la industria minera moderna.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="group"
                onClick={() => onNavigate && onNavigate('services')}
              >
                Explora nuestras soluciones
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2">
          <motion.div 
            className="w-1 h-3 bg-white/60 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
