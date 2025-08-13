import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Po latach budowania firmy jedna zła decyzja spowodowała że stanąłem przed wizją bankructwa. Czułem, że to może być koniec… aż znalazłem Kancelarię Misztal Zalewski. Pełen profesjonalizm i wsparcie od początku do końca. Restrukturyzacja zakończyła się sukcesem. DZIĘKUJĘ!",
      author: "Pan Michał",
      industry: "branża transportowa"
    },
    {
      text: "To była trudna walka o firmę dla mnie i dla mojej rodziny. Kancelaria Misztal Zalewski przeprowadziła nas przez nią z empatią i jasnym planem. Każda decyzja była konsultowana, a dzięki temu dziś znowu mamy stabilny biznes. Czuliśmy się naprawdę zaopiekowani.",
      author: "Pani Agnieszka",
      industry: "firma usługowa"
    },
    {
      text: "Nie znałem prawa ani procedur. Myślę sobie \"koniec\", ale Pan Mecenas Zalewski wytłumaczył wszystko zrozumiale, spokojnie i konkretnie. Dług został znacząco zmniejszony, a firma stoi na nogach. Polecam z całego serca.",
      author: "Pan Tomasz",
      industry: "przedsiębiorca z sektora MŚP"
    }
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
    ));
  };

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Co mówią nasi Klienci
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card hover:shadow-lg transition-shadow h-full">
              <div className="flex mb-4">
                {renderStars()}
              </div>
              <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-card-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.industry}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;