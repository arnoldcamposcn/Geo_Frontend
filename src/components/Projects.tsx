import { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Target } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: 'Copper Deposit Optimization',
      location: 'Northern Peru',
      image: 'https://images.unsplash.com/photo-1523848309072-c199db53f137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYxNTc3NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      challenge: 'Identify high-grade copper zones to reduce exploration costs and drilling time.',
      results: [
        { label: 'Drilling reduction', value: '32%' },
        { label: 'Grade accuracy', value: '94%' },
        { label: 'Cost savings', value: '$2.4M' },
      ],
    },
    {
      title: 'Gold Exploration AI Model',
      location: 'Southern Andes',
      image: 'https://images.unsplash.com/photo-1565946802459-012b39272916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBzaXRlJTIwYWVyaWFsfGVufDF8fHx8MTc2MTU2NDg5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      challenge: 'Map potential gold deposits across 15,000 hectares using limited historical data.',
      results: [
        { label: 'Area coverage', value: '100%' },
        { label: 'New targets identified', value: '23' },
        { label: 'Time to insight', value: '6 weeks' },
      ],
    },
    {
      title: 'Sustainable Operations Dashboard',
      location: 'Central Mining District',
      image: 'https://images.unsplash.com/photo-1628158088803-4200c2be52f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTU3NzYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      challenge: 'Real-time monitoring of environmental impact and resource efficiency.',
      results: [
        { label: 'Water usage reduction', value: '18%' },
        { label: 'Energy efficiency gain', value: '22%' },
        { label: 'Carbon footprint reduction', value: '15%' },
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 bg-[#252525]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="font-['Saira_Semi_Condensed'] text-4xl md:text-5xl text-white mb-6">
            Proven Results Across the Globe
          </h2>
          <p className="text-lg text-white/70">
            Real projects delivering measurable impact for leading mining operations.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <ProjectCard project={projects[currentSlide]} />
          
          <div className="flex items-center justify-between mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-[#C7482C]' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-[#1C1C1C] border border-white/10 rounded-lg overflow-hidden hover:border-[#C7482C]/50 transition-colors group">
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-[#C7482C]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl text-white mb-1">{project.title}</h3>
          <p className="text-white/70 text-sm">{project.location}</p>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <div className="flex items-start gap-2 mb-6">
          <Target className="text-[#C7482C] flex-shrink-0 mt-1" size={18} />
          <p className="text-white/70 text-sm">{project.challenge}</p>
        </div>

        <div className="flex items-start gap-2 mb-4">
          <TrendingUp className="text-[#C7482C] flex-shrink-0 mt-1" size={18} />
          <span className="text-white text-sm">Key Results</span>
        </div>

        <div className="space-y-3">
          {project.results.map((result: any, index: number) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-white/60 text-sm">{result.label}</span>
              <span className="text-[#C7482C]">{result.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
