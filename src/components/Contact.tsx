import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2, XCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';
import { motion } from 'motion/react';

// URL base del API
const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || '/api/v1/';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    company: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}blog/contacto-home/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          nombre_completo: formData.name,
          correo_electronico: formData.email,
          empresa: formData.company,
          mensaje: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.detail || 'Error al enviar el formulario');
      }

      toast.success('¡Perfecto! Tu mensaje ha sido enviado', {
        description: 'Nuestro equipo te responderá en menos de 24 horas.',
        duration: 5000,
      });
      
      setFormData({ name: '', email: '', company: '', message: '' });
      setTouched({ name: false, email: false, company: false, message: false });
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

  const handleBlur = (fieldName: keyof typeof formData) => {
    setTouched({ ...touched, [fieldName]: true });
  };

  // Validación de campo
  const getFieldValidation = (fieldName: keyof typeof formData) => {
    const value = formData[fieldName];
    
    if (!touched[fieldName] || value.length === 0) {
      return null; // No mostrar nada si no se ha tocado o está vacío
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

  const contactInfoVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#1C1C1C] overflow-x-hidden w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full box-border">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 w-full">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={contactInfoVariants}
            className="w-full min-w-0"
          >
            <h2 className="font-['Saira_Semi_Condensed'] text-4xl md:text-5xl text-white mb-6">
              Transformemos tus Operaciones Mineras
            </h2>
            <p className="text-lg text-white/70 mb-8 break-words">
              ¿Listo para aprovechar el poder de la IA y la analítica de datos? Nuestro equipo de expertos está aquí para ayudarte a desbloquear nuevo valor de tus datos geológicos.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, title: 'Email', content: 'contacto.peru@geoperuviangroup.com' },
                { icon: Phone, title: 'Oficina Perú', content: '(+51-01) 4891892' },
                { icon: Phone, title: 'Movil Perú', content: '(+51) 988818181' },
                { icon: MapPin, title: 'Oficina', content: 'Santiago de Surco\nLima, Perú' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 w-full min-w-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-[#C7482C]/20 rounded-lg flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="text-[#C7482C]" size={20} />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-white mb-1">{item.title}</h4>
                      <p className="text-white/60 whitespace-pre-line break-words break-all">{item.content}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
            className="bg-[#252525] border border-white/10 rounded-lg p-4 sm:p-8 md:p-8 w-full max-w-full box-border min-w-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={formVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              <div className="w-full min-w-0">
                <Label htmlFor="name">Nombre Completo</Label>
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

              <div className="w-full min-w-0">
                <Label htmlFor="email">Correo Electrónico</Label>
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

              <div className="w-full min-w-0">
                <Label htmlFor="company">Empresa</Label>
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

              <div className="w-full min-w-0">
                <Label htmlFor="message">Mensaje</Label>
                <div className="relative mt-2 w-full">
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur('message')}
                    placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                    required
                    rows={5}
                    className="pr-10 w-full max-w-full resize-none"
                  />
                  <div className="absolute right-3 top-3 pointer-events-none">
                    {renderFieldIcon('message')}
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full group" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={18} />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
