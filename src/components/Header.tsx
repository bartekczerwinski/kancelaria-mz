import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-header-footer backdrop-blur sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Misztal Zalewski" className="h-12 w-auto" />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-header-footer-foreground hover:text-gold transition-colors">
              Usługi
            </a>
            <a href="#process" className="text-header-footer-foreground hover:text-gold transition-colors">
              Proces
            </a>
            <a href="#about" className="text-header-footer-foreground hover:text-gold transition-colors">
              O nas
            </a>
            <a href="#team" className="text-header-footer-foreground hover:text-gold transition-colors">
              Zespół
            </a>
            <a href="#faq" className="text-header-footer-foreground hover:text-gold transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-header-footer-foreground hover:text-gold transition-colors">
              Kontakt
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+48501047762" className="flex items-center space-x-2 text-sm text-header-footer-foreground/80 hover:text-gold transition-colors">
                <Phone className="h-4 w-4" />
                <span>+48 501 047 762</span>
              </a>
              <a href="mailto:kancelaria@misztalzalewski.pl" className="flex items-center space-x-2 text-sm text-header-footer-foreground/80 hover:text-gold transition-colors">
                <Mail className="h-4 w-4" />
                <span>kancelaria@misztalzalewski.pl</span>
              </a>
            </div>
            <Button variant="default" className="bg-primary hover:bg-primary-hover text-primary-foreground">
              Umów konsultację
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;