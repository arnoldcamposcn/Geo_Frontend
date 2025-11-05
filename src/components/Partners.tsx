import { ResponsivePartners } from './ResponsivePartners';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface PartnersProps {
  onNavigate?: (page: string) => void;
}

export function Partners({ onNavigate }: PartnersProps = {}) {
  return (
    <section id="partners" className="py-24 bg-[#252525] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-[Saira_SemiCondensed]">
            Socios Aliados
          </h2>
          <p className="text-lg text-white/70">
            Establecemos alianzas estratégicas con compañías líderes a nivel mundial para fomentar la innovación a través del intercambio de experiencias y conocimientos.
          </p>
        </motion.div>

        {/* Partners Content */}
        <ResponsivePartners onNavigate={onNavigate} />

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            variant="outline" 
            className="group"
            onClick={() => onNavigate && onNavigate('partners')}
          >
            Ver todos los socios
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
