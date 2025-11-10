import { useState, useRef } from 'react';
import { Mail, MapPin, Phone, Send, Clock, Globe, CheckCircle2, Loader2, XCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion, useScroll, useTransform } from 'motion/react';
import contactHeroImage from 'figma:asset/23394fba70da6842792a2597586a10abc6502303.png';
import mapImage from 'figma:asset/1e89eb28fc71ab4eec16f4dd27b0e1e68f6ae02b.png';

// URL base del API
const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || '/api/v1/';

// Mapeo de valores del select del frontend a los valores del backend
const serviceMapping: Record<string, string> = {
  'ai-exploration': 'exploracion_ia',
  'data-management': 'gestion_datos',
  'resource-optimization': 'optimizacion_recursos',
  'digital-twin': 'gemelos_digitales',
  'sustainability': 'analitica_sostenibilidad',
  'consulting': 'consultoria_general',
  'other': 'otro',
};

interface ContactPageProps {
  onNavigate?: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps = {}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    company: false,
    phone: false,
    service: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Mapear el servicio al valor del backend
      const servicioInteres = formData.service ? serviceMapping[formData.service] : '';
      
      if (!servicioInteres) {
        toast.error('Por favor, selecciona un servicio de interés');
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(`${API_BASE_URL}blog/contacto/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          nombre_completo: formData.name,
          correo_electronico: formData.email,
          empresa: formData.company,
          numero_telefono: formData.phone || '', // Opcional, puede estar vacío
          servicio_interes: servicioInteres,
          mensaje: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.detail || 'Error al enviar el formulario');
      }

      toast.success('¡Excelente! Tu consulta ha sido recibida', {
        description: 'Un especialista de nuestro equipo te contactará en las próximas 24 horas.',
        duration: 5000,
      });
      
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
      setTouched({ name: false, email: false, company: false, phone: false, service: false, message: false });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error al enviar el formulario', {
        description: error instanceof Error ? error.message : 'Por favor, intenta nuevamente.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, service: value });
    setTouched({ ...touched, service: true });
  };

  const handleBlur = (fieldName: keyof typeof formData) => {
    setTouched({ ...touched, [fieldName]: true });
  };

  // Validación de campo
  const getFieldValidation = (fieldName: keyof typeof formData) => {
    const value = formData[fieldName];
    
    // Para campos opcionales como phone
    if (fieldName === 'phone') {
      if (!touched[fieldName] || value.length === 0) {
        return null;
      }
      return value.length >= 7 ? 'valid' : 'invalid';
    }
    
    if (!touched[fieldName] || value.length === 0) {
      return null;
    }
    
    if (fieldName === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'valid' : 'invalid';
    }
    
    return value.trim().length > 0 ? 'valid' : 'invalid';
  };

  const renderFieldIcon = (fieldName: keyof typeof formData) => {
    const validation = getFieldValidation(fieldName);
    
    if (validation === 'valid') {
      return (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
        >
          <CheckCircle2 className="text-green-500" size={18} />
        </motion.div>
      );
    }
    
    if (validation === 'invalid') {
      return (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
        >
          <XCircle className="text-red-500" size={18} />
        </motion.div>
      );
    }
    
    return null;
  };

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <div className="min-h-screen bg-[#1C1C1C] pt-20 overflow-x-hidden w-full">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={contactHeroImage}
              alt="Ingeniero en consulta"
              className="w-full h-full object-cover object-top scale-105 sm:scale-110"
              style={{ 
                minWidth: '100%',
                minHeight: '100%'
              }}
            />
            {/* Primary color overlay */}
            <div className="absolute inset-0 bg-[#C7482C]/50"></div>
            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
          </div>
        </motion.div>

        <motion.div 
          className="relative z-10 w-full py-32 mt-20 sm:mt-24 md:mt-28"
          style={{ opacity }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <motion.h1 
                className="font-['Saira_Semi_Condensed'] text-5xl md:text-6xl lg:text-7xl text-white mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Iniciemos una Conversación
              </motion.h1>
              
              <motion.p 
                className="font-['Syne'] text-base text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Cuéntanos sobre tu proyecto — te ayudaremos a encontrar la mejor solución personalizada para tu operación minera.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  size="lg" 
                  className="group"
                  onClick={() => {
                    const formElement = document.getElementById('contact-form');
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Enviar mensaje
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

      {/* Contact Form & Info Section */}
      <section id="contact-form" className="py-24 bg-[#1C1C1C] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 w-full">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="mb-8">
                <h2 className="font-['Saira_Semi_Condensed'] text-3xl text-white mb-4">Envíanos un Mensaje</h2>
                <p className="text-base text-white/70">
                  Nuestro equipo de expertos está listo para discutir cómo podemos ayudar a optimizar tus operaciones mineras. Completa el formulario y te responderemos en 24 horas.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="w-full">
                    <Label htmlFor="name">Nombre Completo *</Label>
                    <div className="relative mt-2 w-full">
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={() => handleBlur('name')}
                        placeholder="Juan Pérez"
                        required
                        className="pr-10 w-full max-w-full"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        {renderFieldIcon('name')}
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <Label htmlFor="email">Correo Electrónico *</Label>
                    <div className="relative mt-2 w-full">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur('email')}
                        placeholder="juan.perez@empresa.com"
                        required
                        className="pr-10 w-full max-w-full"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        {renderFieldIcon('email')}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="w-full">
                    <Label htmlFor="company">Empresa *</Label>
                    <div className="relative mt-2 w-full">
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={() => handleBlur('company')}
                        placeholder="Tu empresa minera"
                        required
                        className="pr-10 w-full max-w-full"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        {renderFieldIcon('company')}
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <Label htmlFor="phone">Número de Teléfono</Label>
                    <div className="relative mt-2 w-full">
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={() => handleBlur('phone')}
                        placeholder="+51 999 999 999"
                        className="pr-10 w-full max-w-full"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        {renderFieldIcon('phone')}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <Label htmlFor="service">Servicio de Interés *</Label>
                  <div className="relative mt-2 w-full">
                    <Select onValueChange={handleSelectChange} required>
                      <SelectTrigger className={formData.service ? "pr-10 w-full max-w-full" : "w-full max-w-full"}>
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai-exploration">Exploración con IA</SelectItem>
                        <SelectItem value="data-management">Gestión de Datos Geológicos</SelectItem>
                        <SelectItem value="resource-optimization">Optimización de Recursos</SelectItem>
                        <SelectItem value="digital-twin">Integración de Gemelos Digitales</SelectItem>
                        <SelectItem value="sustainability">Analítica de Sostenibilidad</SelectItem>
                        <SelectItem value="consulting">Consultoría General</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                    {formData.service && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        {renderFieldIcon('service')}
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full">
                  <Label htmlFor="message">Mensaje *</Label>
                  <div className="relative mt-2 w-full">
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur('message')}
                      placeholder="Cuéntanos sobre tu proyecto, desafíos y objetivos..."
                      required
                      rows={6}
                      className="pr-10 w-full max-w-full"
                    />
                    <div className="absolute right-3 top-3 pointer-events-none">
                      {renderFieldIcon('message')}
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={18} />
                      Enviando tu consulta...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </>
                  )}
                </Button>

                <p className="text-base text-white/50">
                  Al enviar este formulario, aceptas nuestra política de privacidad y términos de servicio.
                </p>
              </form>

              {/* Google Maps Location */}
              <div className="mt-12 w-full">
                <h3 className="font-['Saira_Semi_Condensed'] text-2xl text-white mb-4">Nuestra Ubicación</h3>
                <p className="text-base text-white/70 mb-6">
                  Encuéntranos en Santiago de Surco, Lima, Perú
                </p>
                <div className="rounded-lg overflow-hidden border border-white/10 w-full max-w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62460.89474995937!2d-77.01776468562012!3d-12.146461699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7f1b6a5f0a5%3A0x4d4f5c5d5c5c5c5c!2sSantiago%20de%20Surco%2C%20Lima%2C%20Peru!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                    width="100%"
                    height="400"
                    style={{ border: 0, maxWidth: '100%' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de GeoPeruvian en Santiago de Surco, Lima, Perú"
                  />
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full"
            >
              <div className="mb-8">
                <h2 className="font-['Saira_Semi_Condensed'] text-3xl text-white mb-4">Ponte en Contacto</h2>
                <p className="text-base text-white/70">
                  Elige la forma que mejor te funcione para conectar con nuestro equipo.
                </p>
              </div>

              <div className="space-y-6 mb-12 w-full">
                <div className="bg-[#252525] border border-white/10 rounded-lg p-4 sm:p-6 hover:border-[#C7482C]/50 transition-colors w-full max-w-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C7482C]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#C7482C]" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white mb-2">Email</h3>
                      <p className="text-base text-white/70 mb-1">Consultas generales:</p>
                      <a href="mailto:contacto.peru@geoperuviangroup.com" className="text-[#C7482C] hover:underline break-all">
                        contacto.peru@geoperuviangroup.com
                      </a>
                      <p className="text-base text-white/70 mt-3 mb-1">Soporte técnico:</p>
                      <a href="mailto:soporte@geoperuviangroup.com" className="text-[#C7482C] hover:underline break-all">
                        soporte@geoperuviangroup.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#252525] border border-white/10 rounded-lg p-4 sm:p-6 hover:border-[#C7482C]/50 transition-colors w-full max-w-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C7482C]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#C7482C]" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white mb-2">Teléfono</h3>
                      <p className="text-base text-white/70 mb-1">Oficina Perú:</p>
                      <a href="tel:+51014891892" className="text-[#C7482C] hover:underline">
                        (+51-01) 4891892
                      </a>
                      <p className="text-base text-white/70 mt-3 mb-1">Móvil:</p>
                      <a href="tel:+51943049976" className="text-[#C7482C] hover:underline">
                        (+51) 943049976
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#252525] border border-white/10 rounded-lg p-4 sm:p-6 hover:border-[#C7482C]/50 transition-colors w-full max-w-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C7482C]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#C7482C]" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white mb-2">Oficina</h3>
                      <p className="text-base text-white/70">
                        Santiago de Surco<br />
                        Lima<br />
                        Perú
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#252525] border border-white/10 rounded-lg p-4 sm:p-6 hover:border-[#C7482C]/50 transition-colors w-full max-w-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C7482C]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-[#C7482C]" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white mb-2">Horario de Atención</h3>
                      <p className="text-base text-white/70">
                        Lunes - Viernes: 8:00 AM - 6:00 PM (PET)<br />
                        Sábado: 9:00 AM - 1:00 PM (PET)<br />
                        Domingo: Cerrado
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#252525] border border-white/10 rounded-lg p-4 sm:p-6 hover:border-[#C7482C]/50 transition-colors w-full max-w-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C7482C]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="text-[#C7482C]" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white mb-2">Presencia Global</h3>
                      <p className="text-base text-white/70">
                        Operando en 3 países de Latinoamérica con expertise local y estándares globales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#252525] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl text-white mb-12 text-center font-[Saira_SemiCondensed]">Preguntas Frecuentes</h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-[#1C1C1C] border border-white/10 rounded-lg px-6 data-[state=open]:border-[#C7482C]/50">
                  <AccordionTrigger className="text-white hover:text-[#C7482C] transition-colors hover:no-underline">
                    ¿Cuál es el cronograma típico de un proyecto?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Los cronogramas varían según el alcance y complejidad. La mayoría de implementaciones van de 3-12 meses, con resultados rápidos entregados en las primeras 4-6 semanas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-[#1C1C1C] border border-white/10 rounded-lg px-6 data-[state=open]:border-[#C7482C]/50">
                  <AccordionTrigger className="text-white hover:text-[#C7482C] transition-colors hover:no-underline">
                    ¿Trabajan con empresas mineras de todos los tamaños?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Sí, atendemos desde exploradores junior hasta grandes multinacionales mineras. Nuestras soluciones escalan para satisfacer tus necesidades y presupuesto específicos.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-[#1C1C1C] border border-white/10 rounded-lg px-6 data-[state=open]:border-[#C7482C]/50">
                  <AccordionTrigger className="text-white hover:text-[#C7482C] transition-colors hover:no-underline">
                    ¿Qué tipo de datos necesito para comenzar?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Trabajamos con varios tipos de datos incluyendo registros de perforación, ensayos geoquímicos, estudios geofísicos e informes históricos. También ayudamos a estructurar y organizar datos heredados.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-[#1C1C1C] border border-white/10 rounded-lg px-6 data-[state=open]:border-[#C7482C]/50">
                  <AccordionTrigger className="text-white hover:text-[#C7482C] transition-colors hover:no-underline">
                    ¿Cómo garantizan la seguridad de los datos?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Usamos encriptación de nivel empresarial, infraestructura segura en la nube y cumplimos con estándares internacionales de protección de datos. Todos los datos de clientes son confidenciales y protegidos.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
