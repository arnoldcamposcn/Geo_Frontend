import { 
  Compass,
  Settings,
  Cpu,
  FileSearch,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  GraduationCap,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

interface ServicesPageProps {
  onNavigate?: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  
  const allServices = [
    {
      id: 1,
      icon: Cpu,
      title: 'Gestión de Datos e IA para Optimización Minera',
      subtitle: 'Datos, Inteligencia Artificial y Optimización Operacional',
      description: 'Soluciones integrales que combinan gestión de datos mineros, inteligencia artificial y optimización de procesos para transformar información en valor estratégico.',
      color: '#C7482C',
      categories: [
        {
          number: '1.1',
          title: 'Inteligencia de Datos Mineros',
          services: [
            { name: 'Análisis Exploratorio de Datos (EDA) y Minería de Datos', detail: 'Identificación de patrones, anomalías y tendencias' },
            { name: 'Administración y Optimización de Bases de Datos Mineros', detail: 'Soporte técnico, mantenimiento y escalabilidad' },
            { name: 'Migración y Estandarización de Datos Históricos', detail: 'Integración de fuentes heterogéneas, limpieza y validación' },
          ]
        },
        {
          number: '1.2',
          title: 'Diseño y Desarrollo de Soluciones Digitales',
          services: [
            { name: 'Diseño e Implementación de Bases de Datos Mineras', detail: 'Estructuras optimizadas para análisis geoestadístico' },
            { name: 'Automatización de Procesos con Scripts y Aplicaciones', detail: 'Flujos de trabajo inteligentes, reducción de errores' },
            { name: 'Integración de Sistemas y Conectividad de Datos', detail: 'ETL, APIs, interoperabilidad' },
          ]
        },
        {
          number: '1.3',
          title: 'Control de Calidad y Aseguramiento de Datos (QA/QC)',
          services: [
            { name: 'Diseño de Protocolos de Muestreo y QA/QC', detail: 'Optimización de procedimientos para máxima representatividad' },
            { name: 'Supervisión de Programas de Muestreo', detail: 'Validación en campo y laboratorio' },
            { name: 'Determinación de Parámetros Óptimos de Muestreo', detail: 'Peso, tamaño de incrementos, frecuencia' },
            { name: 'Análisis de Heterogeneidad y Homogenización de Muestras', detail: 'Protocolos para minimizar sesgos' },
          ]
        },
        {
          number: '1.4',
          title: 'Auditoría y Validación de Datos',
          services: [
            { name: 'Auditorías Integrales de Bases de Datos', detail: 'Consistencia, integridad y trazabilidad' },
            { name: 'Validación de Procesos QA/QC', detail: 'Cumplimiento de estándares internacionales' },
            { name: 'Reconciliación de Datos Mina-Laboratorio-Planta', detail: 'Identificación y corrección de discrepancias' },
          ]
        },
        {
          number: '1.5',
          title: 'Reportabilidad y Business Intelligence',
          services: [
            { name: 'Dashboards y Visualización de Datos Mineros', detail: 'Herramientas para toma de decisiones' },
            { name: 'Generación Automatizada de Reportes', detail: 'KPI, tendencias, alertas tempranas' },
            { name: 'Análisis Predictivo para Optimización Operacional', detail: 'Modelos machine learning' },
          ]
        },
        {
          number: '1.6',
          title: 'Business Analytics & Big Data Minero',
          services: [
            { name: 'Sistemas de Business Intelligence para Minería', detail: 'Dashboards, KPI operacionales, tendencias' },
            { name: 'Análisis Predictivo de Datos Mineros', detail: 'Pronósticos de producción, costos y eficiencia' },
            { name: 'Big Data aplicado a Operaciones Mineras', detail: 'Integración de datos multisource: geológicos, operacionales, económicos' },
          ]
        },
        {
          number: '1.7',
          title: 'Machine Learning & AI para Minería',
          services: [
            { name: 'Modelos Predictivos para Geología y Geoestadística', detail: 'Clasificación de mineralización, detección de anomalías' },
            { name: 'Algoritmos de ML para Geometalurgia', detail: 'Predicción de recuperación, optimización de blending' },
            { name: 'Computer Vision aplicado a Núcleos y Taludes', detail: 'Automatización de mapeo geológico con IA' },
          ]
        },
        {
          number: '1.8',
          title: 'Automatización & Desarrollo Tecnológico',
          services: [
            { name: 'Desarrollo de Software Minero Personalizado', detail: 'Soluciones a medida en Python, R, SQL' },
            { name: 'Automatización de Procesos con IA', detail: 'Flujos de trabajo inteligentes, reducción de errores' },
            { name: 'Integración de Herramientas Sectoriales con ML', detail: 'Complemento a Datamine, Vulcan, Leapfrog' },
          ]
        },
        {
          number: '1.9',
          title: 'Diseño y Optimización de Operaciones Mineras',
          services: [
            { name: 'Diseño y Planificación Integral de Minas', detail: 'Cielo abierto/subterránea, secuenciamiento óptimo' },
            { name: 'Estudios de Transición Rajo-Subterráneo', detail: 'Análisis técnico-económico, mitigación de riesgos' },
            { name: 'Optimización Integrada de Perforación-Voladura-Fragmentación', detail: 'Reducción de costos, mejora en eficiencia de carga/transporte' },
          ]
        },
        {
          number: '1.10',
          title: 'Gestión de Costos y Competitividad',
          services: [
            { name: 'Benchmarking de Costos Operacionales y de Capital', detail: 'Comparación sectorial, identificación de brechas' },
            { name: 'Modelamiento Financiero Avanzado', detail: 'Evaluación de escenarios, análisis de sensibilidad' },
            { name: 'Estudios de Competitividad Operacional', detail: 'KPIs comparativos, mejores prácticas globales' },
          ]
        },
        {
          number: '1.11',
          title: 'Optimización de Flotas y Logística',
          services: [
            { name: 'Simulación y Optimización de Flotas de Carga/Transporte', detail: 'Algoritmos para minimizar tiempos de ciclo' },
            { name: 'Análisis de Tráfico en Rampas y Circuitos', detail: 'Reducción de congestiones, mejora de productividad' },
            { name: 'Gestión Dinámica de Ley de Corte', detail: 'Maximización de valor del activo, estrategias de blending' },
          ]
        },
        {
          number: '1.12',
          title: 'Mejora Continua y Gestión del Cambio',
          services: [
            { name: 'Implementación de Programas de Mejora Continua', detail: 'Metodologías Lean-Six Sigma aplicadas a minería' },
            { name: 'Gestión de Procesos y Calidad', detail: 'Estandarización, control estadístico, reducción de variabilidad' },
            { name: 'Workshops de Innovación Operacional', detail: 'Generación e implementación de ideas con equipos multidisciplinarios' },
          ]
        },
      ],
      benefits: [
        'Enfoque 100% minero – Soluciones adaptadas a desafíos específicos del sector',
        'Tecnología aplicada – Uso de IA, automatización y herramientas geoestadísticas',
        'Reducción de incertidumbre – Datos confiables para estimación de recursos',
        'Cumplimiento normativo – Preparación para auditorías externas (JORC, NI 43-101)',
        'Precisión aumentada: Reduce incertidumbre en decisiones geológicas/operacionales',
        'Eficiencia operacional: Automatización de procesos repetitivos',
        'Aumento de productividad: Mejoras medibles en toneladas/hora y costos por Ton',
        'Toma de decisiones basada en datos: Modelos financieros y operacionales robustos',
      ]
    },
    {
      id: 2,
      icon: Compass,
      title: 'Exploración Geológica y Estimación de Recursos',
      subtitle: 'Desde Exploración hasta Certificación de Recursos',
      description: 'Servicios integrados que abarcan desde la exploración greenfield/brownfield hasta el modelamiento 3D y certificación de recursos con estándares internacionales.',
      color: '#8B4114',
      categories: [
        {
          number: '2.1',
          title: 'Generación y Evaluación de Targets',
          services: [
            { name: 'Identificación de Prospectos a Escala Mina, Distrital y Regional', detail: '' },
            { name: 'Evaluación Sistemática de Targets de Exploración', detail: '' },
            { name: 'Modelamiento Predictivo de Zonas Mineralizadas', detail: '' },
          ]
        },
        {
          number: '2.2',
          title: 'Mapeo Geológico Avanzado',
          services: [
            { name: 'Cartografía Integral: Litología, Mineralización y Alteración', detail: 'Campo, taludes y galerías – todas las escalas' },
            { name: 'Interpretación Estructural y Estratigráfica de Alto Detalle', detail: '' },
            { name: 'Modelamiento 3D de Geometrías de Variables Geológicas', detail: '' },
          ]
        },
        {
          number: '2.3',
          title: 'Programas de Muestreo',
          services: [
            { name: 'Diseño de Campañas de Muestreo Representativo', detail: 'Rocas, sedimentos, taludes y galerías' },
            { name: 'Supervisión Técnica de Muestreo y Medición Geoquímico/Geofísico', detail: '' },
            { name: 'Optimización de Programas de Perforación Exploratoria', detail: '' },
          ]
        },
        {
          number: '2.4',
          title: 'Integración de Datos Exploratorios',
          services: [
            { name: 'Análisis Multivariable de Controles Geológicos', detail: '' },
            { name: 'Modelamiento Conceptual de Yacimientos', detail: '' },
            { name: 'Caracterización Geometalúrgica Temprana', detail: '' },
          ]
        },
        {
          number: '2.5',
          title: 'Registro Digital Avanzado',
          services: [
            { name: 'Geologging Digital Integrado', detail: 'Litología, mineralización, alteración, geotecnia' },
            { name: 'Sistemas de Captura y Validación de Datos en Tiempo Real', detail: '' },
          ]
        },
        {
          number: '2.6',
          title: 'Servicios Especializados de Exploración',
          services: [
            { name: 'Diseño de Estrategias de Exploración Regional', detail: '' },
            { name: 'Evaluación de Potencial Mineral en Áreas Brownfield', detail: '' },
            { name: 'Asesoría en Exploración Greenfield', detail: '' },
          ]
        },
        {
          number: '2.7',
          title: 'Modelamiento Geológico 3D Integral',
          services: [
            { name: 'Modelamiento 3D Avanzado de Variables Geológicas', detail: 'Litología, alteración, mineralización, dominios geometalúrgicos' },
            { name: 'Caracterización de Yacimientos Complejos', detail: '' },
            { name: 'Integración de Datos Multidisciplinarios en Modelos 3D', detail: '' },
          ]
        },
        {
          number: '2.8',
          title: 'Geoestadística Aplicada',
          services: [
            { name: 'Análisis Estadísticos Multivariables para Datos Mineros', detail: '' },
            { name: 'Estudios Variográficos Avanzados', detail: 'Anisotropías, transformaciones gaussianas' },
            { name: 'Simulación Condicional de Escenarios Geológicos y de Leyes', detail: '' },
          ]
        },
        {
          number: '2.9',
          title: 'Estimación de Recursos y Reservas',
          services: [
            { name: 'Estimación Geoestadística Multivariable', detail: 'Leyes principales, subproductos, contaminantes' },
            { name: 'Cálculo de Cut-Off Dinámico y Valorización Económica de Bloques', detail: '' },
            { name: 'Modelamiento Predictivo de Parámetros Geometalúrgicos', detail: '' },
          ]
        },
        {
          number: '2.10',
          title: 'Validación y Reconciliación',
          services: [
            { name: 'Auditoría Técnica de Modelos Geológicos', detail: '' },
            { name: 'Diagnóstico y Optimización de Reconciliación Mina-Planta', detail: '' },
            { name: 'Validación de Estimaciones con Métodos Cruzados', detail: '' },
          ]
        },
        {
          number: '2.11',
          title: 'Servicios Regulatorios',
          services: [
            { name: 'Elaboración de Informes NI 43-101/JORC/KOMIRS', detail: '' },
            { name: 'Declaración de Recursos y Reservas por Qualified Persons', detail: '' },
            { name: 'Asesoría en Cumplimiento de Códigos Mineros Internacionales', detail: '' },
          ]
        },
        {
          number: '2.12',
          title: 'Optimización de Modelos de Recursos',
          services: [
            { name: 'Regionalización de Parámetros Metalúrgicos', detail: '' },
            { name: 'Análisis de Sensibilidad Económica de Modelos', detail: '' },
            { name: 'Diseño de Estrategias de Explotación Basadas en Modelos', detail: '' },
          ]
        },
      ],
      benefits: [
        'Enfoque multiescala que integra desde detalles de mina hasta visión regional',
        'Metodologías estandarizadas con control de calidad incorporado',
        'Tecnología aplicada en adquisición e interpretación de datos',
        'Enfoque geometalúrgico temprano para valorización de prospectos',
        'Metodologías validadas con control de calidad en cada etapa',
        'Tecnología de punta en software de modelamiento (Leapfrog, Datamine, Vulcan)',
        'Visión práctica para toma de decisiones operacionales',
      ]
    },
    {
      id: 3,
      icon: Settings,
      title: 'Planeamiento Minero y Optimización Geometalúrgica',
      subtitle: 'Planificación Integral y Mine-to-Mill',
      description: 'Soluciones que integran planificación minera estratégica, geotecnia y optimización geometalúrgica para maximizar valor y recuperación.',
      color: '#C7482C',
      categories: [
        {
          number: '3.1',
          title: 'Planificación Minera Estratégica',
          services: [
            { name: 'Planificación Minera a Corto, Mediano y Largo Plazo', detail: 'Cielo abierto y subterránea' },
            { name: 'Optimización de Secuencias de Extracción', detail: 'Maximización de valor, reducción de dilución' },
            { name: 'Diseño y Validación de Modelos de Planificación', detail: 'Escenarios técnico-económicos' },
          ]
        },
        {
          number: '3.2',
          title: 'Geología y Ore Control',
          services: [
            { name: 'Diseño e Implementación de Sistemas Ore Control', detail: 'Dilución, pérdidas, recuperación' },
            { name: 'Caracterización Geológica de Blastholes y Frentes', detail: 'Litología, alteración, variables geometalúrgicas' },
            { name: 'Mapeo Geológico de Alta Precisión', detail: 'Taludes, galerías, canales' },
          ]
        },
        {
          number: '3.3',
          title: 'Geotecnia Minera e Hidrogeología',
          services: [
            { name: 'Análisis de Riesgos Geotécnicos', detail: 'Estabilidad de taludes, tajo abierto y subterráneo' },
            { name: 'Diseño de Infraestructura Crítica', detail: 'Túneles, presas de relaves, botaderos, pilas de lixiviación' },
            { name: 'Estudios Hidrogeológicos', detail: 'Flujo de aguas subterráneas, drenaje minero' },
          ]
        },
        {
          number: '3.4',
          title: 'Monitoreo y Gestión de Riesgos Geotécnicos',
          services: [
            { name: 'Sistemas de Monitoreo en Tiempo Real', detail: 'Deformaciones, presión de agua, movimientos' },
            { name: 'Instrumentación Geotécnica', detail: 'Inclinómetros, piezómetros, extensómetros' },
            { name: 'Análisis Predictivo de Estabilidad', detail: 'Modelos numéricos, alertas tempranas' },
          ]
        },
        {
          number: '3.5',
          title: 'Optimización Operacional de Planificación',
          services: [
            { name: 'Revisión y Auditoría de Planes Mineros', detail: 'Ajustes basados en datos operativos' },
            { name: 'Simulación de Escenarios de Extracción', detail: 'Sensibilidad económica y técnica' },
            { name: 'Gestión Integral de Relaves y Material Estéril', detail: 'Diseño sostenible y seguro' },
          ]
        },
        {
          number: '3.6',
          title: 'Diseño e Implementación de Geometalurgia Operacional',
          services: [
            { name: 'Modelamiento Geometalúrgico Predictivo', detail: 'PCA, T-SNE, Dominios, UGM, variables geometalúrgicas' },
            { name: 'Diseño de Campañas Geo-Metalúrgicas', detail: 'Sondajes, muestreo representativo, pruebas' },
            { name: 'Caracterización Mineralógica Avanzada', detail: 'Liberación, asociaciones minerales, ganga reactiva' },
          ]
        },
        {
          number: '3.7',
          title: 'Optimización Integrada Mine-to-Mill',
          services: [
            { name: 'Programas de Optimización Mina-Planta', detail: 'Balances metalúrgicos, ajuste de parámetros' },
            { name: 'Control de Grado y Parámetros Geometalúrgicos', detail: 'Blending estratégico, reducción de variabilidad' },
            { name: 'Análisis de Rendimiento Operacional', detail: 'Big Data mina-planta, correlación con UGM' },
          ]
        },
        {
          number: '3.8',
          title: 'Pruebas y Validación Metalúrgica',
          services: [
            { name: 'Pruebas de Laboratorio y Planta Piloto', detail: 'Flotación, lixiviación, moliendabilidad' },
            { name: 'Estudios de Variabilidad y Composites', detail: 'Escalamiento industrial por UGM' },
            { name: 'Evaluación de Residuos y Subproductos', detail: 'Recuperación de metales críticos/preciosos' },
          ]
        },
        {
          number: '3.9',
          title: 'Estudios Técnico-Económicos Geometalúrgicos',
          services: [
            { name: 'Benchmarking y Banco de Pruebas Comparativas', detail: 'Identificación de brechas de recuperación' },
            { name: 'Modelos Financieros para Proyectos Geometalúrgicos', detail: 'ROI, VAN, hoja de ruta' },
            { name: 'Recomendaciones para Incrementar Valor', detail: 'Nuevos procesos, optimización de circuitos' },
          ]
        },
      ],
      benefits: [
        'Enfoque integrado – Combina planificación minera, geotecnia y geología',
        'Tecnología aplicada – Uso de drones, LiDAR, modelamiento 3D y monitoreo inteligente',
        'Reducción de riesgos – Soluciones probadas para estabilidad y gestión de agua',
        'Maximización de valor – Optimización de leyes, recuperación y costos',
        'Conecta geología, minería y procesamiento para maximizar recuperación',
        'Uso de IA para predicción de leyes y comportamiento metalúrgico',
        'Reducción de costos – Minimiza energía, reactivos y pérdidas de mineral valioso',
        'Sostenibilidad – Recuperación de metales secundarios y reducción de residuos',
      ]
    },
    {
      id: 4,
      icon: FileSearch,
      title: 'Evaluación Económica y Gestión Estratégica de Riesgos',
      subtitle: 'Due Diligence, Viabilidad y Gestión del Negocio',
      description: 'Servicios integrales de evaluación técnico-económica, gestión de riesgos y asesoría estratégica para optimización del negocio minero.',
      color: '#8B4114',
      categories: [
        {
          number: '4.1',
          title: 'Evaluación Técnica y Financiera de Proyectos',
          services: [
            { name: 'Due Diligence Minero & Revisión de Proyectos', detail: 'Auditorías técnicas, legales y financieras para inversión/M&A' },
            { name: 'Estudios de Viabilidad (PEA, PFS, FS)', detail: 'Evaluación técnico-económica bajo estándares internacionales – NI 43-101/JORC' },
            { name: 'Valorización Independiente de Activos Mineros', detail: 'Modelos DCF, análisis comparativos de mercado' },
          ]
        },
        {
          number: '4.2',
          title: 'Asesoría Financiera y de Riesgo',
          services: [
            { name: 'Análisis Costo-Beneficio Ajustado al Riesgo', detail: 'Escenarios probabilísticos, simulación Monte Carlo' },
            { name: 'Apoyo en Negociaciones con Inversionistas y Aseguradoras', detail: 'Estructuración de garantías, coberturas' },
            { name: 'Reactivación de Proyectos Descatalogados', detail: 'Re-evaluación con enfoque en nuevos precios/tecnologías' },
          ]
        },
        {
          number: '4.3',
          title: 'Ingeniería y Diseño Minero',
          services: [
            { name: 'Diseño y Planificación de Minas (Rajo/Subterráneo)', detail: 'Optimización de secuencias, ley de corte dinámica' },
            { name: 'Selección y Validación de Equipos', detail: 'Análisis CAPEX/OPEX, disponibilidad técnica' },
            { name: 'Auditorías de Cronogramas (Design-Build-Operate)', detail: 'Identificación de cuellos de botella, mitigación de riesgos' },
          ]
        },
        {
          number: '4.4',
          title: 'Sostenibilidad y Gestión de Cierre',
          services: [
            { name: 'Manejo Integral de Residuos Mineros', detail: 'Diseño de depósitos, estabilidad química' },
            { name: 'Planificación Estratégica de Cierre de Minas', detail: 'Certificación progresiva, pasivos ambientales' },
            { name: 'Gestión Hídrica en Operaciones Mineras', detail: 'Balance hidrológico, tratamiento de aguas' },
          ]
        },
        {
          number: '4.5',
          title: 'Optimización de Activos',
          services: [
            { name: 'Gestión del Ciclo de Vida de Activos Mineros', detail: 'Desde exploración hasta cierre' },
            { name: 'Estudios de Ingeniería Multietapa', detail: 'Conceptual → Básica → Detalle' },
          ]
        },
        {
          number: '4.6',
          title: 'Asesoría Integral para el Negocio Minero',
          services: [
            { name: 'Evaluación Estratégica de Oportunidades de Inversión', detail: '' },
            { name: 'Análisis de Viabilidad Técnica-Económica', detail: '' },
            { name: 'Desarrollo de Modelos de Negocio Adaptados al Mercado', detail: '' },
            { name: 'Soporte en Procesos Corporativos y Transaccionales', detail: '' },
          ]
        },
        {
          number: '4.7',
          title: 'Gestión de Riesgos y Control Operacional',
          services: [
            { name: 'Identificación y Evaluación de Riesgos Críticos', detail: '' },
            { name: 'Diseño de Controles Preventivos y Mitigadores', detail: '' },
            { name: 'Implementación de Matrices de Gestión de Riesgos', detail: '' },
            { name: 'Monitoreo Continuo de Factores de Riesgo', detail: '' },
          ]
        },
        {
          number: '4.8',
          title: 'Optimización Técnica y Operacional',
          services: [
            { name: 'Diagnóstico de Eficiencia en Procesos Mineros', detail: '' },
            { name: 'Reingeniería de Procesos Productivos', detail: '' },
            { name: 'Análisis y Reducción de Costos Operativos', detail: '' },
          ]
        },
        {
          number: '4.9',
          title: 'Planificación y Análisis Económico',
          services: [
            { name: 'Modelamiento Técnico-Económico de Proyectos', detail: '' },
            { name: 'Evaluación de Escenarios y Análisis de Sensibilidad', detail: '' },
            { name: 'Estimación de Confiabilidad de Planes Mineros', detail: '' },
            { name: 'Análisis Cualitativo y Cuantitativo de Riesgos', detail: '' },
          ]
        },
        {
          number: '4.10',
          title: 'Transformación Organizacional',
          services: [
            { name: 'Diseño y Rediseño de Estructuras Organizativas', detail: '' },
            { name: 'Definición de Perfiles y Competencias Clave', detail: '' },
            { name: 'Implementación de Modelos de Gestión Ágil', detail: '' },
            { name: 'Alineación Cultural con Objetivos Estratégicos', detail: '' },
          ]
        },
      ],
      benefits: [
        'Enfoque 360° – Combina expertise técnico, financiero y legal',
        'Reducción de incertidumbre – Modelos ajustados a riesgo para decisiones estratégicas',
        'Alto estándar regulatorio – Reportes alineados a NI 43-101/JORC',
        'Flexibilidad – Servicios modulares para proyectos en cualquier etapa',
        'Enfoque Integral: Soluciones que cubren todas las áreas críticas del negocio minero',
        'Expertise Sectorial: Conocimiento profundo de los desafíos específicos de la minería',
        'Adaptabilidad: Soluciones personalizadas según necesidades y escala de operación',
      ]
    },
    {
      id: 5,
      icon: GraduationCap,
      title: 'Capacitación y Soporte Técnico Especializado',
      subtitle: 'Desarrollo de Competencias y Soporte',
      description: 'Programas de capacitación especializados para equipos técnicos y directivos que potencian las capacidades operacionales.',
      color: '#C7482C',
      categories: [
        {
          number: '5.1',
          title: 'Desarrollo de Competencias Directivas',
          services: [
            { name: 'Coaching para Equipos Directivos', detail: 'Fortalecimiento de habilidades de gestión estratégica' },
            { name: 'Liderazgo', detail: 'Técnicas para la conducción efectiva de equipos operativos' },
            { name: 'Comunicación Ejecutiva', detail: 'Estrategias para una comunicación clara y efectiva en todos los niveles' },
          ]
        },
        {
          number: '5.2',
          title: 'Optimización de Operaciones Mineras',
          services: [
            { name: 'Gestión de Procesos', detail: 'Metodologías para el análisis y mejora de flujos operativos' },
            { name: 'Mejora Continua Aplicada', detail: 'Herramientas prácticas para incrementar la productividad' },
            { name: 'Python para Análisis Minero', detail: 'Aplicaciones prácticas en procesamiento de datos operacionales' },
          ]
        },
        {
          number: '5.3',
          title: 'Seguridad y Desarrollo Organizacional',
          services: [
            { name: 'Gestión Integral de SST', detail: 'Programas preventivos adaptados a riesgos mineros' },
            { name: 'Comunicación Asertiva', detail: 'Técnicas para interacciones efectivas en faenas' },
            { name: 'Inteligencia Emocional Aplicada', detail: 'Manejo de relaciones interpersonales en entornos desafiantes' },
          ]
        },
      ],
      benefits: [
        'Alto impacto operacional: Capacitaciones diseñadas para desafíos mineros',
        'Aprendizaje aplicado: Contenidos prácticos con casos reales del sector',
        'Flexibilidad modular: Programas adaptables a diferentes necesidades organizacionales',
        'Expertos sectoriales: Capacitadores con experiencia comprobada en minería',
        'Resultados medibles: Metodologías con indicadores de desempeño claros',
      ],
      features: [
        'Duración ajustable según requerimientos',
        'Modalidades presenciales y virtuales disponibles',
        'Ejercicios prácticos simulando situaciones reales',
        'Opciones de seguimiento post-capacitación',
      ],
      levels: ['Operacional (técnicos y operadores)', 'Táctico (supervisores y jefaturas)', 'Estratégico (gerencias y directivos)']
    },
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1C] pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
              alt="Operación minera"
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <motion.h1 
                className="font-['Saira_Semi_Condensed'] text-5xl md:text-6xl lg:text-7xl text-white mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Nuestros Servicios
              </motion.h1>
              
              <motion.p 
                className="font-['Montserrat'] text-xl md:text-lg text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Tecnología avanzada e inteligencia artificial que transforman datos geológicos en decisiones estratégicas de alto impacto
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="group"
                >
                  Solicita una Consulta
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Details Section */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['Saira_Semi_Condensed'] text-4xl md:text-5xl text-white mb-6">
              Soluciones Especializadas Potenciadas por IA
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              5 líneas de servicio integradas que cubren todo el ciclo de vida de proyectos mineros, combinando estimación de recursos con optimización geo-minero-metalúrgica potenciada por IA para maximizar el valor de su yacimiento.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-6">
              {allServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <AccordionItem
                    key={service.id}
                    value={`service-${service.id}`}
                    className="bg-[#252525] border border-white/10 rounded-2xl overflow-hidden"
                  >
                    {/* Service Header - Clickable */}
                    <AccordionTrigger 
                      className="p-8 md:p-12 hover:no-underline hover:bg-white/5 transition-colors [&[data-state=open]]:border-b [&[data-state=open]]:border-white/10"
                      style={{ 
                        background: `linear-gradient(135deg, ${service.color}15 0%, transparent 100%)`
                      }}
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-6 w-full text-left">
                        {/* Icon */}
                        <div 
                          className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${service.color}20` }}
                        >
                          <Icon size={40} style={{ color: service.color }} />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span 
                              className="font-['Saira_Semi_Condensed'] text-4xl opacity-40"
                              style={{ color: service.color }}
                            >
                              0{service.id}
                            </span>
                          </div>
                          <h3 className="font-['Saira_Semi_Condensed'] text-3xl md:text-4xl text-white mb-3">
                            {service.title}
                          </h3>
                          <p className="text-lg text-white/60 mb-4">
                            {service.subtitle}
                          </p>
                          <p className="text-base text-white/70 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>

                    {/* Service Categories - Collapsible Content */}
                    <AccordionContent className="p-8 md:p-12">
                    <h4 className="font-['Saira_Semi_Condensed'] text-2xl text-white mb-6">
                      Servicios Incluidos
                    </h4>
                    
                    <Accordion type="multiple" className="space-y-4">
                      {service.categories.map((category, catIndex) => (
                        <AccordionItem 
                          key={catIndex} 
                          value={`item-${service.id}-${catIndex}`}
                          className="border border-white/10 rounded-lg overflow-hidden bg-[#1C1C1C]/50"
                        >
                          <AccordionTrigger 
                            className="px-6 py-4 hover:no-underline hover:bg-white/5 transition-colors"
                          >
                            <div className="flex items-center gap-4 text-left">
                              <span 
                                className="font-['Saira_Semi_Condensed'] text-sm px-3 py-1 rounded-full"
                                style={{ 
                                  backgroundColor: `${service.color}20`,
                                  color: service.color 
                                }}
                              >
                                {category.number}
                              </span>
                              <span className="text-white">
                                {category.title}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6 pt-2">
                            <ul className="space-y-3">
                              {category.services.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-3">
                                  <CheckCircle2 
                                    size={18} 
                                    className="flex-shrink-0 mt-1"
                                    style={{ color: service.color }} 
                                  />
                                  <div>
                                    <p className="text-white/90">{item.name}</p>
                                    {item.detail && (
                                      <p className="text-sm text-white/60 mt-1">{item.detail}</p>
                                    )}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>

                    {/* Benefits */}
                    <div className="mt-12 p-6 rounded-xl border border-white/10 bg-[#1C1C1C]/50">
                      <div className="flex items-center gap-3 mb-4">
                        <Sparkles size={24} style={{ color: service.color }} />
                        <h5 className="font-['Saira_Semi_Condensed'] text-xl text-white">
                          Beneficios Clave
                        </h5>
                      </div>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, benIndex) => (
                          <li key={benIndex} className="flex items-start gap-2 text-white/70 text-sm">
                            <CheckCircle2 
                              size={16} 
                              className="flex-shrink-0 mt-0.5"
                              style={{ color: service.color }} 
                            />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                      {/* Features & Levels for Training Service */}
                      {service.features && (
                        <div className="mt-6 p-6 rounded-xl border border-white/10 bg-[#1C1C1C]/50">
                          <h5 className="font-['Saira_Semi_Condensed'] text-xl text-white mb-4">
                            Características
                          </h5>
                          <ul className="grid sm:grid-cols-2 gap-3">
                            {service.features.map((feature, featIndex) => (
                              <li key={featIndex} className="flex items-start gap-2 text-white/70 text-sm">
                                <CheckCircle2 
                                  size={16} 
                                  className="flex-shrink-0 mt-0.5"
                                  style={{ color: service.color }} 
                                />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {service.levels && (
                        <div className="mt-6 p-6 rounded-xl border border-white/10 bg-[#1C1C1C]/50">
                          <h5 className="font-['Saira_Semi_Condensed'] text-xl text-white mb-4">
                            Niveles de Capacitación
                          </h5>
                          <div className="flex flex-wrap gap-3">
                            {service.levels.map((level, levelIndex) => (
                              <span 
                                key={levelIndex}
                                className="px-4 py-2 rounded-full text-sm"
                                style={{ 
                                  backgroundColor: `${service.color}20`,
                                  color: service.color 
                                }}
                              >
                                {level}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-24 bg-gradient-to-r from-[#C7482C]/10 to-[#8B4114]/10 border border-[#C7482C]/30 rounded-2xl p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-['Saira_Semi_Condensed'] text-3xl md:text-4xl text-white mb-6">
              ¿Listo para transformar tus datos en valor estratégico?
            </h3>
            <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto">
              Nuestro equipo multidisciplinario está listo para diseñar una solución personalizada que se adapte a los desafíos específicos de tu proyecto minero.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => onNavigate && onNavigate('contact')}
                className="group"
              >
                Contacta con nuestro equipo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => onNavigate && onNavigate('home')}
              >
                Volver al inicio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
