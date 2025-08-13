import { Card } from "@/components/ui/card";
import { Brain, Heart, Target } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Brain,
      title: "Prawo, finanse, biznes",
      subtitle: "Kompleksowe, szerokie podejście",
      description: "Analizujemy pełny obraz sytuacji przedsiębiorstwa. Uwzględniamy aspekty prawne, finansowe, podatkowe i operacyjne, aby przygotować plan, który jest spójny i wykonalny w realnych warunkach rynkowych."
    },
    {
      icon: Heart,
      title: "Empatia i dostępność",
      subtitle: "Jesteśmy, gdy nas potrzebujesz",
      description: "Rozumiemy, że trudności firmy to ogromne obciążenie dla właściciela, również psychiczne. Zapewniamy stały kontakt i jasne wyjaśnienia na każdym etapie postępowania, aby decyzje mogły być podejmowane w poczuciu bezpieczeństwa."
    },
    {
      icon: Target,
      title: "Plan, nie panika",
      subtitle: "Restrukturyzacja to strategia, nie kapitulacja",
      description: "Działamy szybko i w sposób przemyślany. Dobieramy rozwiązania, które stabilizują sytuację, chronią wartość przedsiębiorstwa i umożliwiają jego dalszy rozwój."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Dlaczego Kancelaria Misztal Zalewski?
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card key={index} className="p-8 bg-card hover:shadow-lg transition-shadow text-center h-full">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {reason.title}
                </h3>
                <h4 className="text-lg font-medium text-primary mb-4">
                  {reason.subtitle}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;