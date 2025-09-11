import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Team = () => {
  const teamMembers = [
    {
      name: "Marcin Misztal",
      role: "Partner",
      specialization: "Licencjonowany doradca restrukturyzacyjny i adwokat",
      description: "Licencjonowany doradca restrukturyzacyjny i adwokat z wieloletnim doświadczeniem w prowadzeniu postępowań restrukturyzacyjnych i upadłościowych. Łączy wiedzę prawniczą z praktyką zarządzania przedsiębiorstwami, pomagając firmom w kryzysie odzyskać stabilność i płynność finansową. Ekspert w dziedzinie tworzenia strategii restrukturyzacyjnej przedsiębiorstw. W Kancelarii MZ odpowiada za przygotowanie realistycznych prognoz i planów spłat, które umożliwiają firmom przejście przez proces restrukturyzacji bez utraty płynności. Będąc osobą z natury spokojną i opanowaną łagodzi emocje i wprowadza atmosferę racjonalnego dialogu. Swoją umiejętnością zachowania spokoju nawet w najtrudniejszych sytuacjach, emanuje na innych.",
      image: "/lovable-uploads/51df3420-34e2-4da6-9c19-3893989b9548.png"
    },
    {
      name: "Konrad Zalewski",
      role: "Partner",
      specialization: "Adwokat - prawo cywilne i gospodarcze",
      description: "Adwokat specjalizujący się w prawie cywilnym i gospodarczym, w tym w obsłudze spółek prawa handlowego oraz negocjacjach z wierzycielami. Prawnik z bogatym doświadczeniem w prowadzeniu postępowań sądowych zarówno cywilnych, jak i gospodarczych. W pracy kieruje się rzetelnością i skutecznością, a każdą sprawę traktuje indywidualnie, dopasowując strategię do specyfiki branży i sytuacji klienta. Wyróżnia się umiejętnością tworzenia optymalnej płaszczyzny negocjacyjnej oraz wysokim poziomem umiejętności miękkich, dzięki czemu rozwiązanie nawet najtrudniejszego problemu staje się możliwe.",
      image: "/lovable-uploads/61b79cf5-69e8-47fa-aef1-8d3507c3c2fd.png"
    },
    {
      name: "Katarzyna Przemyska",
      role: "Ekspert",
      specialization: "Licencjonowany doradca podatkowy",
      description: "Ekspert prawa podatkowego. Licencjonowany doradca podatkowy z wieloletnim doświadczeniem we współpracy z kancelariami, instytucjami finansowymi oraz sektorem prywatnym. Znana z umiejętności tworzenia kompleksowych rozwiązań w zakresie ekonomii, podatków i finansów, które realnie poprawiają kondycję firmy. Od lat skutecznie i z pasją doradza w budowaniu strategii ekonomicznej przedsiębiorstw.",
      image: "/lovable-uploads/7e76d3a5-6af1-4773-852d-ceb87b2dbbb1.png"
    },
    {
      name: "Katarzyna Byjoś",
      role: "Ekspert",
      specialization: "Psycholog biznesu",
      description: "Psycholog, specjalista w dziedzinie psychologii biznesu z doświadczeniem w prowadzeniu negocjacji z instytucjami i kluczowymi wierzycielami. W pracy łączy analityczne podejście z umiejętnością budowania porozumienia, nawet w sytuacjach silnego konfliktu interesów. Jej priorytetem jest osiąganie porozumień, które realnie chronią interes przedsiębiorcy.",
      image: "/lovable-uploads/ea5174ea-140b-4920-8284-c23fc1de87b7.png"
    }
  ];

  const partners = teamMembers.filter(member => member.role === "Partner");
  const experts = teamMembers.filter(member => member.role === "Ekspert");

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-[100] text-primary mb-4">
            Poznaj nasz zespół
          </h2>
        </div>

        {/* Partners Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="p-8 bg-card hover:shadow-lg transition-shadow text-center">
                <div className="mb-6">
                  <img 
                    src={partner.image} 
                    alt={`${partner.name} - Partner Kancelarii Restrukturyzacyjnej Misztal Zalewski, ${partner.specialization} w Lublinie`}
                    className="w-48 h-48 object-cover rounded-lg shadow-lg mx-auto mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-3xl font-[100] text-card-foreground mb-2">
                    {partner.name}
                  </h3>
                  <Badge variant="secondary" className="mb-3">
                    {partner.role}
                  </Badge>
                  <p className="text-primary font-semibold text-lg mb-4">
                    {partner.specialization}
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed text-left">
                  {partner.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Experts Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {experts.map((expert, index) => (
              <Card key={index} className="p-8 bg-card hover:shadow-lg transition-shadow text-center">
                <div className="mb-6">
                  <img 
                    src={expert.image} 
                    alt={`${expert.name} - Ekspert Kancelarii Restrukturyzacyjnej Misztal Zalewski, ${expert.specialization} w Lublinie`}
                    className="w-48 h-48 object-cover rounded-lg shadow-lg mx-auto mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-3xl font-[100] text-card-foreground mb-2">
                    {expert.name}
                  </h3>
                  <Badge variant="secondary" className="mb-3">
                    {expert.role}
                  </Badge>
                  <p className="text-primary font-semibold text-lg mb-4">
                    {expert.specialization}
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed text-left">
                  {expert.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Creative concluding section with dark green background */}
        <div className="mt-16 relative">
          <div className="bg-[#04090a] rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="order-1 lg:order-1 space-y-6">
                <div>
                  <p className="text-lg text-white leading-relaxed">
                    W Kancelarii Misztal Zalewski kierujemy się głębokim poczuciem odpowiedzialności, pomagamy przedsiębiorcom w kryzysie odzyskać stabilność i ochronić to, co najcenniejsze. Łączymy prawo, finanse i praktykę biznesową, aby tworzyć rozwiązania, które naprawdę działają.
                  </p>
                </div>

                <div>
                  <p className="text-lg text-white leading-relaxed">
                    Działamy szybko, etycznie i z pełnym zaangażowaniem. Każdą sprawę prowadzimy indywidualnie, uwzględniając realia branży i presję, pod jaką działa właściciel firmy.
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <p className="text-xl font-medium text-white">
                    Naszym priorytetem jest Twoje bezpieczeństwo i skuteczny plan wyjścia z trudnej sytuacji.
                  </p>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="relative order-2 lg:order-2">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/lovable-uploads/ba42eb7a-951d-4590-b44b-43b659f77630.png" 
                    alt="Marcin Misztal i Konrad Zalewski - Partnerzy Kancelarii Restrukturyzacyjnej w Lublinie, doradcy restrukturyzacyjni z wieloletnim doświadczeniem"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Bottom decorative line */}
            <div className="mt-12 flex justify-center">
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;