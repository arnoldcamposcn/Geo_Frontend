import { MapPin, Phone, Mail, Building2, Globe, Users, Handshake, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import heroImage from 'figma:asset/8ed2577369f8334279d6f4fc4713b62455562f7a.png';
import peruImage from 'figma:asset/882a30ffe9a08f7732131b6ffab68f4da923f50a.png';
import chileImage from 'figma:asset/6a815f479f777e4d824c80ad42fe0d84c7ce595e.png';
import argentinaImage from 'figma:asset/1bd1e3faa9264ee4305c421a827775c26abbbb1a.png';

interface PartnersPageProps {
  onNavigate?: (page: string) => void;
}

export function PartnersPage({ onNavigate }: PartnersPageProps = {}) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const partners = [
    {
      country: 'Perú',
      flag: '🇵🇪',
      company: 'Geoperuvian',
      description: 'Sede principal y centro de operaciones para toda la región andina.',
      location: 'Santiago de Surco – Lima',
      phone: '(+51-01) 4891892',
      mobile: '(+51) 943049976',
      email: 'contacto.peru@geoperuviangroup.com',
      image: peruImage,
      services: [
        'Consultoría Geológica',
        'Gestión de Datos',
        'Inteligencia Artificial Aplicada',
        'Capacitación Técnica',
      ],
    },
    {
      country: 'Chile',
      flag: '🇨🇱',
      company: 'Grupo GB | CINCO',
      description: 'Socio estratégico especializado en innovación tecnológica y servicios de ingeniería.',
      location: 'La Reina, Santiago',
      phone: '(+56-2) 2 209 33 19',
      mobile: '(+56-9) 9 329 35 78',
      email: 'contacto.chile@geoperuviangroup.com',
      image: chileImage,
      services: [
        'Ingeniería de Procesos',
        'Optimización de Recursos',
        'Análisis Geoquímico',
        'Gestión de Proyectos',
      ],
    },
    {
      country: 'Argentina',
      flag: '🇦🇷',
      company: 'Newensa S.A.',
      subtitle: 'Consultoría Especializada',
      description: 'Firma consultora con amplia experiencia en proyectos mineros de la región cuyana.',
      location: 'Las Heras, Mendoza',
      phone: '(+54-0261) 4236300',
      mobile: '(+54-9) 2615 51 5666',
      email: 'contacto.argentina@geoperuviangroup.com',
      image: argentinaImage,
      services: [
        'Estudios de Factibilidad',
        'Evaluación de Recursos',
        'Asesoría Regulatoria',
        'Gestión Ambiental',
      ],
    },
  ];

  const benefits = [
    {
      icon: Handshake,
      title: 'Colaboración Estratégica',
      description: 'Alianzas con líderes regionales que comparten nuestra visión de excelencia e innovación.',
    },
    {
      icon: Globe,
      title: 'Cobertura Regional',
      description: 'Presencia en mercados clave de Latinoamérica con conocimiento local profundo.',
    },
    {
      icon: Users,
      title: 'Experiencia Compartida',
      description: 'Intercambio continuo de conocimientos y mejores prácticas entre países.',
    },
    {
      icon: TrendingUp,
      title: 'Crecimiento Conjunto',
      description: 'Desarrollo de capacidades técnicas y expansión de servicios en toda la red.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1C] pt-20 overflow-x-hidden w-full">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden w-full">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={heroImage}
              alt="Alianzas estratégicas"
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

        <motion.div 
          className="relative z-10 w-full py-32 mt-20 sm:mt-24 md:mt-28"
          style={{ opacity }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full box-border">
            <div className="max-w-4xl w-full">
              <motion.h1 
                className="font-['Saira_Semi_Condensed'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Socios Aliados
              </motion.h1>
              
              <motion.p 
                className="font-['Montserrat'] text-lg sm:text-xl md:text-2xl text-white/90 mb-12 leading-relaxed break-words"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Soluciones integrales innovadoras para la industria minera a través de alianzas estratégicas con compañías líderes en Latinoamérica.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  size="lg" 
                  className="group"
                  onClick={() => onNavigate && onNavigate('contact')}
                >
                  Únete a nuestra red
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

      {/* Mission Statement */}
      <section className="py-24 bg-[#252525] overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full box-border">
          <motion.div 
            className="max-w-3xl mx-auto text-center w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-6">
              Red de Colaboración Regional
            </h2>
            <p className="text-base sm:text-lg text-white/70 break-words">
              Establecemos alianzas estratégicas con compañías líderes a nivel regional para fomentar la innovación a través del intercambio de experiencias, conocimientos técnicos y mejores prácticas en la industria minera.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#1C1C1C] overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full box-border">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-[#252525] border border-white/10 rounded-lg p-6 hover:border-[#C7482C]/50 transition-colors w-full max-w-full min-w-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 bg-[#C7482C]/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-[#C7482C]" size={28} />
                  </div>
                  <h3 className="text-lg sm:text-xl text-white mb-3">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-white/70 break-words">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Detail */}
      <section className="py-24 bg-[#252525] overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full box-border">
          <motion.div 
            className="text-center mb-16 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Nuestros Socios</h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto break-words">
              Presencia estratégica en tres países clave de Latinoamérica
            </p>
          </motion.div>

          <div className="space-y-12 w-full">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-[#1C1C1C] border border-white/10 rounded-lg overflow-hidden hover:border-[#C7482C]/50 transition-colors w-full max-w-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="grid lg:grid-cols-2 gap-0 w-full">
                  {/* Image */}
                  <div className={`relative h-80 lg:h-auto w-full ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <ImageWithFallback
                      src={partner.image}
                      alt={`${partner.country} - ${partner.company}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#C7482C]/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-8 left-8">
                      <span className="mb-2 block w-16 h-12">
                        {partner.country === 'Perú' ? (
                          <svg viewBox="0 0 900 600" className="w-full h-full rounded shadow-lg">
                            <rect fill="#D91023" x="0" y="0" width="900" height="600"/>
                            <rect fill="#FFFFFF" x="300" y="0" width="300" height="600"/>
                          </svg>
                        ) : partner.country === 'Chile' ? (
                          <svg viewBox="0 0 900 600" className="w-full h-full rounded shadow-lg">
                            <rect fill="#FFFFFF" x="0" y="0" width="900" height="300"/>
                            <rect fill="#D52B1E" x="0" y="300" width="900" height="300"/>
                            <rect fill="#0039A6" x="0" y="0" width="300" height="300"/>
                            <path fill="#FFFFFF" d="M150 80 L165 130 L220 130 L175 165 L190 215 L150 180 L110 215 L125 165 L80 130 L135 130 Z"/>
                          </svg>
                        ) : partner.country === 'Argentina' ? (
                          <svg viewBox="0 0 900 600" className="w-full h-full rounded shadow-lg">
                            <rect fill="#74ACDF" x="0" y="0" width="900" height="200"/>
                            <rect fill="#FFFFFF" x="0" y="200" width="900" height="200"/>
                            <rect fill="#74ACDF" x="0" y="400" width="900" height="200"/>
                            <g transform="translate(450, 300)">
                              <circle fill="#F6B40E" r="60"/>
                              <g fill="#8D5524">
                                {[0,1,2,3,4,5,6,7].map(i => (
                                  <path key={i} d="M0,-50 L3,-20 L-3,-20 Z" transform={`rotate(${i * 45})`}/>
                                ))}
                              </g>
                              <circle fill="#F6B40E" r="25"/>
                            </g>
                          </svg>
                        ) : (
                          <span className="text-6xl">{partner.flag}</span>
                        )}
                      </span>
                      <h3 className="text-2xl sm:text-3xl text-white">{partner.country}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 lg:p-12 w-full min-w-0">
                    <div className="flex items-start gap-3 mb-4">
                      <Building2 className="text-[#C7482C] flex-shrink-0 mt-1" size={24} />
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xl sm:text-2xl text-white mb-1 break-words">{partner.company}</h4>
                        {partner.subtitle && (
                          <p className="text-sm sm:text-base text-white/60 break-words">{partner.subtitle}</p>
                        )}
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-white/70 mb-6 sm:mb-8 break-words">{partner.description}</p>

                    <div className="space-y-4 mb-6 sm:mb-8">
                      <div className="flex items-start gap-3 text-white/70">
                        <MapPin className="text-[#C7482C] flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-sm sm:text-base break-words">{partner.location}</span>
                      </div>

                      <div className="flex items-start gap-3 text-white/70">
                        <Phone className="text-[#C7482C] flex-shrink-0 mt-0.5" size={20} />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm sm:text-base break-words">{partner.phone}</p>
                          <p className="text-white/60 text-xs sm:text-sm break-words">{partner.mobile}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 text-white/70">
                        <Mail className="text-[#C7482C] flex-shrink-0 mt-0.5" size={20} />
                        <a
                          href={`mailto:${partner.email}`}
                          className="hover:text-[#C7482C] transition-colors text-sm sm:text-base break-all"
                        >
                          {partner.email}
                        </a>
                      </div>
                    </div>

                    <div className="bg-[#252525] border border-white/10 rounded-lg p-4 sm:p-6 mb-6 w-full">
                      <h5 className="text-base sm:text-lg text-white mb-4">Servicios Especializados</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {partner.services.map((service, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-[#C7482C] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm text-white/70 break-words">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="group" asChild>
                      <a href={`mailto:${partner.email}`}>
                        Contactar
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1C1C1C] overflow-x-hidden w-full">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full box-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-6">
            ¿Interesado en Colaborar?
          </h2>
          <p className="text-base sm:text-lg text-white/70 mb-8 max-w-2xl mx-auto break-words">
            Estamos abiertos a nuevas alianzas estratégicas que fortalezcan nuestra red y amplíen nuestras capacidades.
          </p>
          <Button size="lg" className="group" asChild>
            <a href="#contact">
              Contáctanos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
