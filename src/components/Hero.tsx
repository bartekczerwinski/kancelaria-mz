import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import ContactFormModal from "./ContactFormModal";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center pt-32"
      style={{
        backgroundColor: '#04090a'
      }}
    >
      {/* Hero image full width */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-left md:bg-right bg-center"
        style={{
          backgroundImage: `url(/lovable-uploads/512b804b-c41a-48f8-859a-7dd89b441c23.png)`
        }}
      />
      
      {/* Content overlay - positioned left */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-left">
        <div className="max-w-2xl">
          <h1 className="hero-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[100] text-primary-foreground mb-6 leading-tight">
            Twoja firma znajduje się&nbsp;w&nbsp;kryzysie?
          </h1>
          <h2 className="hero-text text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-[100] text-gold mb-8">
            Masz drugą szansę.
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-primary-foreground/90 mb-12 max-w-xl leading-relaxed">
            Zatrzymaj spiralę problemów, odzyskaj kontrolę i spokój. 
            Pomożemy Ci przetrwać i wyjść z tego silniejszym.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <ContactFormModal>
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold-dark text-lg px-8 py-4 h-auto font-semibold"
                style={{ color: '#04090a' }}
              >
                Umów bezpłatną konsultację
              </Button>
            </ContactFormModal>
            <div className="flex items-center space-x-2 text-primary-foreground">
              <Clock className="h-5 w-5" />
              <span className="text-lg">Reagujemy w 24h</span>
            </div>
          </div>

          {/* Statistics Card moved to bottom */}
          <Card 
            className="p-6 md:p-8 max-w-2xl border-0"
            style={{ backgroundColor: '#04090a' }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">4 457</div>
              <p className="text-primary-foreground/80 mb-4">
                <strong>firm w Polsce</strong> wybrało restrukturyzację zamiast upadłości w 2024 r.
              </p>
              <p className="text-lg font-semibold text-gold">
                Daj szansę Twojej firmie na nowy początek.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;