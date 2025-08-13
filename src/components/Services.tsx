import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileSearch, 
  Users, 
  FileText, 
  Zap, 
  Building, 
  Wrench, 
  Shield,
  Package,
  Gavel
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileSearch,
      title: "Szybka diagnoza sytuacji",
      description: "Bezpłatna analiza Twojej sytuacji i konkretny plan ratunkowy.",
      highlight: "→ Zadzwoń dziś – niech czas zacznie działać na Twoją korzyść"
    },
    {
      icon: Users,
      title: "Negocjacje z wierzycielami",
      description: "Przejmujemy ciężar rozmów, chronimy Twoje interesy, szukamy realnych rozwiązań."
    }
  ];

  const restructuringServices = [
    {
      icon: FileText,
      title: "Postępowanie o zatwierdzenie układu",
      description: "najpopularniejsza i najszybsza ochrona i plan spłaty."
    },
    {
      icon: Zap,
      title: "Przyspieszone postępowanie układowe",
      description: "gdy czas jest kluczowy."
    },
    {
      icon: Building,
      title: "Postępowanie układowe",
      description: "dla firm z bardziej skomplikowaną sytuacją."
    },
    {
      icon: Wrench,
      title: "Sanacja",
      description: "gruntowna odbudowa firmy i pełna ochrona przed egzekucją."
    }
  ];

  const specialServices = [
    {
      icon: Shield,
      title: "Ochrona członków zarządu"
    },
    {
      icon: Package,
      title: "Pre-pack (przygotowana likwidacja)"
    },
    {
      icon: Building,
      title: "Restrukturyzacje branżowe",
      description: "(handel, produkcja, transport, budownictwo, rolnictwo i wiele innych)"
    },
    {
      icon: Gavel,
      title: "Upadłość przedsiębiorcy, a także upadłość konsumencka"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Usługi
          </h2>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-8 bg-card hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    {service.highlight && (
                      <p className="text-primary font-medium">
                        {service.highlight}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Restructuring Procedures */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-primary mb-8 text-center">
            Postępowania restrukturyzacyjne:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restructuringServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="p-6 bg-card hover:shadow-lg transition-shadow text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-card-foreground mb-3">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Special Solutions */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-primary mb-8 text-center">
            Rozwiązania specjalne:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="p-6 bg-card hover:shadow-lg transition-shadow text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-card-foreground mb-2">
                    {service.title}
                  </h4>
                  {service.description && (
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
            Dowiedz się, która opcja jest dla Ciebie
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;