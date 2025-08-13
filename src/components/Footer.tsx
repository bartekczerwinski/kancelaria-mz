const logo = "/lovable-uploads/7bd148d3-8dd2-4063-80da-45425712203c.png";

const Footer = () => {
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

  return (
    <footer className="bg-header-footer text-header-footer-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Misztal Zalewski" className="h-10 w-auto" />
            </div>
            <p className="text-header-footer-foreground/80 leading-relaxed">
              Kancelaria Restrukturyzacyjna Misztal Zalewski - pomagamy firmom w kryzysie odzyskać stabilność finansową i drugą szansę na rozwój.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Usługi</h4>
            <ul className="space-y-2 text-header-footer-foreground/80">
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-gold transition-colors text-left"
                >
                  Restrukturyzacja
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-gold transition-colors text-left"
                >
                  Negocjacje z wierzycielami
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">&nbsp;</h4>
            <ul className="space-y-2 text-header-footer-foreground/80">
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-gold transition-colors text-left"
                >
                  Ochrona przed egzekucją
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="hover:text-gold transition-colors text-left"
                >
                  Upadłość konsumencka
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-header-footer-foreground/20 mt-8 pt-8 text-center text-header-footer-foreground/60">
          <p>&copy; 2025 Misztal Zalewski Kancelaria Restrukturyzacyjna. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;