import { Card } from "@/components/ui/card";
import { Zap, TrendingDown, Shield } from "lucide-react";

const Promises = () => {
  const promises = [
    {
      icon: Zap,
      title: "Natychmiastowe działania",
      description: "Wstrzymamy egzekucję nawet w 2 dni"
    },
    {
      icon: TrendingDown,
      title: "Zmniejszenie długu",
      description: "Realne, negocjowane z wierzycielami"
    },
    {
      icon: Shield,
      title: "Ochrona Ciebie i Twojego majątku",
      description: "Bez niepotrzebnego ryzyka"
    }
  ];

  return (
    <section 
      className="py-20"
      style={{
        backgroundColor: '#3a2e27',
        backgroundImage: `url(/lovable-uploads/443d78e4-0bda-42f4-9221-74dc81823394.png)`,
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'top center'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-[100] text-white mb-4">
            Obietnice, których dotrzymujemy
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {promises.map((promise, index) => {
            const IconComponent = promise.icon;
            return (
              <Card key={index} className="p-8 text-center bg-card hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {promise.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {promise.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Promises;