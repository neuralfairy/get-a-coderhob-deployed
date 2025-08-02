import { Star, Users, Award, Shield } from 'lucide-react';

const TrustSection = () => {
  const stats = [
    {
      icon: Users,
      number: '100+',
      label: 'Startups & Agencies',
      description: 'Trust our platform'
    },
    {
      icon: Star,
      number: '89%',
      label: 'Lead Accuracy',
      description: 'Verified prospects'
    },
    {
      icon: Award,
      number: '2.5x',
      label: 'ROI Increase',
      description: 'Average client growth'
    },
    {
      icon: Shield,
      number: '100%',
      label: 'GDPR Compliant',
      description: 'Data protection'
    }
  ];

  const certifications = [
    'Salesforce Partner',
    'HubSpot ISV Partner',
    'GDPR Compliant',
    'SOC 2 Certified'
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container-max">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent size={24} className="text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
            Certified & Compliant
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium text-foreground animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;