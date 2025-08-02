import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, Users, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="section-padding pt-32 md:pt-40">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-primary-light/20 rounded-full text-primary font-medium text-sm">
                  <TrendingUp size={16} className="mr-2" />
                  Trusted by 100+ startups & agencies
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight animate-slide-up">
                  Fuel Your Pipeline with{' '}
                  <span className="text-gradient">Precision-Targeted</span>{' '}
                  B2B Leads
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up animation-delay-200">
                  Get verified prospects, reduce churn, and close more deals with our AI-powered lead generation engine.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
                <Button 
                  asChild
                  className="hero-button-primary group"
                >
                  <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                    Start Free Trial
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
                <Button 
                  asChild
                  className="hero-button-secondary group"
                >
                  <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                    <Play size={20} className="mr-2" />
                    Book Demo
                  </a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-4">Trusted by leading companies</p>
                <div className="flex items-center space-x-8 opacity-60">
                  <div className="text-lg font-semibold text-muted-foreground">HubSpot</div>
                  <div className="text-lg font-semibold text-muted-foreground">Zoho</div>
                  <div className="text-lg font-semibold text-muted-foreground">Pipedrive</div>
                  <div className="text-lg font-semibold text-muted-foreground">Close.com</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative animate-slide-in-right animation-delay-200">
              <div className="relative bg-card rounded-3xl p-8 shadow-strong border border-border">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-heading font-semibold">Lead Pipeline</h3>
                  <div className="text-sm text-muted-foreground">Real-time</div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-primary p-4 rounded-xl text-primary-foreground">
                    <div className="text-2xl font-bold">2,543</div>
                    <div className="text-sm opacity-80">New Leads</div>
                  </div>
                  <div className="bg-gradient-accent p-4 rounded-xl text-accent-foreground">
                    <div className="text-2xl font-bold">89%</div>
                    <div className="text-sm opacity-80">Accuracy</div>
                  </div>
                </div>

                {/* Lead Flow Visualization */}
                <div className="space-y-3">
                  {[
                    { company: 'TechCorp Inc.', role: 'VP Sales', score: 95 },
                    { company: 'DataFlow Solutions', role: 'CTO', score: 88 },
                    { company: 'InnovateSaaS', role: 'Head of Growth', score: 92 }
                  ].map((lead, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg animate-scale-in"
                      style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <Users size={16} className="text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{lead.company}</div>
                          <div className="text-xs text-muted-foreground">{lead.role}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target size={14} className="text-accent" />
                        <span className="text-sm font-semibold text-accent">{lead.score}%</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center animate-pulse-glow">
                  <TrendingUp size={24} className="text-accent-foreground" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-light rounded-full animate-float animation-delay-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;