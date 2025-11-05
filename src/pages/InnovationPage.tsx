import { 
  Brain, 
  Cpu, 
  Zap, 
  Network, 
  Database, 
  TrendingUp,
  Sparkles,
  GitBranch,
  Code,
  BarChart,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function InnovationPage() {
  const technologies = [
    {
      icon: Brain,
      title: 'Deep Learning Models',
      description: 'Neural networks trained on millions of geological data points for pattern recognition and predictive modeling.',
      capabilities: [
        'Ore body prediction',
        'Grade estimation',
        'Structural interpretation',
        'Anomaly detection',
      ],
    },
    {
      icon: Cpu,
      title: 'Real-Time Processing',
      description: 'Edge computing and cloud infrastructure for instant insights from sensor data and drilling operations.',
      capabilities: [
        'Live data streaming',
        'Automated quality control',
        'Instant visualization',
        'Alert systems',
      ],
    },
    {
      icon: Network,
      title: 'Integrated Platforms',
      description: 'Seamless connection between field data, lab analysis, and strategic planning systems.',
      capabilities: [
        'API integrations',
        'Multi-source fusion',
        'Cross-platform sync',
        'Collaborative workflows',
      ],
    },
    {
      icon: Database,
      title: 'Big Data Analytics',
      description: 'Advanced algorithms process vast geological datasets to uncover hidden patterns and correlations.',
      capabilities: [
        'Petabyte-scale processing',
        'Statistical modeling',
        'Geospatial analysis',
        'Time-series forecasting',
      ],
    },
  ];

  const aiApplications = [
    {
      icon: GitBranch,
      title: 'Predictive Exploration',
      description: 'AI identifies high-potential zones by analyzing geological, geochemical, and geophysical data.',
      impact: '40% reduction in exploration costs',
    },
    {
      icon: BarChart,
      title: 'Resource Estimation',
      description: 'Machine learning improves grade interpolation and resource confidence levels.',
      impact: '35% improvement in accuracy',
    },
    {
      icon: Zap,
      title: 'Process Optimization',
      description: 'Real-time optimization of metallurgical processes for maximum recovery.',
      impact: '18% increase in recovery rates',
    },
    {
      icon: Code,
      title: 'Automated Reporting',
      description: 'AI-generated reports, visualizations, and compliance documentation.',
      impact: '70% time savings',
    },
  ];

  const researchAreas = [
    {
      title: 'Quantum Computing for Geophysics',
      status: 'Research Phase',
      description: 'Exploring quantum algorithms for complex subsurface modeling.',
    },
    {
      title: 'Computer Vision for Core Logging',
      status: 'Beta Testing',
      description: 'Automated mineral identification and core analysis using AI.',
    },
    {
      title: 'Natural Language Processing',
      status: 'In Development',
      description: 'Extracting insights from historical geological reports and literature.',
    },
    {
      title: 'Digital Twin for Mine Planning',
      status: 'Production Ready',
      description: 'Real-time simulation and scenario planning for entire operations.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1C] pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV0d29ya3xlbnwxfHx8fDE3NjE1NjE4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="AI network"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#C7482C]/70"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
              <Sparkles size={18} />
              <span className="text-sm">AI Innovation Lab</span>
            </div>
            <h1 className="text-5xl md:text-6xl text-white mb-6">
              Where Mining Meets Artificial Intelligence
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Pioneering the next generation of mining technology through advanced AI, machine learning, and data science.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="font-['Saira_Semi_Condensed'] text-4xl text-white mb-6">Core Technologies</h2>
            <p className="text-lg text-white/70">
              Our AI engine combines cutting-edge technologies to transform complex geological data into actionable intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="bg-[#252525] border border-white/10 rounded-lg p-8 hover:border-[#C7482C]/50 transition-colors"
                >
                  <div className="w-16 h-16 bg-[#C7482C]/20 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-[#C7482C]" size={32} />
                  </div>
                  <h3 className="text-2xl text-white mb-3">{tech.title}</h3>
                  <p className="text-white/70 mb-6">{tech.description}</p>
                  <div className="space-y-2">
                    {tech.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                        <div className="w-1.5 h-1.5 bg-[#C7482C] rounded-full"></div>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Applications */}
      <section className="py-24 bg-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl text-white mb-6">AI in Action</h2>
            <p className="text-lg text-white/70">
              Practical applications delivering measurable results across the mining value chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiApplications.map((app, index) => {
              const Icon = app.icon;
              return (
                <div
                  key={index}
                  className="bg-[#1C1C1C] border border-white/10 rounded-lg p-6 hover:border-[#C7482C] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#C7482C]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C7482C]/30 transition-colors">
                    <Icon className="text-[#C7482C]" size={24} />
                  </div>
                  <h3 className="text-lg text-white mb-2">{app.title}</h3>
                  <p className="text-sm text-white/60 mb-4">{app.description}</p>
                  <div className="text-[#C7482C] text-sm">{app.impact}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Flow Visualization */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl text-white mb-6">From Data to Decisions</h2>
            <p className="text-lg text-white/70">
              Our AI pipeline transforms raw geological data into strategic insights in real-time.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 items-center">
            {[
              { label: 'Data Collection', desc: 'Sensors, drilling, surveys' },
              { label: 'Processing', desc: 'Clean, validate, normalize' },
              { label: 'AI Analysis', desc: 'Pattern recognition, predictions' },
              { label: 'Visualization', desc: 'Interactive dashboards' },
              { label: 'Action', desc: 'Strategic decisions' },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-[#252525] border border-white/10 rounded-lg p-6 text-center">
                  <div className="w-10 h-10 bg-[#C7482C] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-white mb-2">{step.label}</h3>
                  <p className="text-sm text-white/60">{step.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-[#C7482C]/50 z-10">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-[#C7482C]/50 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-24 bg-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl text-white mb-6">Research & Development</h2>
            <p className="text-lg text-white/70">
              We're constantly pushing the boundaries of what's possible in mining technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-[#1C1C1C] border border-white/10 rounded-lg p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl text-white">{area.title}</h3>
                  <span className="text-xs text-[#C7482C] bg-[#C7482C]/10 px-3 py-1 rounded-full">
                    {area.status}
                  </span>
                </div>
                <p className="text-white/70">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10M+', label: 'Data Points Analyzed Daily' },
              { value: '98%', label: 'Prediction Accuracy' },
              { value: '45%', label: 'Average Cost Reduction' },
              { value: '24/7', label: 'Real-Time Monitoring' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl text-[#C7482C] mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Discover how our innovation can transform your mining operations.
          </p>
          <Button size="lg" className="group">
            See how we innovate
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
