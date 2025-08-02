import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, Award, MapPin, Mail, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision First',
      description: 'We believe quality beats quantity. Every lead is verified and targeted to match your ideal customer profile.'
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Your success is our success. We measure our performance by the growth and satisfaction of our clients.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We continuously innovate our AI-powered platform to stay ahead of market changes and customer needs.'
    }
  ];

  const certifications = [
    {
      title: 'Salesforce Partner',
      description: 'Certified integration partner with seamless CRM connectivity'
    },
    {
      title: 'GDPR Compliant',
      description: 'Full compliance with global data protection regulations'
    },
    {
      title: 'HubSpot ISV Partner',
      description: 'Official integration partner for marketing automation'
    },
    {
      title: 'SOC 2 Certified',
      description: 'Enterprise-grade security and data protection standards'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            About{' '}
            <span className="text-gradient">Getacoderjob Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to empower B2B companies with scalable, intelligent, and affordable lead generation solutions.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower B2B companies with scalable, intelligent, and affordable lead generation that drives real business growth. We believe every business deserves access to high-quality prospects without breaking the bank.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in Buffalo, New York, we've helped over 100 startups and agencies transform their sales pipelines with our AI-powered platform. Our team combines deep sales expertise with cutting-edge technology to deliver results that matter.
              </p>
              <Button asChild className="hero-button-primary">
                <a href="https://salescentri.com/company/about-us" target="_blank" rel="noopener noreferrer">
                  Learn More About Our Story
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="relative">
              <Card className="feature-card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-heading font-bold text-primary mb-2">100+</div>
                      <div className="text-sm text-muted-foreground">Happy Clients</div>
                    </div>
                    <div>
                      <div className="text-3xl font-heading font-bold text-accent mb-2">89%</div>
                      <div className="text-sm text-muted-foreground">Lead Accuracy</div>
                    </div>
                    <div>
                      <div className="text-3xl font-heading font-bold text-primary mb-2">2.5x</div>
                      <div className="text-sm text-muted-foreground">ROI Increase</div>
                    </div>
                    <div>
                      <div className="text-3xl font-heading font-bold text-accent mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="feature-card text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent size={28} className="text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-heading font-semibold text-foreground">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We maintain the highest standards of security, compliance, and integration quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="feature-card text-center">
                <CardHeader>
                  <CardTitle className="text-lg font-heading font-semibold text-foreground">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {cert.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Ready to transform your lead generation? We're here to help you succeed.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="opacity-80" />
                  <span>300 Pearl Street, Buffalo, NY 14202</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="opacity-80" />
                  <a 
                    href="https://salescentri.com/contact" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    hello@getacoderjob.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                asChild
                size="lg" 
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                  Schedule a Demo
                </a>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a href="https://salescentri.com/contact" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;