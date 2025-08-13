import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
const logo = "/lovable-uploads/7bd148d3-8dd2-4063-80da-45425712203c.png";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 128; // Header height (h-32 = 128px)
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="bg-header-footer backdrop-blur fixed top-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-32 items-center justify-between">
          <button onClick={scrollToTop} className="flex items-center space-x-3">
            <img src={logo} alt="Misztal Zalewski" className="h-20 w-auto" />
          </button>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-header-footer-foreground hover:text-gold transition-colors"
            >
              Usługi
            </button>
            <button 
              onClick={() => scrollToSection('process')} 
              className="text-header-footer-foreground hover:text-gold transition-colors"
            >
              Proces
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-header-footer-foreground hover:text-gold transition-colors"
            >
              O nas
            </button>
            <button 
              onClick={() => scrollToSection('team')} 
              className="text-header-footer-foreground hover:text-gold transition-colors"
            >
              Zespół
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-header-footer-foreground hover:text-gold transition-colors"
            >
              Pytania
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-header-footer-foreground hover:text-gold transition-colors"
            >
              Kontakt
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+48501047762" className="flex items-center space-x-2 text-sm text-header-footer-foreground/80 hover:text-gold transition-colors">
                <Phone className="h-4 w-4" />
                <span>+48 501 047 762</span>
              </a>
            </div>
            <Button 
              variant="default" 
              className="bg-gold hover:bg-gold-dark" 
              style={{ color: '#04090a' }}
              onClick={() => scrollToSection('contact')}
            >
              Umów konsultację
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;