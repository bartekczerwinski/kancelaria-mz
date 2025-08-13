import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kontakt
          </h2>
          <p className="text-xl mb-4">
            Nie czekaj, aż będzie za późno.
          </p>
          <p className="text-lg">
            Im szybciej zareagujesz, tym więcej możemy zrobić.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-primary-foreground/10 backdrop-blur border-primary-foreground/20 text-center">
              <div className="flex justify-center mb-4">
                <Phone className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Zadzwoń</h3>
              <a 
                href="tel:+48501047762" 
                className="text-gold hover:text-gold-dark transition-colors font-semibold"
              >
                +48 501 047 762
              </a>
            </Card>

            <Card className="p-6 bg-primary-foreground/10 backdrop-blur border-primary-foreground/20 text-center">
              <div className="flex justify-center mb-4">
                <Mail className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Napisz</h3>
              <a 
                href="mailto:kancelaria@misztalzalewski.pl" 
                className="text-gold hover:text-gold-dark transition-colors font-semibold"
              >
                kancelaria@misztalzalewski.pl
              </a>
            </Card>

            <Card className="p-6 bg-primary-foreground/10 backdrop-blur border-primary-foreground/20 text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Lokalizacja</h3>
              <p className="text-primary-foreground/90">
                Lublin + obsługa zdalna w całej Polsce
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-dark text-primary text-xl px-12 py-6 h-auto font-bold mb-4"
            >
              Umów bezpłatną konsultację
            </Button>
            <div className="flex items-center justify-center space-x-2 text-primary-foreground/90">
              <Clock className="h-5 w-5" />
              <span className="text-lg">odpowiadamy w 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;