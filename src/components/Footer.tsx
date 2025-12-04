import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="font-display text-2xl text-primary-foreground">D</span>
              </div>
              <div>
                <span className="font-display text-xl text-foreground">DERRICOTECH</span>
                <span className="block text-xs text-muted-foreground tracking-widest">ENGINEERING</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Precision welding and quality fabrication services you can trust. 
              Serving Ghana with excellence since establishment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-6">QUICK LINKS</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Services</Link>
              <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">Portfolio</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-6">OUR SERVICES</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">MIG/TIG/ARC Welding</Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Metal Fabrication</Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Structural Welding</Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Repairs & Maintenance</Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Custom Projects</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-6">CONTACT US</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+233547695369" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+233 547 695 396</span>
              </a>
              <a href="mailto:info@derricotech.com" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>info@derricotech.com</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Tema. Accra, Ghana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Derricotech Engineering. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Precision Welding & Quality Fabrication
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
