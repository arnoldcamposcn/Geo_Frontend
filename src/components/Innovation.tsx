import { Sparkles, Zap, TrendingUp, Network } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Innovation() {
  const features = [
    {
      icon: Sparkles,
      title: 'Neural Network Analysis',
      description: 'Deep learning algorithms trained on millions of geological data points.',
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Instant insights from sensor data and drilling operations.',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Models',
      description: 'Forecast ore grades, recovery rates, and operational outcomes.',
    },
    {
      icon: Network,
      title: 'Integrated Platforms',
      description: 'Seamless connection between field data and strategic planning.',
    },
  ];

  return (
    <section id="innovation" className="py-24 bg-[#1C1C1C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#C7482C]/20 text-[#C7482C] px-4 py-2 rounded-full mb-6">
              <Sparkles size={18} />
              <span className="text-sm">AI Innovation</span>
            </div>
            <h2 className="font-['Saira_Semi_Condensed'] text-4xl md:text-5xl text-white mb-6">
              AI Applied to Mining Value
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Our proprietary AI engine transforms complex geological datasets into actionable intelligence, helping mining companies reduce costs, minimize risk, and maximize resource recovery.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#C7482C]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-[#C7482C]" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">{feature.title}</h4>
                      <p className="text-white/60 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjE1Nzc2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Data visualization"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-[#C7482C]/50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="text-2xl text-[#C7482C] mb-1">98%</div>
                  <div className="text-xs text-white/70">Accuracy</div>
                </div>
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="text-2xl text-[#C7482C] mb-1">45%</div>
                  <div className="text-xs text-white/70">Cost Reduction</div>
                </div>
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="text-2xl text-[#C7482C] mb-1">2.5x</div>
                  <div className="text-xs text-white/70">ROI Average</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
