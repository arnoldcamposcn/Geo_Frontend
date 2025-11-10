import { 
  Copy, 
  Check,
  Database,
  Brain,
  BarChart,
  Zap,
  TrendingUp,
  Shield,
  Search,
  Cpu,
  MapPin,
  Globe,
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Info,
  XCircle
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function DesignSystemPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors = {
    primary: [
      { name: 'Primary', value: '#C7482C', usage: 'Buttons, CTAs, key highlights' },
      { name: 'Primary Hover', value: '#A33922', usage: 'Button hover states' },
      { name: 'Primary Light', value: 'rgba(199, 72, 44, 0.2)', usage: 'Icon backgrounds, subtle accents' },
      { name: 'Primary Overlay', value: 'rgba(199, 72, 44, 0.65)', usage: 'Image overlays' },
    ],
    secondary: [
      { name: 'Secondary', value: '#8B4114', usage: 'Secondary accents' },
      { name: 'Secondary Dark', value: '#6B3110', usage: 'Secondary hover states' },
    ],
    backgrounds: [
      { name: 'Dark BG', value: '#1C1C1C', usage: 'Primary background' },
      { name: 'Elevated BG', value: '#252525', usage: 'Cards, elevated surfaces' },
      { name: 'Surface', value: '#0D0D0D', usage: 'Footer, deep sections' },
    ],
    text: [
      { name: 'White', value: '#FFFFFF', usage: 'Primary text' },
      { name: 'Text 90%', value: 'rgba(255, 255, 255, 0.9)', usage: 'Primary readable text' },
      { name: 'Text 70%', value: 'rgba(255, 255, 255, 0.7)', usage: 'Secondary text' },
      { name: 'Text 60%', value: 'rgba(255, 255, 255, 0.6)', usage: 'Tertiary text, captions' },
      { name: 'Text 50%', value: 'rgba(255, 255, 255, 0.5)', usage: 'Disabled text' },
    ],
    borders: [
      { name: 'Border 10%', value: 'rgba(255, 255, 255, 0.1)', usage: 'Subtle borders' },
      { name: 'Border 20%', value: 'rgba(255, 255, 255, 0.2)', usage: 'Card borders' },
    ],
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const typography = [
    { name: 'H1', element: 'h1', size: '3.75rem (60px)', lineHeight: '1.1', weight: '600', font: 'Saira SemiCondensed' },
    { name: 'H2', element: 'h2', size: '3rem (48px)', lineHeight: '1.2', weight: '600', font: 'Saira SemiCondensed' },
    { name: 'H3', element: 'h3', size: '2.25rem (36px)', lineHeight: '1.3', weight: '600', font: 'Saira SemiCondensed' },
    { name: 'H4', element: 'h4', size: '1.875rem (30px)', lineHeight: '1.3', weight: '600', font: 'Saira SemiCondensed' },
    { name: 'H5', element: 'h5', size: '1.5rem (24px)', lineHeight: '1.4', weight: '600', font: 'Saira SemiCondensed' },
    { name: 'H6', element: 'h6', size: '1.25rem (20px)', lineHeight: '1.4', weight: '600', font: 'Saira SemiCondensed' },
    { name: 'Body Large', element: 'p', size: '1.125rem (18px)', lineHeight: '1.6', weight: '400', font: 'Montserrat' },
    { name: 'Body', element: 'p', size: '1rem (16px)', lineHeight: '1.6', weight: '400', font: 'Montserrat' },
    { name: 'Body Small', element: 'p', size: '0.875rem (14px)', lineHeight: '1.5', weight: '400', font: 'Montserrat' },
    { name: 'Caption', element: 'p', size: '0.75rem (12px)', lineHeight: '1.4', weight: '400', font: 'Montserrat' },
  ];

  const icons = [
    { Icon: Database, name: 'Database' },
    { Icon: Brain, name: 'Brain' },
    { Icon: BarChart, name: 'BarChart' },
    { Icon: Zap, name: 'Zap' },
    { Icon: TrendingUp, name: 'TrendingUp' },
    { Icon: Shield, name: 'Shield' },
    { Icon: Search, name: 'Search' },
    { Icon: Cpu, name: 'Cpu' },
    { Icon: MapPin, name: 'MapPin' },
    { Icon: Globe, name: 'Globe' },
    { Icon: ArrowRight, name: 'ArrowRight' },
    { Icon: Mail, name: 'Mail' },
    { Icon: Phone, name: 'Phone' },
    { Icon: CheckCircle2, name: 'CheckCircle2' },
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1C] pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-[#252525] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge variant="outline" className="mb-6 border-[#C7482C]/50 text-[#C7482C]">
              Sistema de Diseño v1.0
            </Badge>
            <h1 className="text-5xl md:text-6xl text-white mb-6">
              Sistema de Diseño GeoPeruvian
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Una colección completa de componentes reutilizables, tokens de diseño y guías para construir interfaces consistentes y profesionales en todos los productos digitales de GeoPeruvian.
            </p>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl text-white mb-4">Paleta de Colores</h2>
            <p className="text-white/70 max-w-3xl">
              Nuestro sistema de colores crea jerarquía, comunica la identidad de marca y asegura accesibilidad en todos los puntos de contacto.
            </p>
          </div>

          <div className="space-y-12">
            {/* Primary Colors */}
            <div>
              <h3 className="text-2xl text-white mb-6">Colores Primarios</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {colors.primary.map((color, index) => (
                  <div key={index} className="bg-[#252525] border border-white/10 rounded-lg overflow-hidden">
                    <div 
                      className="h-32 relative group cursor-pointer"
                      style={{ backgroundColor: color.value }}
                      onClick={() => copyToClipboard(color.value)}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        {copiedColor === color.value ? (
                          <Check className="text-white" size={24} />
                        ) : (
                          <Copy className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                        )}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="text-white mb-1">{color.name}</h4>
                      <p className="text-[#C7482C] text-sm mb-2">{color.value}</p>
                      <p className="text-white/60 text-sm">{color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Colors */}
            <div>
              <h3 className="text-2xl text-white mb-6">Colores Secundarios</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {colors.secondary.map((color, index) => (
                  <div key={index} className="bg-[#252525] border border-white/10 rounded-lg overflow-hidden">
                    <div 
                      className="h-32 relative group cursor-pointer"
                      style={{ backgroundColor: color.value }}
                      onClick={() => copyToClipboard(color.value)}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        {copiedColor === color.value ? (
                          <Check className="text-white" size={24} />
                        ) : (
                          <Copy className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                        )}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="text-white mb-1">{color.name}</h4>
                      <p className="text-[#C7482C] text-sm mb-2">{color.value}</p>
                      <p className="text-white/60 text-sm">{color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backgrounds */}
            <div>
              <h3 className="text-2xl text-white mb-6">Fondos</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {colors.backgrounds.map((color, index) => (
                  <div key={index} className="bg-[#252525] border border-white/10 rounded-lg overflow-hidden">
                    <div 
                      className="h-32 relative group cursor-pointer border border-white/5"
                      style={{ backgroundColor: color.value }}
                      onClick={() => copyToClipboard(color.value)}
                    >
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors flex items-center justify-center">
                        {copiedColor === color.value ? (
                          <Check className="text-white" size={24} />
                        ) : (
                          <Copy className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                        )}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="text-white mb-1">{color.name}</h4>
                      <p className="text-[#C7482C] text-sm mb-2">{color.value}</p>
                      <p className="text-white/60 text-sm">{color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Text Colors */}
            <div>
              <h3 className="text-2xl text-white mb-6">Colores de Texto</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {colors.text.map((color, index) => (
                  <div key={index} className="bg-[#252525] border border-white/10 rounded-lg p-6">
                    <div className="mb-4">
                      <p className="text-2xl" style={{ color: color.value }}>Aa</p>
                    </div>
                    <h4 className="text-white mb-1">{color.name}</h4>
                    <button 
                      onClick={() => copyToClipboard(color.value)}
                      className="text-[#C7482C] text-sm mb-2 hover:underline flex items-center gap-1"
                    >
                      {color.value}
                      {copiedColor === color.value ? <Check size={12} /> : <Copy size={12} />}
                    </button>
                    <p className="text-white/60 text-sm">{color.usage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-24 bg-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl text-white mb-4">Tipografía</h2>
            <p className="text-white/70 max-w-3xl">
              Tipografía clara y legible que equilibra la estética moderna con jerarquía funcional.
            </p>
          </div>

          <div className="space-y-8">
            {typography.map((type, index) => (
              <div key={index} className="bg-[#1C1C1C] border border-white/10 rounded-lg p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    {type.element === 'h1' && <h1 className="text-white">From Data to Deposit Value</h1>}
                    {type.element === 'h2' && <h2 className="text-white">Mining Intelligence</h2>}
                    {type.element === 'h3' && <h3 className="text-white">AI-Powered Exploration</h3>}
                    {type.element === 'h4' && <h4 className="text-white">Resource Optimization</h4>}
                    {type.element === 'h5' && <h5 className="text-white">Geological Modeling</h5>}
                    {type.element === 'h6' && <h6 className="text-white">Data Analytics</h6>}
                    {type.element === 'p' && type.name.includes('Large') && (
                      <p className="text-lg text-white">Transforming geological data into strategic decisions through advanced analytics.</p>
                    )}
                    {type.element === 'p' && type.name === 'Body' && (
                      <p className="text-white">Combining mining expertise with cutting-edge technology to optimize every stage of the value chain.</p>
                    )}
                    {type.element === 'p' && type.name === 'Body Small' && (
                      <p className="text-sm text-white">Our platform delivers real-time insights for better decision-making.</p>
                    )}
                    {type.element === 'p' && type.name === 'Caption' && (
                      <p className="text-xs text-white/70">Updated October 2025</p>
                    )}
                  </div>
                  <div className="space-y-2 text-white/70">
                    <p><span className="text-white/90">Name:</span> {type.name}</p>
                    <p><span className="text-white/90">Size:</span> {type.size}</p>
                    <p><span className="text-white/90">Line Height:</span> {type.lineHeight}</p>
                    <p><span className="text-white/90">Weight:</span> {type.weight}</p>
                    <p><span className="text-white/90">Font:</span> {type.font}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl text-white mb-4">Botones</h2>
            <p className="text-white/70 max-w-3xl">
              Elementos interactivos diseñados para claridad y acción del usuario, con variantes distintas para diferentes contextos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Primary Button */}
            <div className="bg-[#252525] border border-white/10 rounded-lg p-8">
              <h3 className="text-xl text-white mb-6">Botón Primario</h3>
              <div className="space-y-4">
                <Button size="sm">Small Button</Button>
                <Button>Default Button</Button>
                <Button size="lg">Large Button</Button>
                <Button size="lg" className="w-full">Full Width</Button>
                <Button disabled>Disabled</Button>
              </div>
              <Separator className="my-6" />
              <p className="text-white/60 text-sm">
                Usage: Primary actions, CTAs, form submissions
              </p>
            </div>

            {/* Secondary Button */}
            <div className="bg-[#252525] border border-white/10 rounded-lg p-8">
              <h3 className="text-xl text-white mb-6">Botón Secundario</h3>
              <div className="space-y-4">
                <Button variant="outline" size="sm">Small Button</Button>
                <Button variant="outline">Default Button</Button>
                <Button variant="outline" size="lg">Large Button</Button>
                <Button variant="outline" size="lg" className="w-full">Full Width</Button>
                <Button variant="outline" disabled>Disabled</Button>
              </div>
              <Separator className="my-6" />
              <p className="text-white/60 text-sm">
                Usage: Secondary actions, cancel buttons
              </p>
            </div>

            {/* Ghost Button */}
            <div className="bg-[#252525] border border-white/10 rounded-lg p-8">
              <h3 className="text-xl text-white mb-6">Botón Fantasma</h3>
              <div className="space-y-4">
                <Button variant="ghost" size="sm">Small Button</Button>
                <Button variant="ghost">Default Button</Button>
                <Button variant="ghost" size="lg">Large Button</Button>
                <Button variant="link" className="text-[#C7482C]">
                  Link Button
                  <ArrowRight className="ml-1" size={16} />
                </Button>
                <Button variant="ghost" disabled>Disabled</Button>
              </div>
              <Separator className="my-6" />
              <p className="text-white/60 text-sm">
                Usage: Tertiary actions, navigation links
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-24 bg-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl text-white mb-4">Tarjetas</h2>
            <p className="text-white/70 max-w-3xl">
              Contenedores de contenido modulares para mostrar servicios, proyectos e información en formato consistente.
            </p>
          </div>

          <div className="space-y-12">
            {/* Service Cards */}
            <div>
              <h3 className="text-2xl text-white mb-6">Tarjeta de Servicio</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#1C1C1C] border border-white/10 rounded-lg p-8 hover:border-[#C7482C] transition-colors group">
                  <div className="w-16 h-16 bg-[#C7482C]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#C7482C]/30 transition-colors">
                    <Database className="text-[#C7482C]" size={32} />
                  </div>
                  <h4 className="text-2xl text-white mb-3">Geological Data Management</h4>
                  <p className="text-white/70 mb-6">
                    Centralized platforms for organizing and analyzing geological data at scale.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-[#C7482C] hover:text-[#C7482C]/80 group/btn">
                    Learn more
                    <ArrowRight className="ml-1 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </div>

                <div className="bg-[#1C1C1C] border border-white/10 rounded-lg p-8 hover:border-[#C7482C] transition-colors group">
                  <div className="w-16 h-16 bg-[#C7482C]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#C7482C]/30 transition-colors">
                    <Brain className="text-[#C7482C]" size={32} />
                  </div>
                  <h4 className="text-2xl text-white mb-3">AI-Powered Exploration</h4>
                  <p className="text-white/70 mb-6">
                    Machine learning models that identify high-potential zones and optimize drilling.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-[#C7482C] hover:text-[#C7482C]/80 group/btn">
                    Learn more
                    <ArrowRight className="ml-1 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </div>

                <div className="bg-[#1C1C1C] border border-white/10 rounded-lg p-8 hover:border-[#C7482C] transition-colors group">
                  <div className="w-16 h-16 bg-[#C7482C]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#C7482C]/30 transition-colors">
                    <Shield className="text-[#C7482C]" size={32} />
                  </div>
                  <h4 className="text-2xl text-white mb-3">Sustainability Analytics</h4>
                  <p className="text-white/70 mb-6">
                    Environmental monitoring and ESG reporting for responsible mining practices.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-[#C7482C] hover:text-[#C7482C]/80 group/btn">
                    Learn more
                    <ArrowRight className="ml-1 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Project Card */}
            <div>
              <h3 className="text-2xl text-white mb-6">Tarjeta de Proyecto</h3>
              <div className="bg-[#1C1C1C] border border-white/10 rounded-lg overflow-hidden hover:border-[#C7482C]/50 transition-colors">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-auto">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1523848309072-c199db53f137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYxNTc3NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Mining project"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#C7482C]/60"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="border-[#C7482C]/50 text-[#C7482C]">
                        AI Exploration
                      </Badge>
                      <Badge variant="outline" className="border-[#C7482C]/50 text-[#C7482C]">
                        Resource Optimization
                      </Badge>
                    </div>
                    <h4 className="text-3xl text-white mb-2">Copper Deposit Optimization</h4>
                    <p className="text-white/60 mb-6">Northern Peru • 8 months</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-[#252525] border border-white/10 rounded-lg p-4">
                        <div className="text-2xl text-[#C7482C] mb-1">32%</div>
                        <div className="text-sm text-white/60">Drilling reduction</div>
                      </div>
                      <div className="bg-[#252525] border border-white/10 rounded-lg p-4">
                        <div className="text-2xl text-[#C7482C] mb-1">94%</div>
                        <div className="text-sm text-white/60">Grade accuracy</div>
                      </div>
                      <div className="bg-[#252525] border border-white/10 rounded-lg p-4">
                        <div className="text-2xl text-[#C7482C] mb-1">$2.4M</div>
                        <div className="text-sm text-white/60">Cost savings</div>
                      </div>
                      <div className="bg-[#252525] border border-white/10 rounded-lg p-4">
                        <div className="text-2xl text-[#C7482C] mb-1">-45%</div>
                        <div className="text-sm text-white/60">Time to discovery</div>
                      </div>
                    </div>
                    <Button variant="link" className="p-0 h-auto text-[#C7482C] hover:text-[#C7482C]/80 group">
                      View case study
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Icons */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl text-white mb-4">Conjunto de Iconos</h2>
            <p className="text-white/70 max-w-3xl">
              Iconos Lucide React para minería, IA, analítica de datos y elementos generales de interfaz. Todos los iconos son de 24px por defecto y escalan proporcionalmente.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {icons.map((item, index) => {
              const Icon = item.Icon;
              return (
                <div
                  key={index}
                  className="bg-[#252525] border border-white/10 rounded-lg p-6 hover:border-[#C7482C]/50 transition-colors group text-center"
                >
                  <div className="w-12 h-12 mx-auto bg-[#C7482C]/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#C7482C]/30 transition-colors">
                    <Icon className="text-[#C7482C]" size={24} />
                  </div>
                  <p className="text-xs text-white/60">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-24 bg-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl text-white mb-4">Diseños de Sección</h2>
            <p className="text-white/70 max-w-3xl">
              Secciones de página reutilizables para construir diseños consistentes en todas las páginas.
            </p>
          </div>

          <div className="space-y-8">
            {/* Hero Block */}
            <div>
              <h3 className="text-2xl text-white mb-4">Hero Block</h3>
              <div className="relative min-h-[40vh] flex items-center overflow-hidden rounded-lg">
                <div className="absolute inset-0 z-0">
                  <div className="relative w-full h-full">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1565946802459-012b39272916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBzaXRlJTIwYWVyaWFsfGVufDF8fHx8MTc2MTU2NDg5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Hero background"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#C7482C]/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
                  </div>
                </div>
                <div className="relative z-10 py-16 px-8">
                  <h1 className="text-5xl text-white mb-4">From Data to Deposit Value</h1>
                  <p className="text-xl text-white/90 max-w-2xl mb-6">
                    Transforming geological data into strategic decisions through AI and advanced analytics.
                  </p>
                  <Button size="lg">Get Started</Button>
                </div>
              </div>
            </div>

            {/* Split Image/Text */}
            <div>
              <h3 className="text-2xl text-white mb-4">Split Image/Text</h3>
              <div className="bg-[#1C1C1C] border border-white/10 rounded-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-auto">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1759910313735-5f4e5211fc63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9sb2dpY2FsJTIwc3VydmV5fGVufDF8fHx8MTc2MTU2OTAwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Feature"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#C7482C]/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <h3 className="text-3xl text-white mb-4">Our Mission</h3>
                    <p className="text-white/70 mb-6">
                      To empower mining companies worldwide with data-driven insights and AI innovation that maximize resource efficiency, reduce environmental impact, and create sustainable value.
                    </p>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Row */}
            <div>
              <h3 className="text-2xl text-white mb-4">Metrics Row</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { value: '50+', label: 'Projects Completed' },
                  { value: '12', label: 'Countries' },
                  { value: '$45M+', label: 'Client Savings' },
                  { value: '98%', label: 'Client Satisfaction' },
                ].map((stat, index) => (
                  <div key={index} className="bg-[#1C1C1C] border border-white/10 rounded-lg p-6 text-center">
                    <div className="text-5xl text-[#C7482C] mb-2">{stat.value}</div>
                    <div className="text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing & Grid */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl text-white mb-4">Espaciado y Sistema de Grilla</h2>
            <p className="text-white/70 max-w-3xl">
              El espaciado consistente crea ritmo y mejora la legibilidad en todos los componentes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Spacing Scale */}
            <div className="bg-[#252525] border border-white/10 rounded-lg p-8">
              <h3 className="text-xl text-white mb-6">Spacing Scale</h3>
              <div className="space-y-4">
                {[
                  { name: 'xs', value: '0.5rem (8px)' },
                  { name: 'sm', value: '0.75rem (12px)' },
                  { name: 'md', value: '1rem (16px)' },
                  { name: 'lg', value: '1.5rem (24px)' },
                  { name: 'xl', value: '2rem (32px)' },
                  { name: '2xl', value: '3rem (48px)' },
                  { name: '3xl', value: '4rem (64px)' },
                ].map((space, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-20 text-white/70 text-sm">{space.name}</div>
                    <div className="h-8 bg-[#C7482C]/50 rounded" style={{ width: space.value }}></div>
                    <div className="text-white/60 text-sm">{space.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid System */}
            <div className="bg-[#252525] border border-white/10 rounded-lg p-8">
              <h3 className="text-xl text-white mb-6">Grid System</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white/70 mb-2 text-sm">12-Column Grid</p>
                  <div className="grid grid-cols-12 gap-2">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="h-8 bg-[#C7482C]/30 rounded"></div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-white/70 mb-2 text-sm">3-Column Layout</p>
                  <div className="grid grid-cols-3 gap-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="h-16 bg-[#C7482C]/30 rounded"></div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-white/70 mb-2 text-sm">2-Column Layout</p>
                  <div className="grid grid-cols-2 gap-6">
                    {Array.from({ length: 2 }).map((_, i) => (
                      <div key={i} className="h-16 bg-[#C7482C]/30 rounded"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl text-white mb-4">Badges</h2>
            <p className="text-white/70 max-w-3xl">
              Etiquetas para categorización, estados y metadata.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#252525] border border-white/10 rounded-lg p-8">
              <h3 className="text-xl text-white mb-6">Default Badges</h3>
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>

            <div className="bg-[#252525] border border-white/10 rounded-lg p-8">
              <h3 className="text-xl text-white mb-6">Status Badges</h3>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-green-600">Active</Badge>
                <Badge className="bg-yellow-600">Pending</Badge>
                <Badge className="bg-blue-600">In Progress</Badge>
                <Badge className="bg-red-600">Cancelled</Badge>
              </div>
            </div>

            <div className="bg-[#252525] border border-white/10 rounded-lg p-8">
              <h3 className="text-xl text-white mb-6">Category Badges</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="border-[#C7482C]/50 text-[#C7482C]">
                  AI Exploration
                </Badge>
                <Badge variant="outline" className="border-[#C7482C]/50 text-[#C7482C]">
                  Data Management
                </Badge>
                <Badge variant="outline" className="border-[#C7482C]/50 text-[#C7482C]">
                  Sustainability
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms */}
      <section className="py-24 bg-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl text-white mb-4">Formularios</h2>
            <p className="text-white/70 max-w-3xl">
              Elementos de formulario accesibles y consistentes para captura de datos del usuario.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Fields */}
            <div className="bg-[#1C1C1C] border border-white/10 rounded-lg p-8">
              <h3 className="text-xl text-white mb-6">Input Fields</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@ejemplo.com" />
                </div>
                <div>
                  <Label htmlFor="email-error">Email con Error</Label>
                  <Input id="email-error" type="email" placeholder="tu@ejemplo.com" className="border-red-500" />
                  <p className="text-sm text-red-500 mt-1">Por favor ingresa un email válido</p>
                </div>
                <div>
                  <Label htmlFor="disabled">Disabled Input</Label>
                  <Input id="disabled" type="text" placeholder="Campo deshabilitado" disabled />
                </div>
              </div>
            </div>

            {/* Textarea */}
            <div className="bg-[#1C1C1C] border border-white/10 rounded-lg p-8">
              <h3 className="text-xl text-white mb-6">Textarea</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Escribe tu mensaje aquí..."
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="message-disabled">Textarea Deshabilitado</Label>
                  <Textarea 
                    id="message-disabled" 
                    placeholder="Campo deshabilitado..."
                    rows={3}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* States & Feedback */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl text-white mb-4">Estados y Feedback</h2>
            <p className="text-white/70 max-w-3xl">
              Indicadores visuales para comunicar estados del sistema y respuestas a acciones del usuario.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Loading States */}
            <div className="bg-[#252525] border border-white/10 rounded-lg p-8">
              <h3 className="text-xl text-white mb-6">Loading States</h3>
              <div className="space-y-4">
                <Button disabled>
                  <Loader2 className="mr-2 animate-spin" size={16} />
                  Cargando...
                </Button>
                <div className="flex items-center gap-3 text-white/70">
                  <Loader2 className="animate-spin text-[#C7482C]" size={24} />
                  <span>Procesando datos...</span>
                </div>
              </div>
            </div>

            {/* Alert States */}
            <div className="bg-[#252525] border border-white/10 rounded-lg p-8">
              <h3 className="text-xl text-white mb-6">Alert States</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-green-600/10 border border-green-600/30 rounded-lg">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-green-500 font-medium">Éxito</p>
                    <p className="text-white/70 text-sm">Operación completada correctamente</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-blue-600/10 border border-blue-600/30 rounded-lg">
                  <Info className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-blue-500 font-medium">Información</p>
                    <p className="text-white/70 text-sm">Datos adicionales disponibles</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-yellow-600/10 border border-yellow-600/30 rounded-lg">
                  <AlertCircle className="text-yellow-500 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-yellow-500 font-medium">Advertencia</p>
                    <p className="text-white/70 text-sm">Acción requiere atención</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-red-600/10 border border-red-600/30 rounded-lg">
                  <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-red-500 font-medium">Error</p>
                    <p className="text-white/70 text-sm">Algo salió mal. Intenta de nuevo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shadows & Effects */}
      <section className="py-24 bg-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl text-white mb-4">Sombras y Efectos</h2>
            <p className="text-white/70 max-w-3xl">
              Sistema de elevación para crear jerarquía y profundidad visual.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1C1C1C] border border-white/10 rounded-lg p-8">
              <h3 className="text-lg text-white mb-6">Elevación Baja</h3>
              <div className="bg-[#252525] rounded-lg p-6 shadow-sm">
                <p className="text-white/70">shadow-sm</p>
              </div>
            </div>

            <div className="bg-[#1C1C1C] border border-white/10 rounded-lg p-8">
              <h3 className="text-lg text-white mb-6">Elevación Media</h3>
              <div className="bg-[#252525] rounded-lg p-6 shadow-lg">
                <p className="text-white/70">shadow-lg</p>
              </div>
            </div>

            <div className="bg-[#1C1C1C] border border-white/10 rounded-lg p-8">
              <h3 className="text-lg text-white mb-6">Elevación Alta</h3>
              <div className="bg-[#252525] rounded-lg p-6 shadow-2xl">
                <p className="text-white/70">shadow-2xl</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-[#1C1C1C] border border-white/10 rounded-lg p-8">
            <h3 className="text-xl text-white mb-6">Sombra de Color Primario</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#252525] rounded-lg p-6 shadow-lg shadow-[#C7482C]/20 border border-[#C7482C]/20">
                <p className="text-white/70">shadow-[#C7482C]/20</p>
                <p className="text-sm text-white/50 mt-2">Uso: Cards interactivas en hover</p>
              </div>
              <div className="bg-[#252525] rounded-lg p-6 shadow-xl shadow-[#C7482C]/30 border border-[#C7482C]/30">
                <p className="text-white/70">shadow-[#C7482C]/30</p>
                <p className="text-sm text-white/50 mt-2">Uso: Elementos destacados</p>
              </div>
              <div className="bg-[#252525] rounded-lg p-6 shadow-2xl shadow-[#C7482C]/40 border border-[#C7482C]/40">
                <p className="text-white/70">shadow-[#C7482C]/40</p>
                <p className="text-sm text-white/50 mt-2">Uso: Modals y overlays</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl text-white mb-4">Animaciones y Transiciones</h2>
            <p className="text-white/70 max-w-3xl">
              Movimiento sutil que mejora la experiencia sin distraer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#252525] border border-white/10 rounded-lg p-8">
              <h3 className="text-lg text-white mb-6">Hover Transform</h3>
              <div className="bg-[#C7482C]/20 rounded-lg p-6 border border-[#C7482C]/30 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <p className="text-white/70">hover:scale-105</p>
              </div>
            </div>

            <div className="bg-[#252525] border border-white/10 rounded-lg p-8">
              <h3 className="text-lg text-white mb-6">Hover Translate</h3>
              <div className="bg-[#C7482C]/20 rounded-lg p-6 border border-[#C7482C]/30 hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                <p className="text-white/70">hover:-translate-y-2</p>
              </div>
            </div>

            <div className="bg-[#252525] border border-white/10 rounded-lg p-8">
              <h3 className="text-lg text-white mb-6">Color Transition</h3>
              <div className="bg-[#252525] border border-white/10 rounded-lg p-6 hover:bg-[#C7482C]/20 hover:border-[#C7482C] transition-all duration-300 cursor-pointer">
                <p className="text-white/70">transition-all</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-[#252525] border border-white/10 rounded-lg p-8">
            <h3 className="text-xl text-white mb-6">Duración de Transiciones</h3>
            <div className="space-y-3 text-white/70">
              <p><span className="text-[#C7482C]">duration-150</span> - Micro interacciones (botones, links)</p>
              <p><span className="text-[#C7482C]">duration-300</span> - Transiciones estándar (hover states, color changes)</p>
              <p><span className="text-[#C7482C]">duration-500</span> - Animaciones complejas (modals, drawers)</p>
              <p><span className="text-[#C7482C]">duration-700+</span> - Efectos especiales y animaciones destacadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-24 bg-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl text-white mb-4">Guías de Diseño</h2>
            <p className="text-white/70 max-w-3xl">
              Principios y mejores prácticas para mantener consistencia en todos los productos de GeoPeruvian.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Accessibility',
                points: [
                  'Maintain WCAG 2.1 AA contrast ratios',
                  'Provide keyboard navigation for all interactive elements',
                  'Include alt text for all images',
                  'Test with screen readers regularly',
                ],
              },
              {
                title: 'Responsive Design',
                points: [
                  'Mobile-first approach (320px minimum)',
                  'Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)',
                  'Touch targets minimum 44x44px',
                  'Optimize images for different screen sizes',
                ],
              },
              {
                title: 'Content Strategy',
                points: [
                  'Use clear, action-oriented language',
                  'Keep headlines concise and benefit-focused',
                  'Limit paragraphs to 2-3 sentences',
                  'Include clear CTAs on every section',
                ],
              },
              {
                title: 'Brand Voice',
                points: [
                  'Professional yet approachable tone',
                  'Data-driven and results-focused',
                  'Technical but accessible language',
                  'Emphasize innovation and sustainability',
                ],
              },
            ].map((guideline, index) => (
              <div key={index} className="bg-[#1C1C1C] border border-white/10 rounded-lg p-8">
                <h3 className="text-xl text-white mb-4">{guideline.title}</h3>
                <ul className="space-y-3">
                  {guideline.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/70">
                      <CheckCircle2 className="text-[#C7482C] flex-shrink-0 mt-0.5" size={18} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
