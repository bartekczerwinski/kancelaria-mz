import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center pt-32"
      style={{
        backgroundColor: '#04090a'
      }}
    >
      {/* Hero image positioned right */}
      <div 
        className="absolute right-0 top-0 w-2/3 h-full bg-right bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/lovable-uploads/512b804b-c41a-48f8-859a-7dd89b441c23.png)`,
          backgroundPosition: 'right center'
        }}
      />
      
      {/* Content overlay */}
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-left w-1/2">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Twoja firma znajduje się w kryzysie?
          </h1>
          <h2 className="hero-text text-3xl md:text-5xl lg:text-6xl font-semibold text-gold mb-8">
            Masz drugą szansę.
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Zatrzymaj spiralę problemów, odzyskaj kontrolę i spokój. 
            Pomożemy Ci przetrwać i wyjść z tego silniejszym.
          </p>

          {/* Statistics Card */}
          <Card className="bg-background/95 backdrop-blur p-6 md:p-8 max-w-2xl mx-auto mb-12 border-gold/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4 457</div>
              <p className="text-foreground/80 mb-4">
                W 2024 r. aż <strong>4 457 firm w Polsce</strong> wybrało restrukturyzację zamiast upadłości.
              </p>
              <p className="text-lg font-semibold text-primary">
                Daj szansę Twojej firmie na nowy początek.
              </p>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-dark text-primary text-lg px-8 py-4 h-auto font-semibold"
            >
              Umów bezpłatną konsultację
            </Button>
            <div className="flex items-center space-x-2 text-primary-foreground">
              <Clock className="h-5 w-5" />
              <span className="text-lg">Reagujemy w 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;