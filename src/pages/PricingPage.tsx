import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Check, X, Star, ArrowRight } from 'lucide-react';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started',
      monthlyPrice: 79,
      annualPrice: 63, // 20% discount
      leads: '1,000',
      features: [
        { name: 'Up to 1,000 leads/month', included: true },
        { name: 'Basic lead filtering', included: true },
        { name: 'Email support', included: true },
        { name: 'CSV export', included: true },
        { name: 'CRM sync', included: false },
        { name: 'Intent filters', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'Priority support', included: false }
      ],
      cta: 'Start Free Trial',
      ctaLink: 'https://salescentri.com/get-started/free-trial',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Most popular for growing sales teams',
      monthlyPrice: 299,
      annualPrice: 239, // 20% discount
      leads: '10,000',
      features: [
        { name: 'Up to 10,000 leads/month', included: true },
        { name: 'Advanced lead filtering', included: true },
        { name: 'Chat + Email support', included: true },
        { name: 'CSV & API export', included: true },
        { name: 'CRM sync', included: true },
        { name: 'Advanced intent filters', included: true },
        { name: 'Performance analytics', included: true },
        { name: 'Priority support', included: false }
      ],
      cta: 'Start Free Trial',
      ctaLink: 'https://salescentri.com/get-started/free-trial',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      monthlyPrice: null,
      annualPrice: null,
      leads: 'Unlimited',
      features: [
        { name: 'Unlimited leads', included: true },
        { name: 'Full suite filters', included: true },
        { name: 'Priority CSM support', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Advanced CRM sync', included: true },
        { name: 'Full intent suite', included: true },
        { name: 'Custom analytics', included: true },
        { name: 'Dedicated CSM', included: true }
      ],
      cta: 'Contact Sales',
      ctaLink: 'https://salescentri.com/contact/sales-inquiry',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'What happens if I exceed my lead limit?',
      answer: 'You can purchase additional leads or upgrade to a higher plan. We\'ll notify you before you reach your limit.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 14-day money-back guarantee for all paid plans. No questions asked.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Simple, Transparent{' '}
            <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the plan that fits your team's needs. All plans include our core features with a 14-day free trial.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="text-sm bg-accent text-accent-foreground px-2 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular 
                    ? 'pricing-card-featured transform scale-105' 
                    : 'pricing-card'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star size={16} className="mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-heading font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="pt-4">
                    {plan.monthlyPrice ? (
                      <div className="space-y-2">
                        <div className="text-4xl font-heading font-bold text-foreground">
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                          <span className="text-lg text-muted-foreground">/month</span>
                        </div>
                        {isAnnual && (
                          <div className="text-sm text-muted-foreground line-through">
                            ${plan.monthlyPrice}/month
                          </div>
                        )}
                        <div className="text-sm text-muted-foreground">
                          {plan.leads} leads included
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="text-4xl font-heading font-bold text-foreground">
                          Custom
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {plan.leads} leads
                        </div>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        {feature.included ? (
                          <Check size={20} className="text-accent flex-shrink-0" />
                        ) : (
                          <X size={20} className="text-muted-foreground flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular ? 'hero-button-primary' : 'hero-button-secondary'
                    }`}
                  >
                    <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                      <ArrowRight size={16} className="ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="section-padding bg-secondary/20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              See how much your sales team can save with our verified leads
            </p>
            
            <Card className="feature-card">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-heading font-bold text-accent mb-2">200%</div>
                    <div className="text-foreground font-semibold mb-1">Average ROI</div>
                    <div className="text-sm text-muted-foreground">Within 3 months</div>
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold text-primary mb-2">50%</div>
                    <div className="text-foreground font-semibold mb-1">Time Saved</div>
                    <div className="text-sm text-muted-foreground">On lead research</div>
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold text-accent mb-2">3x</div>
                    <div className="text-foreground font-semibold mb-1">More Meetings</div>
                    <div className="text-sm text-muted-foreground">Booked per month</div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button asChild className="hero-button-primary">
                    <a href="https://salescentri.com/pricing" target="_blank" rel="noopener noreferrer">
                      Calculate My ROI
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="feature-card">
                  <CardHeader>
                    <CardTitle className="text-lg font-heading font-semibold text-foreground">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;