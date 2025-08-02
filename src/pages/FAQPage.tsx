import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ChevronDown, ChevronUp, Search, MessageCircle, ArrowRight } from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const faqs = [
    {
      id: 1,
      category: 'Getting Started',
      question: 'How fresh are your leads?',
      answer: 'Our leads are updated in real-time and verified within 24 hours. We use multiple data sources and AI-powered verification to ensure accuracy and freshness. All contact information is validated before delivery.'
    },
    {
      id: 2,
      category: 'Features',
      question: 'Can I filter by company size or tech stack?',
      answer: 'Absolutely! Our advanced filtering system allows you to segment leads by company size (employees, revenue), industry, location, tech stack, job titles, seniority levels, and many other criteria. This ensures you get highly targeted prospects that match your ideal customer profile.'
    },
    {
      id: 3,
      category: 'Compliance',
      question: 'Is this GDPR compliant?',
      answer: 'Yes, we are fully GDPR compliant and follow all international data protection regulations. We only collect publicly available information and provide easy opt-out mechanisms. Our platform is also SOC 2 certified for enterprise-grade security.'
    },
    {
      id: 4,
      category: 'Integrations',
      question: 'What integrations are available?',
      answer: 'We integrate with 50+ popular CRM and outreach tools including Salesforce, HubSpot, Pipedrive, Close, Outreach, SalesLoft, Mailchimp, and many more. We also provide API access for custom integrations.'
    },
    {
      id: 5,
      category: 'Support',
      question: 'Do you offer onboarding support?',
      answer: 'Yes! All paid plans include onboarding support. Professional and Enterprise plans get dedicated customer success managers to help you optimize your lead generation strategy and achieve maximum ROI.'
    },
    {
      id: 6,
      category: 'Pricing',
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we prorate billing accordingly. There are no long-term contracts or cancellation fees.'
    },
    {
      id: 7,
      category: 'Data Quality',
      question: 'What is your data accuracy rate?',
      answer: 'Our platform maintains an 89% data accuracy rate through AI-powered verification, real-time updates, and multiple data source validation. We also offer a data quality guarantee with free replacement for invalid contacts.'
    },
    {
      id: 8,
      category: 'Trial',
      question: 'How does the free trial work?',
      answer: 'Our 14-day free trial gives you full access to all features with up to 100 leads. No credit card required to start. You can explore all targeting options, integrations, and see the quality of our data before committing to a paid plan.'
    },
    {
      id: 9,
      category: 'Export',
      question: 'Can I export leads to CSV?',
      answer: 'Yes, all plans include CSV export functionality. Professional and Enterprise plans also include API access for real-time data integration with your existing systems and workflows.'
    },
    {
      id: 10,
      category: 'Limits',
      question: 'What happens if I exceed my lead limit?',
      answer: 'You can purchase additional leads or upgrade to a higher plan. We\'ll notify you when you\'re approaching your limit and provide options to continue without interruption. Overages are billed at standard rates.'
    }
  ];

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find answers to common questions about our B2B lead generation platform
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? "hero-button-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.map((faq) => {
                const isExpanded = expandedItems.includes(faq.id);
                return (
                  <Card key={faq.id} className="feature-card">
                    <CardHeader 
                      className="cursor-pointer"
                      onClick={() => toggleExpanded(faq.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-left">
                          <div className="text-sm text-primary font-medium mb-1">
                            {faq.category}
                          </div>
                          <CardTitle className="text-lg font-heading font-semibold text-foreground">
                            {faq.question}
                          </CardTitle>
                        </div>
                        {isExpanded ? (
                          <ChevronUp size={20} className="text-muted-foreground flex-shrink-0" />
                        ) : (
                          <ChevronDown size={20} className="text-muted-foreground flex-shrink-0" />
                        )}
                      </div>
                    </CardHeader>
                    {isExpanded && (
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    )}
                  </Card>
                );
              })}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">
                  No questions found matching your search.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('All');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="section-padding bg-secondary/20">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="feature-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle size={24} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-heading font-semibold text-foreground">
                    Live Chat Support
                  </CardTitle>
                  <CardDescription>
                    Get instant answers from our support team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="hero-button-primary w-full">
                    <a href="https://salescentri.com/contact/support-request/live-chat" target="_blank" rel="noopener noreferrer">
                      Start Chat
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="feature-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Search size={24} className="text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg font-heading font-semibold text-foreground">
                    Contact Support
                  </CardTitle>
                  <CardDescription>
                    Send us a detailed message about your question
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://salescentri.com/contact" target="_blank" rel="noopener noreferrer">
                      Contact Us
                      <ArrowRight size={16} className="ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Try Our Platform?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see why hundreds of sales teams trust our lead generation platform.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
              Start Free Trial
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;