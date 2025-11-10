import { 
  Database, 
  Compass, 
  Layers, 
  Settings, 
  Factory, 
  Cpu, 
  TrendingUp, 
  FileSearch, 
  GraduationCap, 
  AlertTriangle,
  ArrowRight 
} from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Cpu,
      number: '01',
      title: 'Gestión de Datos e IA para Optimización Minera',
      description: 'Gestión integral de datos (muestreo, QA/QC, BI), machine learning, big data, automatización, computer vision y optimización de procesos con metodologías Lean-Six Sigma.',
    },
    {
      icon: Compass,
      number: '02',
      title: 'Exploración Geológica y Estimación de Recursos',
      description: 'Exploración greenfield/brownfield, generación de targets, mapeo geológico avanzado, geologging digital, modelamiento 3D, geoestadística y certificación de recursos (JORC, NI 43-101).',
    },
    {
      icon: Settings,
      number: '03',
      title: 'Planeamiento Minero y Optimización Geometalúrgica',
      description: 'Diseño minero estratégico, geotecnia, ore control, optimización mine-to-mill, modelamiento geometalúrgico y maximización de recuperación metalúrgica.',
    },
    {
      icon: FileSearch,
      number: '04',
      title: 'Evaluación Económica y Gestión Estratégica de Riesgos',
      description: 'Due diligence, estudios de viabilidad (PEA, PFS, FS), valorización de activos, gestión de riesgos, análisis económico y transformación organizacional.',
    },
    {
      icon: GraduationCap,
      number: '05',
      title: 'Capacitación y Soporte Técnico Especializado',
      description: 'Programas de desarrollo directivo, operacional, SST y herramientas técnicas (Python, IA) para potenciar las capacidades de su equipo.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-[Saira_SemiCondensed]">
            Soluciones Especializadas Potenciadas por IA
          </h2>
          <p className="text-lg text-white/70">
            5 líneas de servicio integradas que cubren todo el ciclo de vida de proyectos mineros, combinando estimación de recursos con optimización geo-minero-metalúrgica potenciada por IA para maximizar el valor de su yacimiento.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-[#252525] border border-white/10 rounded-xl p-8 hover:border-[#C7482C] transition-all cursor-pointer relative overflow-hidden"
                onClick={() => onNavigate('servicios')}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                {/* Number Background */}
                <motion.div 
                  className="absolute top-4 right-4 text-6xl text-white/5 font-bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  {service.number}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="w-14 h-14 bg-[#C7482C]/20 rounded-lg flex items-center justify-center group-hover:bg-[#C7482C]/30 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-[#C7482C]" size={28} />
                    </motion.div>
                    <span className="text-2xl text-[#C7482C]/70">{service.number}</span>
                  </div>
                  
                  <h3 className="text-xl text-white mb-3 min-h-[3.5rem]">{service.title}</h3>
                  <p className="text-white/70 mb-6 text-sm">{service.description}</p>
                  
                  <button onClick={() => onNavigate('servicios')} className="text-[#C7482C] hover:text-[#C7482C]/80 flex items-center gap-2 group/btn text-sm">
                    Ver detalles
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-[#C7482C]/10 to-[#8B4114]/10 border border-[#C7482C]/30 rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl text-white mb-4 font-[Saira_SemiCondensed]">
            ¿Necesitas una solución específica?
          </h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Cada proyecto minero es único. Nuestro equipo multidisciplinario diseña soluciones personalizadas adaptadas a tus desafíos específicos.
          </p>
          <Button 
            size="lg" 
            onClick={() => onNavigate('servicios')}
          >
            Explora todos los servicios
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
