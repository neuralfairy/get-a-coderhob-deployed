import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, Clock, MessageCircle, Calendar, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant answers to your questions',
      action: 'Start Chat',
      link: 'https://salescentri.com/contact/support-request/live-chat'
    },
    {
      icon: Calendar,
      title: 'Book a Demo',
      description: 'See the platform in action',
      action: 'Schedule Demo',
      link: 'https://salescentri.com/get-started/book-demo'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      action: 'Send Email',
      link: 'https://salescentri.com/contact'
    },
    {
      icon: Phone,
      title: 'Request Quote',
      description: 'Get enterprise pricing',
      action: 'Get Quote',
      link: 'https://salescentri.com/contact/sales-inquiry/request-quote'
    }
  ];

  const offices = [
    {
      city: 'Buffalo, NY',
      address: '300 Pearl Street, Buffalo, NY 14202',
      description: 'Our headquarters in the heart of Buffalo'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I get started?',
      answer: 'You can start generating leads immediately with our 14-day free trial. No credit card required.'
    },
    {
      question: 'What integrations do you support?',
      answer: 'We integrate with 50+ CRM and outreach tools including Salesforce, HubSpot, Pipedrive, and more.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we are SOC 2 certified and GDPR compliant with enterprise-grade security measures.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Get in{' '}
            <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your lead generation? We're here to help you succeed with personalized support and solutions.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="feature-card text-center group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={28} className="text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg font-heading font-semibold text-foreground">
                      {method.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="hero-button-primary w-full">
                      <a href={method.link} target="_blank" rel="noopener noreferrer">
                        {method.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="feature-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your lead generation needs..."
                    rows={4}
                  />
                </div>
                
                <Button asChild className="hero-button-primary w-full">
                  <a href="https://salescentri.com/contact" target="_blank" rel="noopener noreferrer">
                    Send Message
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Office Info & FAQ */}
            <div className="space-y-8">
              {/* Office */}
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading font-bold text-foreground flex items-center">
                    <MapPin size={24} className="mr-3 text-primary" />
                    Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {offices.map((office, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="font-semibold text-foreground">{office.city}</h3>
                      <p className="text-muted-foreground">{office.address}</p>
                      <p className="text-sm text-muted-foreground">{office.description}</p>
                    </div>
                  ))}
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Clock size={20} />
                      <div>
                        <div className="font-medium">Business Hours</div>
                        <div className="text-sm">Monday - Friday: 9:00 AM - 6:00 PM EST</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick FAQ */}
              <Card className="feature-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading font-bold text-foreground">
                    Quick Answers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-semibold text-foreground">{faq.question}</h4>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild variant="outline" className="w-full mt-6">
                    <a href="/faq">
                      View All FAQs
                      <ArrowRight size={16} className="ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of sales teams already using our platform. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="https://salescentri.com/get-started/calendly" target="_blank" rel="noopener noreferrer">
                Schedule Demo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;