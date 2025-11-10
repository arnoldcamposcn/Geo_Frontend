import { Target, Rocket, TrendingUp, Download, CheckCircle, Lightbulb, Database, BarChart3, Shield, Map, ArrowRight, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';
import romuloImage from 'figma:asset/f43c909a5ef0ff91b2f076a48066f358433a44d8.png';
import juanImage from 'figma:asset/d158b7dd8e2724793f5ad633298b44e748b8e6cf.png';
import billImage from 'figma:asset/57857208536b0b55fa622ac6bec0fa19a565e332.png';
import danielImage from 'figma:asset/f312878513d40ae9bdd64210af57aa635506e7cb.png';
import hectorImage from 'figma:asset/d95f026b12858c6b8d3a6ab1d23b20c9be693020.png';
import fernandoImage from 'figma:asset/9e00862038d3aad8e772510ea05112f3881fb344.png';
import jorgeLeonImage from 'figma:asset/2c7524387b87b7441d07b20202a450ae1665dcbb.png';
import joseImage from 'figma:asset/0f59bf03b237101a932d0371689a735285c8f054.png';
import alfonsoImage from 'figma:asset/1450a4fb9c16278a17c4332b788eb4a480a2faa6.png';
import heroImage from 'figma:asset/7e7d9c21d22c03d59f527990b4a29a7445f402b6.png';
import brochureBackgroundImage from 'figma:asset/a2c4162e2bf8856ac0e726b4a9e33d5e3c72a410.png';

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const teamMembers = [
    {
      id: 'romulo',
      name: 'L. Rómulo Salirrosas Pablo',
      title: 'Consultor Principal, Geología Mina y Proyectos',
      specialty: 'Principal Geología y Proyectos Mina',
      email: 'rsalirrosas@geoperuviangroup.com',
      image: romuloImage,
      description: 'Ingeniero Geólogo con 32 años de experiencia liderando proyectos en empresas globales como Newmont, Southern y Antamina...',
      fullDescription: (
        <>
          <p className="mb-4">
          Rómulo es un Ingeniero Geólogo con 32 años de experiencia en la industria minera, destacando por su liderazgo en la dirección de proyectos y equipos en empresas de nivel global como Newmont, Southern y Antamina. Posee un Máster en Project Management por la Universidad de Barcelona (EAE, OBS).
          </p>
          <p className="mb-4">
          Su experiencia se centra en la gestión de proyectos mineros, geología económica, modelamiento geológico, estimación de recursos, geoestadística aplicada y QA/QC de procesos. Ha trabajado extensamente en diversos tipos de yacimientos, incluyendo epitermales de oro de alta sulfuración, pórfidos de Cu-Mo y skarn polimetálicos.
          </p>
          <p className="mb-4">Como consultor, Rómulo aporta un profundo conocimiento en:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-[#C7482C] mt-1">•</span>
              <span><strong>Modelamiento y Estimación de Recursos:</strong> Liderazgo en modelamiento geológico y estimación de recursos, elaborando reportes bajo códigos JORC y NI 43-101.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C7482C] mt-1">•</span>
              <span><strong>Geología de Mina y Ore Control:</strong> Implementación de mejoras en procesos de control de mineral, muestreo, logueo, clasificación de mineral y reconciliación.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C7482C] mt-1">•</span>
              <span><strong>Gestión de Datos y Tecnología:</strong> Experiencia en la gestión de bases de datos de producción (acQuire, SQL) y en la implementación de nuevas tecnologías y sistemas automáticos para la gestión de información geológico-minera.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C7482C] mt-1">•</span>
              <span><strong>Mejora Continua y Geoestadística:</strong> Liderazgo en proyectos de mejora continua y dominio de herramientas geoestadísticas (Kriging Ordinario, LAK, Indicadores) y software especializado (Mineplan, Leapfrog, acQuire).</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'juan',
      name: 'Juan Manuel Lira Cacho',
      title: 'Consultor Principal, Procesos Metalúrgicos',
      specialty: 'Principal Procesos Metalúrgicos',
      email: 'jlira@geoperuviangroup.com',
      image: juanImage,
      description: 'Ingeniero Químico con más de 30 años de experiencia en procesamiento de minerales, con destacada trayectoria en Antamina...',
      fullDescription: (
        <>
          <p className="mb-4">
            Ingeniero Químico con más de 30 años de experiencia en la industria minera, especializado en Procesamiento de Minerales.
          </p>
          <p className="mb-4">
            Cuenta con una destacada trayectoria de más de 20 años en la Compañía Minera Antamina, donde ha ocupado cargos clave como Superintendente de Operaciones de Planta Concentradora, Superintendente de Comisionamiento y Jefe de Proyecto de Expansión.
          </p>
          <p className="mb-4">
            Su experiencia se centra en el liderazgo de equipos multidisciplinarios y la coordinación de operaciones complejas, asegurando los más altos estándares de seguridad, eficiencia y calidad.
          </p>
        </>
      ),
    },
    {
      id: 'jose',
      name: 'José Antonio Bassan',
      title: 'Asesor Principal, Minería',
      specialty: 'Fellow QP',
      email: 'jbassan@geoperuviangroup.com',
      image: joseImage,
      description: 'Geólogo con Máster en Economía de Minerales, Fellow del AusIMM y experto QP en reportes JORC y NI 43-101...',
      fullDescription: (
        <>
          <p className="mb-4">
            Geólogo con un Máster en Economía de Minerales de Curtin University (Australia) y un MBA. Es Consultor (CP) y Fellow del AusIMM, además de miembro del CIM y SEG.
          </p>
          <p className="mb-4">
            José Antonio es un consultor internacional con vasta experiencia en la evaluación, estimación y auditoría de recursos minerales. Su carrera se enfoca en el modelamiento geológico, la geoestadística aplicada y la optimización de sistemas de control de leyes (grade control).
          </p>
          <p className="mb-4">
            Es un experto calificado (QP) para la elaboración de reportes técnicos y auditorías bajo códigos internacionales JORC y NI 43-101. Ha liderado revisiones y auditorías de modelos de recursos y procesos mineros para numerosas compañías globales, incluyendo Agnico Eagle, Antamina, Glencore Xstrata, BHP, Oceanagold, MMG y Teck, en proyectos mineros en América, Asia y Australia.
          </p>
        </>
      ),
    },
    {
      id: 'alfonso',
      name: 'Alfonso de la Guarda Reyes',
      title: 'Asesor Principal, Inteligencia Artificial',
      specialty: 'Inteligencia Artificial',
      email: 'adelaguarda@geoperuviangroup.com',
      image: alfonsoImage,
      description: 'Old School Hacker desde 1983, experto en Arquitectura Tecnológica y programación de bajo nivel, apasionado de Python y Linux...',
      fullDescription: (
        <>
          <p className="mb-4">
            Alfonso es un "Old School Hacker" con una trayectoria en programación y desarrollo de software que se remonta a 1983. Su formación multidisciplinaria abarca Ciencias de la Computación, Antropología y Comunicación Social.
          </p>
          <p className="mb-4">
            Es un experto en Arquitectura Tecnológica y programador de bajo nivel. Ha sido el arquitecto de tecnología detrás de numerosas startups (incluyendo Arkehr, Puqaz, Asistx, Veo365, Prixtips y Machinalix) y ha servido como consultor tecnológico para instituciones críticas, como el Ejército del Perú, EsSalud y el Ministerio de Salud de Chile.
          </p>
          <p className="mb-4">
            Es un apasionado de Python (desde 2001) y un experto en Linux (desde 1997), con implementaciones que van desde servidores de red hasta simuladores de vuelo para defensa. Sus habilidades clave se centran en la Investigación y Desarrollo Científico aplicado a minería, salud y defensa.
          </p>
        </>
      ),
    },
    {
      id: 'jorge',
      name: 'Jorge Leon Pimentel',
      title: 'Consultor Principal, Exploraciones y Evaluación de Proyectos',
      specialty: 'Evaluación Proyectos Exploración Geología y Proyectos Mina',
      email: 'jleon@geoperuviangroup.com',
      image: jorgeLeonImage,
      description: 'Ingeniero Geólogo con 23 años de experiencia en exploración y evaluación de proyectos, con M.Sc. y MBA...',
      fullDescription: (
        <>
          <p className="mb-4">
            Ingeniero Geólogo por la Universidad Nacional de Ingeniería con 23 años de experiencia en exploración de minerales y evaluación de proyectos mineros. Cuenta con un M.Sc. en Uso Sostenible de Recursos Minerales por la Universidad Politécnica de Madrid y un MBA de la Escuela de Gerencia GERENS.
          </p>
          <p className="mb-4">
            Su carrera se ha enfocado en la evaluación integral de proyectos y la gestión de exploraciones para compañías junior y majors.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-[#C7482C] mt-1">•</span>
              <span><strong>Evaluación de Proyectos y Due Diligence:</strong> Liderazgo en la evaluación integral (Due Diligence) de proyectos para fondos de inversión y procesos de adquisición, gestionando equipos multidisciplinarios para analizar aspectos técnicos, financieros, ambientales y sociales.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C7482C] mt-1">•</span>
              <span><strong>Gestión de Exploraciones:</strong> Experiencia en la dirección de programas de exploración regional y brownfield, desde la generación de targets hasta la perforación, con un enfoque en pórfidos (Cu-Mo), skarns y sistemas epitermales (HS, LS).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C7482C] mt-1">•</span>
              <span><strong>Reportes Técnicos:</strong> Participación como miembro de equipos generadores de reportes NI 43-101.</span>
            </li>
          </ul>
          <p className="mb-4">
            Ha ocupado roles de alta dirección como Sub-Gerente de Exploraciones Brownfields en Hochschild Mining, Gerente de Desarrollo de Negocios en Summa Gold Corporation y Phoenix Capital Investment, Geocientífico Senior de Exploración en BHP Billiton y Jefe de Geología en AQM Peru Copper (Proyecto Zafranal).
          </p>
        </>
      ),
    },
    {
      id: 'fernando',
      name: 'Fernando Saez Rivera',
      title: 'Consultor Principal, Geoestadística y Estimación',
      specialty: 'Geología Mina Geoestadística',
      email: 'Isaez@geoperuviangroup.com',
      image: fernandoImage,
      description: 'Magíster e Ingeniero Geólogo con más de 22 años de experiencia, CP/QP certificado por MAIG y catedrático en PUCP...',
      fullDescription: (
        <>
          <p className="mb-4">
            Fernando es Magíster e Ingeniero Geólogo con más de 22 años de experiencia en la industria minera. Es Persona Competente (CP/QP) certificada por el Australian Institute of Geoscientists (MAIG) y catedrático del curso de Recursos Minerales en la PUCP.
          </p>
          <p className="mb-4">
            Su especialización se centra en la estimación de recursos minerales, geoestadística avanzada y modelamiento geológico. Cuenta con un MBA por la PUCP y estudios de especialización en Geoestadística en Mines ParisTech (Francia) y Alberta University (Canadá).
          </p>
          <p className="mb-4">Fernando es experto en:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-[#C7482C] mt-1">•</span>
              <span><strong>Estimación y Reportes:</strong> Elaboración de estimaciones de recursos y reservas minerales, así como reportes técnicos bajo normas internacionales (JORC, NI 43-101, SK-1300).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C7482C] mt-1">•</span>
              <span><strong>Auditoría y Due Diligence:</strong> Liderazgo en auditorías, Due Diligence y estudios de reconciliación minera.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C7482C] mt-1">•</span>
              <span><strong>Geoestadística Aplicada:</strong> Desarrollo de estudios de geoestadística avanzada, lineal y no estacionaria, incluyendo simulación condicional para optimización de espaciamiento de sondajes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C7482C] mt-1">•</span>
              <span><strong>Modelamiento 3D:</strong> Modelamiento geológico tridimensional en diversos tipos de yacimientos (Au, Cu, Ag, Zn, Pb, Fe).</span>
            </li>
          </ul>
          <p className="mb-4">
            Ha ocupado posiciones estratégicas como Superintendente de Recursos Minerales en AngloAmerican Quellaveco, Consultor Principal en SRK Consulting y Geólogo Senior de Recursos en Yanacocha.
          </p>
        </>
      ),
    },
    {
      id: 'bill',
      name: 'Bill Maquin Valladares',
      title: 'CONSULTOR PRINCIPAL, OPERACIONES MINA Y NUEVAS TECNOLOGIAS',
      specialty: 'Operaciones Mina y Tecnología Procesos Metalúrgicos',
      email: 'bmaquin@geoperuviangroup.com',
      image: billImage,
      description: 'Ingeniero de Minas especialista en Big Data y Data Science, CEO y Fundador de CODEa UNI, plataforma líder en innovación minera...',
      fullDescription: (
        <>
          <p className="mb-4">
            Bill es Ingeniero de Minas egresado de la Universidad Nacional de Ingeniería (UNI) y especialista en Big Data y Data Science por la Pontificia Universidad Católica de Chile.
          </p>
          <p className="mb-4">
            Es el CEO y Fundador de CODEa UNI, una plataforma líder en innovación, analítica y transformación digital para la minería. Su experiencia se centra en el desarrollo de software y la aplicación de ciencia de datos para optimizar procesos mineros.
          </p>
          <p className="mb-4">Como consultor, Bill aporta experiencia en:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-[#C7482C] mt-1">•</span>
              <span><strong>Ciencia de Datos y Big Data:</strong> Aplicación de tecnologías como Python, R, Scala y Spark para el procesamiento y análisis de grandes volúmenes de datos mineros.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C7482C] mt-1">•</span>
              <span><strong>Desarrollo y Automatización:</strong> Creación de soluciones de software (web, escritorio y móvil) para la planificación y operaciones mineras, incluyendo la automatización de procesos en estimación de recursos.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C7482C] mt-1">•</span>
              <span><strong>Innovación Minera:</strong> Implementación de proyectos de machine learning para la predicción de parámetros operativos, como el consumo de energía en molienda SAG.</span>
            </li>
          </ul>
          <p className="mb-4">
            Ha colaborado en el desarrollo de software y automatización para compañías como Indra y Compañía de Minas Buenaventura.
          </p>
        </>
      ),
    },
    {
      id: 'daniel',
      name: 'Daniel Peña Guimas',
      title: 'Consultor Senior, Geología y Geometalurgia',
      specialty: 'Geometalurgia',
      email: 'dpena@geoperuviangroup.com',
      image: danielImage,
      description: 'Ingeniero Geólogo con más de 17 años de experiencia, especializado en geometalurgia, modelamiento geológico y recursos minerales...',
      fullDescription: (
        <>
          <p className="mb-4">
            Ingeniero Geólogo de la Universidad Nacional de Ingeniería con más de 17 años de experiencia nacional e internacional. Cuenta con una Maestría en Gestión Ambiental y está finalizando una Maestría en Minería en la Universidad de Chile.
          </p>
          <p className="mb-4">
            Su especialización se centra en el modelamiento geológico, estructural y de recursos minerales, con un fuerte enfoque en geometalurgia y geotecnia. Es experto en la asesoría de muestreo (QAQC) y optimización mediante tests de heterogeneidad.
          </p>
          <p className="mb-4">
            Ha liderado y participado en auditorías y reportes técnicos bajo códigos JORC, NI 43-101 y SK-1300 para una amplia gama de depósitos, incluyendo Pórfidos, Skarn, VMS, IOCG y vetas epitermales. Su trayectoria incluye 7 años como Consultor Senior en SRK Consulting, donde desarrolló proyectos clave de estimación de variables geometalúrgicas y geotécnicas.
          </p>
        </>
      ),
    },
    {
      id: 'hector',
      name: 'Hector Andrade',
      title: 'Consultor Principal, Inteligencia Artificial',
      specialty: 'Inteligencia Artificial',
      email: 'handrade@geoperuviangroup.com',
      image: hectorImage,
      description: 'Ingeniero de Sistemas (MBA Centrum Católica) con +14 años liderando transformación digital en sectores público y privado, experto en IA, automatización y arquitectura de datos...',
      fullDescription: (
        <>
          <p className="mb-4">
            Hector es Ingeniero de Sistemas (titulado y colegiado) con un MBA por Centrum Católica (PUCP). Cuenta con especializaciones clave para la industria, incluyendo un Diplomado en Inteligencia Artificial por la Pontificia Universidad Católica de Chile y un Diplomado en Gestión Minera por la Universidad ESAN.
          </p>
          <p className="mb-4">
            Con más de 14 años de experiencia liderando la transformación digital en los sectores público y privado, Hector es un experto en el diseño e implementación de soluciones tecnológicas avanzadas. Su trayectoria incluye la gestión de proyectos financiados por el BID y el Banco Mundial.
          </p>
          <p className="mb-4">Su especialización abarca:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-[#C7482C] mt-1">•</span>
              <span><strong>Inteligencia Artificial y Automatización:</strong> Diseño y desarrollo de soluciones innovadoras de IA y automatización robótica de procesos (RPA).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C7482C] mt-1">•</span>
              <span><strong>Transformación Digital:</strong> Liderazgo en roles estratégicos como Jefe de TI y Especialista en IA y Automatización.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C7482C] mt-1">•</span>
              <span><strong>Arquitectura de Datos e Infraestructura:</strong> Implementación de arquitecturas de datos, sistemas de información e infraestructura de TI en sectores críticos como agricultura, justicia y meteorología.</span>
            </li>
          </ul>
          <p className="mb-4">
            Actualmente, brinda consultorías en inteligencia artificial e infraestructura de TI al sector gobierno a través de la startup AlphaGob.
          </p>
        </>
      ),
    },
  ];

  const differentiators = [
    {
      icon: TrendingUp,
      title: 'Experiencia de Campo Probada',
      description: 'Más de 20 años de experiencia en operaciones mineras reales',
    },
    {
      icon: Lightbulb,
      title: 'Innovación Escalable',
      description: 'Soluciones tecnológicas adaptables a cualquier escala operativa',
    },
    {
      icon: CheckCircle,
      title: 'Resultados Cuantificables',
      description: 'KPIs claros y seguimiento continuo de impacto',
    },
  ];

  const offerings = [
    {
      icon: Database,
      title: 'Valorización Inteligente de Datos',
      points: [
        'Maximizamos el potencial de sus datos históricos y operativos',
        'Integración avanzada de información geológica, metalúrgica y financiera',
        'Modelos predictivos que revelan oportunidades ocultas',
      ],
    },
    {
      icon: Map,
      title: 'Innovación en Exploración y Explotación',
      points: [
        'Modelamiento geológico 3D de última generación',
        'Delineación precisa de nuevos targets mineralizados',
        'Estrategias de explotación optimizadas para maximizar recuperación',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Eficiencia Económica Comprobada',
      points: [
        'Reducción de costos operativos entre 15-25%',
        'Aceleración del ROI mediante planificación estratégica',
        'Optimización de leyes de corte dinámicas',
      ],
    },
    {
      icon: Shield,
      title: 'Gestión Integral de Riesgos',
      points: [
        'Identificación proactiva de riesgos geotécnicos y operacionales',
        'Protocolos preventivos para minimizar impactos financieros',
        'Modelos de simulación para escenarios críticos',
      ],
    },
    {
      icon: BarChart3,
      title: 'Expansión Estratégica de Recursos',
      points: [
        'Evaluación objetiva del potencial de sus yacimientos',
        'Metodologías probadas para extensión de vida útil de minas',
        'Análisis de viabilidad para proyectos de ampliación',
      ],
    },
  ];

  const benefits = [
    'Tecnología aplicada: IA, machine learning y geoestadística avanzada',
    'Expertise comprobado: Consultores con más de 20 años implementando soluciones en operaciones reales',
    'Enfoque práctico: Soluciones ejecutables con recursos existentes',
    'Resultados medibles: Reportes con KPIs claros y seguimiento continuo',
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1C] pt-20 overflow-x-hidden w-full">
      {/* Hero Section - Quienes Somos */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden w-full">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={heroImage}
              alt="Profesionales mineros"
              className="w-full h-full object-cover object-center scale-105 sm:scale-110"
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full box-border">
            <div className="max-w-4xl w-full">
              <motion.h1 
                className="font-['Saira_Semi_Condensed'] text-5xl md:text-6xl lg:text-7xl text-white mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Nosotros
              </motion.h1>
              
              <motion.p 
                className="font-['Syne'] text-base text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Somos una consultora internacional especializada en brindar asesoría estratégica, servicios y soluciones integrales innovadoras para la industria minera.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  size="lg" 
                  className="group"
                  onClick={() => onNavigate && onNavigate('servicios')}
                >
                  Conoce nuestros servicios
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

      {/* Diferenciadores Section */}
      <section className="py-20 bg-[#252525] overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full box-border">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-12 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base text-white/80 mb-8 break-words">
              Deseamos comprender profundamente las fortalezas, desafíos y restricciones de nuestros clientes para diseñar estrategias de mejora e innovación que sean efectivas y al servicio de sus metas.
            </p>
            <p className="text-base text-white break-words">
              En <span className="text-[#C7482C]">GEOPERUVIAN</span> vamos más allá de la consultoría tradicional.{' '}
              <span className="text-white">Somos socios tecnológicos para la minería moderna, combinando:</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 w-full">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-[#1C1C1C] border border-white/10 rounded-lg p-8 hover:border-[#C7482C]/50 transition-all hover:transform hover:scale-105 w-full max-w-full min-w-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-[#C7482C]/20 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-[#C7482C]" size={32} />
                  </div>
                  <h3 className="font-['Saira_Semi_Condensed'] text-2xl text-white mb-4">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#1C1C1C] overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full box-border">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4 font-[Saira_SemiCondensed]">Nuestro Equipo</h2>
            <p className="text-base text-white/70 max-w-2xl mx-auto">
              Consultores principales con décadas de experiencia<br />
              en operaciones mineras de clase mundial
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="group relative bg-gradient-to-br from-[#252525] to-[#1C1C1C] border border-white/10 rounded-xl overflow-hidden hover:border-[#C7482C]/70 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-[#C7482C]/20 flex flex-col w-full max-w-full min-w-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-b from-[#2A2A2A] to-[#1C1C1C] flex-shrink-0">
                  {member.image ? (
                    <div className="absolute inset-0 flex items-end justify-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-500 grayscale"
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-[#C7482C]/20 flex items-center justify-center border-2 border-[#C7482C]/40">
                        <span className="text-4xl text-[#C7482C]">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  )}
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252525] via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Content Container */}
                <div className="relative p-6 flex flex-col flex-grow">
                  <h3 className="text-xl text-white mb-1 group-hover:text-[#C7482C] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#C7482C] mb-3 uppercase tracking-wide text-xs">
                    {member.title}
                  </p>
                  <p className="text-white/80 mb-4 text-sm leading-relaxed">
                    {/* {member.specialty} */}
                  </p>
                  
                  {member.description ? (
                    <div className="flex flex-col flex-grow">
                      <p className="text-white/70 mb-4 text-sm leading-relaxed flex-grow">
                        {member.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mb-5 w-fit border-[#C7482C]/50 text-[#C7482C] hover:bg-[#C7482C]/10 hover:border-[#C7482C]"
                        onClick={() => {
                          setSelectedMember(member);
                          setIsDialogOpen(true);
                        }}
                      >
                        Ver más
                      </Button>
                    </div>
                  ) : (
                    <div className="flex-grow"></div>
                  )}
                  
                  <div className="pt-3 border-t border-white/5">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-white/60 hover:text-[#C7482C] transition-colors text-xs inline-flex items-center gap-2 group/email break-all"
                    >
                      <Mail size={12} className="text-[#C7482C] flex-shrink-0" />
                      <span className="group-hover/email:translate-x-1 transition-transform duration-300 break-all">
                        {member.email}
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-[#252525] overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full box-border">
          <div className="grid lg:grid-cols-2 gap-12 w-full">
            {/* Vision */}
            <motion.div 
              className="bg-[#1C1C1C] border border-white/10 rounded-lg p-10 hover:border-[#C7482C]/50 transition-colors w-full max-w-full min-w-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#C7482C]/20 rounded-lg flex items-center justify-center">
                  <Target className="text-[#C7482C]" size={28} />
                </div>
                <h3 className="font-['Saira_Semi_Condensed'] text-3xl text-white">Visión</h3>
              </div>
              <p className="text-white/80 mb-6">
                Ser el socio estratégico más confiable en consultoría minera, destacándonos por:
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#C7482C] mt-1 flex-shrink-0" size={20} />
                  <span><strong className="text-white">Confiabilidad absoluta</strong> – Partner estratégico de confianza para nuestros clientes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#C7482C] mt-1 flex-shrink-0" size={20} />
                  <span><strong className="text-white">Transformación real</strong> – Convertimos desafíos técnicos en oportunidades de crecimiento</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#C7482C] mt-1 flex-shrink-0" size={20} />
                  <span><strong className="text-white">Ventajas competitivas</strong> – Soluciones operativas sostenibles y medibles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#C7482C] mt-1 flex-shrink-0" size={20} />
                  <span><strong className="text-white">Liderazgo en innovación</strong> – Referentes en consultoría minera moderna</span>
                </li>
              </ul>
            </motion.div>

            {/* Mission */}
            <motion.div 
              className="bg-[#1C1C1C] border border-white/10 rounded-lg p-10 hover:border-[#C7482C]/50 transition-colors w-full max-w-full min-w-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#C7482C]/20 rounded-lg flex items-center justify-center">
                  <Rocket className="text-[#C7482C]" size={28} />
                </div>
                <h3 className="font-['Saira_Semi_Condensed'] text-3xl text-white">Misión</h3>
              </div>
              <p className="text-white/80 mb-6">
                Impulsar la excelencia en la industria minera mediante:
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#C7482C] mt-1 flex-shrink-0" size={20} />
                  <span><strong className="text-white">Asesoría especializada</strong> – Soluciones prácticas adaptadas a cada etapa del ciclo minero</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#C7482C] mt-1 flex-shrink-0" size={20} />
                  <span><strong className="text-white">Tecnología con propósito</strong> – Desarrollo e implementación de herramientas digitales</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#C7482C] mt-1 flex-shrink-0" size={20} />
                  <span><strong className="text-white">Creación de valor tangible</strong> – Optimización, seguridad operacional y productividad</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#C7482C] mt-1 flex-shrink-0" size={20} />
                  <span><strong className="text-white">Transferencia de conocimiento</strong> – Capacitación y formación de equipos autosostenibles</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lo Que Ofrecemos Section */}
      <section className="py-20 bg-[#1C1C1C] overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full box-border">
          <motion.div 
            className="text-center mb-16 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6 font-[Saira_SemiCondensed]">Lo Que Ofrecemos</h2>
            <p className="text-base text-white/80 max-w-3xl mx-auto break-words">
              Soluciones con Impacto Real en Minería, transformamos sus desafíos en resultados cuantificables mediante:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-[#252525] border border-white/10 rounded-lg p-8 hover:border-[#C7482C]/50 transition-all hover:transform hover:scale-105 w-full max-w-full min-w-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 bg-[#C7482C]/20 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-[#C7482C]" size={28} />
                  </div>
                  <h3 className="text-xl text-white mb-4">{offering.title}</h3>
                  <ul className="space-y-3">
                    {offering.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/70">
                        <span className="text-[#C7482C] mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#252525] overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full box-border">
          <div className="max-w-4xl mx-auto w-full">
            <motion.h2 
              className="text-4xl text-white mb-12 text-center font-[Saira_SemiCondensed]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Beneficios
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6 w-full">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1C1C1C] border border-white/10 rounded-lg p-6 hover:border-[#C7482C]/50 transition-colors flex items-start gap-4 w-full max-w-full min-w-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="text-[#C7482C] flex-shrink-0 mt-1" size={24} />
                  <p className="text-white/80">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Brochure Section */}
      <section className="relative py-24 overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={brochureBackgroundImage}
            alt="Analítica de datos mineros"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#C7482C]/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>

        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full box-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-[Saira_SemiCondensed]">Brochure</h2>
          <p className="text-base text-white/95 mb-8 max-w-3xl mx-auto break-words">
            Conoce nuestras soluciones especializadas para el sector minero. Descarga nuestro brochure de servicios y descubre cómo podemos optimizar tus operaciones con tecnología de punta y asesoría experta.
          </p>
          <Button
            size="lg"
            className="group bg-white text-[#C7482C] hover:bg-white/90"
            onClick={() => window.open('#', '_blank')}
          >
            <Download className="mr-2" size={20} />
            Descargar Brochure
          </Button>
          <p className="text-base text-white/80 mt-4">
            ¡Haz clic aquí y lleva tu proyecto al siguiente nivel!
          </p>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#1C1C1C] overflow-x-hidden w-full">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full box-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-white mb-6 font-[Saira_SemiCondensed]">
            ¿Listo para Transformar tus Operaciones Mineras?
          </h2>
          <p className="text-base text-white/70 mb-8 max-w-2xl mx-auto break-words">
            Descubre cómo nuestro enfoque orientado a resultados puede ayudarte a alcanzar tus objetivos de eficiencia, sostenibilidad y rentabilidad.
          </p>
          <Button
            size="lg"
            className="group"
            onClick={() => onNavigate && onNavigate('contacto')}
          >
            Comenzar Ahora
            <CheckCircle className="ml-2 group-hover:scale-110 transition-transform" size={20} />
          </Button>
        </motion.div>
      </section>

      {/* Team Member Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-[#252525] border-[#C7482C]/30 text-white max-w-2xl max-h-[80vh] overflow-y-auto w-full max-w-full box-border">
          <DialogHeader>
            <DialogTitle className="text-2xl text-white font-['Saira_Semi_Condensed']">
              {selectedMember?.name}
            </DialogTitle>
            <DialogDescription className="text-[#C7482C] uppercase tracking-wide">
              {selectedMember?.title} - {selectedMember?.specialty}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 text-white/80 break-words">
            {selectedMember?.fullDescription}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
