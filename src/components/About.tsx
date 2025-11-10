import { Target, Eye, Heart, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface AboutProps {
  onNavigate?: (page: string) => void;
}

export function About({ onNavigate }: AboutProps = {}) {
  const values = [
    {
      icon: Target,
      title: 'Misión',
      description:
        'Potenciar a las empresas mineras con insights basados en datos e innovación en IA para maximizar la eficiencia de recursos y crear valor sostenible.',
    },
    {
      icon: Eye,
      title: 'Visión',
      description:
        'Ser líderes globales en inteligencia minera, estableciendo nuevos estándares de precisión, sostenibilidad y excelencia operacional.',
    },
    {
      icon: Heart,
      title: 'Valores',
      description:
        'Innovación, integridad, sostenibilidad, precisión y colaboración impulsan todo lo que hacemos.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-[Saira_SemiCondensed]">
            Transformamos Datos en Valor Estratégico
          </h2>
          <p className="text-base text-white/80 mb-4">
            En <span className="text-[#C7482C]">GEOPERUVIAN</span> transformamos datos geológicos y operativos en valor estratégico. ¿Cómo? 
          </p>
          <p className="text-base text-white/70">
            Integramos la <span className="text-white/90">Estimación de Recursos</span> con la <span className="text-white/90">Optimización Geo-Minero-Metalúrgica</span>, potenciada por IA, para cuantificar y maximizar el valor de su yacimiento desde la exploración hasta la operación, asegurando la mejor toma de decisiones.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#252525] border border-white/10 rounded-lg p-8 hover:border-[#C7482C]/50 transition-colors"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-12 h-12 bg-[#C7482C]/20 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="text-[#C7482C]" size={24} />
                </motion.div>
                <h3 className="font-['Saira_Semi_Condensed'] text-2xl text-white mb-4">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            variant="outline" 
            className="group"
            onClick={() => onNavigate && onNavigate('nosotros')}
          >
            Conoce más sobre nosotros
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
