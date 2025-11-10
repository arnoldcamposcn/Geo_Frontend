import { Target, TrendingUp, Award, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Badge } from '../components/ui/badge';

export function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Copper Deposit Optimization',
      client: 'Major Mining Corporation',
      location: 'Northern Peru',
      timeline: '8 months',
      image: 'https://images.unsplash.com/photo-1523848309072-c199db53f137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYxNTc3NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['AI Exploration', 'Resource Optimization'],
      challenge: 'The client needed to identify high-grade copper zones across 12,000 hectares to reduce exploration costs and drilling time while maintaining accuracy in grade predictions.',
      solution: 'We deployed our AI-powered exploration platform, integrating historical drilling data, geophysical surveys, and satellite imagery. Machine learning algorithms identified 15 high-potential targets.',
      results: [
        { metric: 'Drilling reduction', value: '32%', icon: TrendingUp },
        { metric: 'Grade accuracy', value: '94%', icon: Award },
        { metric: 'Cost savings', value: '$2.4M', icon: Target },
        { metric: 'Time to discovery', value: '-45%', icon: Calendar },
      ],
      impact: 'The optimized drilling program resulted in the discovery of two new high-grade copper deposits, extending mine life by an estimated 8 years.',
    },
    {
      id: 2,
      title: 'Gold Exploration AI Model',
      client: 'International Exploration Company',
      location: 'Southern Andes',
      timeline: '6 months',
      image: 'https://images.unsplash.com/photo-1565946802459-012b39272916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBzaXRlJTIwYWVyaWFsfGVufDF8fHx8MTc2MTU2NDg5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Predictive Geology', 'Data Analytics'],
      challenge: 'Map potential gold deposits across 15,000 hectares using limited historical data from the 1980s and modern geological understanding.',
      solution: 'Our team built a custom neural network trained on global gold deposit datasets, combined with advanced geochemical analysis and structural modeling.',
      results: [
        { metric: 'Area coverage', value: '100%', icon: MapPin },
        { metric: 'New targets', value: '23', icon: Target },
        { metric: 'Time to insight', value: '6 weeks', icon: Calendar },
        { metric: 'Accuracy rate', value: '91%', icon: Award },
      ],
      impact: '23 new exploration targets were identified, with 5 currently being drilled. Early results show promising gold mineralization.',
    },
    {
      id: 3,
      title: 'Sustainable Operations Dashboard',
      client: 'Regional Mining Operator',
      location: 'Central Mining District',
      timeline: '4 months',
      image: 'https://images.unsplash.com/photo-1628158088803-4200c2be52f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTU3NzYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Sustainability', 'Digital Twin'],
      challenge: 'Real-time monitoring of environmental impact and resource efficiency across three active mine sites with minimal operational disruption.',
      solution: 'Implemented an integrated digital twin platform with IoT sensors, automated reporting, and predictive analytics for water, energy, and emissions management.',
      results: [
        { metric: 'Water usage', value: '-18%', icon: TrendingUp },
        { metric: 'Energy efficiency', value: '+22%', icon: Award },
        { metric: 'Carbon footprint', value: '-15%', icon: Target },
        { metric: 'ESG compliance', value: '100%', icon: Award },
      ],
      impact: 'Achieved full ESG compliance while reducing operational costs. The system now serves as a model for the company\'s global operations.',
    },
    {
      id: 4,
      title: 'Predictive Maintenance System',
      client: 'Underground Mine Operations',
      location: 'Coastal Region',
      timeline: '10 months',
      image: 'https://images.unsplash.com/photo-1759494373228-f2b9f5d0dc2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5lJTIwb3BlcmF0aW9uc3xlbnwxfHx8fDE3NjE1NzgxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['AI Analytics', 'Process Optimization'],
      challenge: 'Frequent equipment failures were causing costly downtime and safety concerns in underground mining operations.',
      solution: 'Deployed AI-powered predictive maintenance using real-time sensor data, historical failure patterns, and operating conditions to forecast equipment issues.',
      results: [
        { metric: 'Downtime reduction', value: '41%', icon: TrendingUp },
        { metric: 'Maintenance costs', value: '-28%', icon: Target },
        { metric: 'Equipment lifespan', value: '+35%', icon: Award },
        { metric: 'Safety incidents', value: '-67%', icon: Award },
      ],
      impact: 'Transformed reactive maintenance into proactive scheduling, significantly improving safety and productivity.',
    },
    {
      id: 5,
      title: 'Resource Estimation Accuracy',
      client: 'Silver Mining Company',
      location: 'Highland District',
      timeline: '5 months',
      image: 'https://images.unsplash.com/photo-1709489662983-3674d790b224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwcGl0JTIwbWluZXxlbnwxfHx8fDE3NjE1Nzc2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Geological Modeling', 'Data Science'],
      challenge: 'Improve resource estimation accuracy for silver deposits with complex structural controls and variable grade distribution.',
      solution: 'Applied advanced geostatistical techniques combined with machine learning to create high-resolution 3D geological models.',
      results: [
        { metric: 'Estimation accuracy', value: '+38%', icon: Award },
        { metric: 'Model confidence', value: '96%', icon: Target },
        { metric: 'Reserve increase', value: '12%', icon: TrendingUp },
        { metric: 'Planning efficiency', value: '+45%', icon: Calendar },
      ],
      impact: 'Increased proven reserves by 12%, adding significant value to the project and improving mine planning confidence.',
    },
    {
      id: 6,
      title: 'Data Migration & Integration',
      client: 'Multinational Mining Group',
      location: 'Multiple Sites',
      timeline: '12 months',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjE1Nzc2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Data Management', 'Cloud Integration'],
      challenge: 'Consolidate 40 years of geological data from 15 mine sites across 4 countries into a single, accessible platform.',
      solution: 'Designed and implemented a cloud-based data management system with automated migration, validation, and standardization protocols.',
      results: [
        { metric: 'Data migrated', value: '2.4TB', icon: Target },
        { metric: 'Access time', value: '-85%', icon: TrendingUp },
        { metric: 'Data accuracy', value: '99.7%', icon: Award },
        { metric: 'Team adoption', value: '94%', icon: Award },
      ],
      impact: 'Created a unified data ecosystem enabling cross-site analysis, knowledge sharing, and faster decision-making across the organization.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1C] pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1704423911221-11d421c1b495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjE1Nzc2MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Industrial innovation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#C7482C]/50"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <h1 className="font-['Saira_Semi_Condensed'] text-5xl md:text-6xl text-white mb-6">
              Turning Complex Challenges into Proven Results
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Real projects delivering measurable impact for leading mining operations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-[#252525] border border-white/10 rounded-lg overflow-hidden hover:border-[#C7482C]/50 transition-colors"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#C7482C]/60"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="border-[#C7482C]/50 text-[#C7482C]">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h2 className="font-['Saira_Semi_Condensed'] text-3xl text-white mb-2">{project.title}</h2>
                    <p className="text-white/60 mb-6">{project.location} • {project.timeline}</p>

                    <div className="space-y-6 mb-8">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="text-[#C7482C]" size={20} />
                          <h3 className="text-white">Challenge</h3>
                        </div>
                        <p className="text-white/70">{project.challenge}</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="text-[#C7482C]" size={20} />
                          <h3 className="text-white">Solution</h3>
                        </div>
                        <p className="text-white/70">{project.solution}</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingUp className="text-[#C7482C]" size={20} />
                          <h3 className="text-white">Results</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {project.results.map((result, idx) => (
                            <div key={idx} className="bg-[#1C1C1C] border border-white/10 rounded-lg p-4">
                              <div className="text-2xl text-[#C7482C] mb-1">{result.value}</div>
                              <div className="text-sm text-white/60">{result.metric}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-[#C7482C]/10 border border-[#C7482C]/30 rounded-lg p-4">
                        <p className="text-white/80 text-sm">{project.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Saira_Semi_Condensed'] text-4xl text-white mb-4">Our Impact by the Numbers</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Projects Completed' },
              { value: '12', label: 'Countries' },
              { value: '$45M+', label: 'Client Savings' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl text-[#C7482C] mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Saira_Semi_Condensed'] text-3xl md:text-4xl text-white mb-6">
            Start Your Success Story
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Join the leading mining companies that trust GeoPeruvian to transform their operations.
          </p>
          <Button size="lg" className="group">
            Explore our case studies
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
