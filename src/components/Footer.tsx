import logo from "@/assets/logo.png";

const Footer = () => {
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
              <li><a href="#services" className="hover:text-gold transition-colors">Restrukturyzacja</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Negocjacje z wierzycielami</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Ochrona przed egzekucją</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Upadłość konsumencka</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-header-footer-foreground/80">
              <li>+48 501 047 762</li>
              <li>kancelaria@misztalzalewski.pl</li>
              <li>Lublin + cała Polska</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-header-footer-foreground/20 mt-8 pt-8 text-center text-header-footer-foreground/60">
          <p>&copy; 2024 Misztal Zalewski Kancelaria Restrukturyzacyjna. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;