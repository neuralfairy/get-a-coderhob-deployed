import { Link } from 'react-router-dom';
import { MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-padding border-t border-primary-light/20">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">G</span>
                </div>
                <span className="text-xl font-heading font-bold">Getacoderjob</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Precision B2B lead generation at scale. Fuel your pipeline with verified prospects and close more deals.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h5 className="font-heading font-semibold mb-4 text-primary-foreground">Pages</h5>
              <ul className="space-y-2">
                <li>
                  <Link to="/features" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://salescentri.com/resources" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h5 className="font-heading font-semibold mb-4 text-primary-foreground">Legal</h5>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://salescentri.com/trust/security-privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="https://salescentri.com/trust/compliance-certifications" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a 
                    href="https://salescentri.com/trust/compliance-certifications" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    GDPR Compliance
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="font-heading font-semibold mb-4 text-primary-foreground">Contact</h5>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <MapPin size={16} className="text-primary-foreground/60" />
                  <span className="text-primary-foreground/80">Buffalo, NY</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail size={16} className="text-primary-foreground/60" />
                  <a 
                    href="https://salescentri.com/contact" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    hello@getacoderjob.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-primary-light/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-primary-foreground/60 text-sm">
                © {currentYear} Getacoderjob Solutions. All rights reserved.
              </p>
              <a 
                href="https://salescentri.com?utm_source=getacoderjob.com&utm_medium=footer&utm_campaign=partner_network" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm underline"
              >
                Powered by Sales Intelligence Platform
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;