import { Card } from "@/components/ui/card";

const WhyUs = () => {
  const reasons = [
    {
      title: "Prawo, finanse, biznes",
      subtitle: "Kompleksowe, szerokie podejście",
      description: "Analizujemy pełny obraz sytuacji przedsiębiorstwa. Uwzględniamy aspekty prawne, finansowe, podatkowe i operacyjne, aby przygotować plan, który jest spójny i wykonalny w realnych warunkach rynkowych."
    },
    {
      title: "Empatia i dostępność",
      subtitle: "Jesteśmy, gdy nas potrzebujesz",
      description: "Rozumiemy, że trudności firmy to ogromne obciążenie dla właściciela, również psychiczne. Zapewniamy stały kontakt i jasne wyjaśnienia na każdym etapie postępowania, aby decyzje mogły być podejmowane w poczuciu bezpieczeństwa."
    },
    {
      title: "Plan, nie panika",
      subtitle: "Restrukturyzacja to strategia, nie kapitulacja",
      description: "Działamy szybko i w sposób przemyślany. Dobieramy rozwiązania, które stabilizują sytuację, chronią wartość przedsiębiorstwa i umożliwiają jego dalszy rozwój."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-[100] text-primary mb-4">
            Dlaczego Kancelaria Misztal Zalewski?
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            return (
              <Card key={index} className="p-8 bg-card hover:shadow-lg transition-shadow text-center h-full">
                <h3 className="text-2xl md:text-3xl font-[100] text-card-foreground mb-2">
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