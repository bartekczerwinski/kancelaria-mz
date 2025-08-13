import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Diagnoza sytuacji finansowej",
      description: "Analiza dokumentów, zobowiązań i identyfikacja zagrożeń"
    },
    {
      number: "2",
      title: "Wybór strategii",
      description: "Dostosowanie trybu postępowania do sytuacji firmy"
    },
    {
      number: "3",
      title: "Przygotowanie propozycji układowych",
      description: "Opracowanie warunków spłaty i redukcji wierzytelności oraz harmonogramu działań"
    },
    {
      number: "4",
      title: "Negocjacje z wierzycielami",
      description: "Budowanie poparcia wierzycieli dla przyjęcia układu"
    },
    {
      number: "5",
      title: "Złożenie wniosku do sądu",
      description: "Złożenie wniosku wraz z kompletną dokumentacją do sądu"
    },
    {
      number: "6",
      title: "Procedowanie przez sąd wniosku o zatwierdzenie układu",
      description: "Nadanie mocy prawnej układowi przez sąd"
    },
    {
      number: "7",
      title: "Realizacja układu (po jego zatwierdzeniu)",
      description: "Monitorowanie wykonania układu i spłat zgodnie z harmonogramem"
    }
  ];

  return (
    <section id="process" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Proces postępowania o zatwierdzenie układu
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 bg-card hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;