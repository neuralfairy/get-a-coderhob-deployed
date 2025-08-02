import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Target, Brain, RefreshCw, Mail, BarChart3, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const FeaturesPage = () => {
  const [activeTab, setActiveTab] = useState('targeting');

  const features = [
    {
      id: 'targeting',
      icon: Target,
      title: 'Laser-Targeted Lead Lists',
      description: 'Enrich and segment by title, region, tech stack, etc.',
      benefits: [
        'Filter by job title, seniority level, and department',
        'Target specific industries and company sizes',
        'Geographic and technographic segmentation',
        'Real-time data enrichment and validation'
      ],
      demo: {
        title: 'Advanced Filtering Demo',
        description: 'See how our targeting engine works with live data'
      }
    },
    {
      id: 'intent',
      icon: Brain,
      title: 'AI-Powered Intent Signals',
      description: 'Identify leads with real buying intent',
      benefits: [
        'Behavioral analysis and engagement tracking',
        'Predictive lead scoring algorithms',
        'Intent signal aggregation from multiple sources',
        'Real-time buying intent notifications'
      ],
      demo: {
        title: 'Intent Scoring Engine',
        description: 'Watch AI identify high-intent prospects'
      }
    },
    {
      id: 'crm',
      icon: RefreshCw,
      title: 'CRM Auto-Sync',
      description: 'Instant sync with your pipeline tools',
      benefits: [
        'Seamless integration with 50+ CRM platforms',
        'Real-time bidirectional data sync',
        'Custom field mapping and automation',
        'Duplicate detection and management'
      ],
      demo: {
        title: 'CRM Integration Preview',
        description: 'See leads flow directly into your pipeline'
      }
    },
    {
      id: 'outreach',
      icon: Mail,
      title: 'Email Outreach Integration',
      description: 'Integrate directly with outreach tools',
      benefits: [
        'Connect with popular email platforms',
        'Automated sequence enrollment',
        'Personalization at scale',
        'Deliverability optimization'
      ],
      demo: {
        title: 'Outreach Automation',
        description: 'Experience automated email sequences'
      }
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Conversion tracking, A/B testing, reporting dashboards',
      benefits: [
        'Real-time conversion tracking',
        'A/B testing for email campaigns',
        'ROI and attribution reporting',
        'Custom dashboard creation'
      ],
      demo: {
        title: 'Analytics Dashboard',
        description: 'Explore comprehensive reporting features'
      }
    },
    {
      id: 'speed',
      icon: Zap,
      title: 'Lightning Fast Delivery',
      description: 'Get qualified leads in minutes, not days',
      benefits: [
        'Real-time lead processing',
        'Instant list generation',
        'Scalable infrastructure',
        'API-first architecture'
      ],
      demo: {
        title: 'Speed Test Demo',
        description: 'Watch leads generate in real-time'
      }
    }
  ];

  const currentFeature = features.find(f => f.id === activeTab) || features[0];
  const IconComponent = currentFeature.icon;

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Powerful Features for{' '}
            <span className="text-gradient">Modern Sales Teams</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Everything you need to generate, qualify, and convert high-quality B2B leads with precision and scale.
          </p>
          <Button asChild className="hero-button-primary">
            <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer">
              Try Interactive Demo
              <ArrowRight size={20} className="ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="section-padding">
        <div className="container-max">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12 bg-secondary/30">
              {features.map((feature) => {
                const TabIcon = feature.icon;
                return (
                  <TabsTrigger
                    key={feature.id}
                    value={feature.id}
                    className="flex flex-col items-center p-4 space-y-2"
                  >
                    <TabIcon size={20} />
                    <span className="text-xs font-medium hidden md:inline">
                      {feature.title.split(' ')[0]}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {features.map((feature) => (
              <TabsContent key={feature.id} value={feature.id} className="mt-0">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                        <IconComponent size={28} className="text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-heading font-bold text-foreground">
                          {feature.title}
                        </h2>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle size={20} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="hero-button-primary">
                      <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                        Start Free Trial
                      </a>
                    </Button>
                  </div>

                  {/* Demo Preview */}
                  <Card className="feature-card">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {feature.demo.title}
                        <Button
                          size="sm"
                          asChild
                          className="hero-button-secondary"
                        >
                          <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer">
                            Try Demo
                          </a>
                        </Button>
                      </CardTitle>
                      <CardDescription>
                        {feature.demo.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-secondary/30 rounded-lg p-6 text-center">
                        <IconComponent size={48} className="text-primary mx-auto mb-4" />
                        <p className="text-muted-foreground">
                          Interactive demo preview available
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Transform Your Lead Generation?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of sales teams already using our platform to generate more qualified leads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Book Demo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;