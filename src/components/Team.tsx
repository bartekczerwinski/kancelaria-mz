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
      description: "Ekspert prawa podatkowego. Licencjonowany doradca podatkowy z wieloletnim doświadczeniem we współpracy z kancelariami, instytucjami finansowymi oraz sektorem prywatnym. Znana z umiejętności tworzenia kompleksowych rozwiązań w zakresie ekonomii, podatków i finansów, które realnie poprawiają kondycję firmy. Od lat skutecznie i z pasją doradza w budowaniu strategii ekonomicznej przedsiębiorstw."
    },
    {
      name: "Katarzyna Byjoś",
      role: "Ekspert",
      specialization: "Psycholog biznesu",
      description: "Psycholog, specjalista w dziedzinie psychologii biznesu z doświadczeniem w prowadzeniu negocjacji z instytucjami i kluczowymi wierzycielami. W pracy łączy analityczne podejście z umiejętnością budowania porozumienia, nawet w sytuacjach silnego konfliktu interesów. Jej priorytetem jest osiąganie porozumień, które realnie chronią interes przedsiębiorcy."
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-[100] text-primary mb-4">
            Poznaj nasz zespół
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-8 bg-card hover:shadow-lg transition-shadow">
              {member.image ? (
                // Layout with photo for Partners
                <div className="grid md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-1">
                    <div className="relative">
                      <img 
                        src={member.image} 
                        alt={`${member.name} - ${member.role}`}
                        className="w-full aspect-square object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-1">
                    <h3 className="text-2xl font-[100] text-card-foreground mb-2">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="mb-3">
                      {member.role}
                    </Badge>
                    <p className="text-primary font-semibold">
                      {member.specialization}
                    </p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ) : (
                // Layout without photo for Experts
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <h3 className="text-2xl font-[100] text-card-foreground mb-2">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="mb-3">
                      {member.role}
                    </Badge>
                    <p className="text-primary font-semibold">
                      {member.specialization}
                    </p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <Card className="mt-16 p-8 md:p-12 bg-primary/5 border-primary/20">
          <div className="text-center">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              W Kancelarii Misztal Zalewski kierujemy się głębokim poczuciem odpowiedzialności, pomagamy przedsiębiorcom w kryzysie odzyskać stabilność i ochronić to, co najcenniejsze. Łączymy prawo, finanse i praktykę biznesową, aby tworzyć rozwiązania, które naprawdę działają.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Działamy szybko, etycznie i z pełnym zaangażowaniem. Każdą sprawę prowadzimy indywidualnie, uwzględniając realia branży i presję, pod jaką działa właściciel firmy.
            </p>
            <p className="text-xl font-semibold text-primary mt-6">
              Naszym priorytetem jest Twoje bezpieczeństwo i skuteczny plan wyjścia z trudnej sytuacji.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Team;