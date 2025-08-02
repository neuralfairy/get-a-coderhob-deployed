import { Target, Brain, RefreshCw, Mail, BarChart3, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Features = () => {
  const features = [
    {
      icon: Target,
      title: 'Laser-Targeted Lead Lists',
      description: 'Enrich and segment prospects by job title, company size, region, tech stack, and industry for maximum relevance.',
      color: 'text-primary'
    },
    {
      icon: Brain,
      title: 'AI-Powered Intent Signals',
      description: 'Identify leads showing real buying intent through advanced behavioral analysis and predictive modeling.',
      color: 'text-accent'
    },
    {
      icon: RefreshCw,
      title: 'CRM Auto-Sync',
      description: 'Seamlessly sync leads directly to your existing CRM pipeline tools with real-time updates.',
      color: 'text-primary'
    },
    {
      icon: Mail,
      title: 'Email Outreach Integration',
      description: 'Connect with your favorite outreach tools for automated, personalized email sequences.',
      color: 'text-accent'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track conversion rates, A/B testing results, and ROI with comprehensive reporting dashboards.',
      color: 'text-primary'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Delivery',
      description: 'Get your qualified lead lists delivered in minutes, not days. Real-time processing at scale.',
      color: 'text-accent'
    }
  ];

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Features that{' '}
            <span className="text-gradient">Supercharge</span>{' '}
            Your Sales Pipeline
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to generate, qualify, and convert high-quality B2B leads
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="feature-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-6`}>
                  <IconComponent size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            className="hero-button-primary"
          >
            <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer">
              Try Interactive Demo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;