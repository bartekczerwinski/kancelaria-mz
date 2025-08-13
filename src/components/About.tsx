import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-[100] text-primary mb-8">
            O nas
          </h2>
          <p className="text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
            Pomagamy przedsiębiorcom wyjść z najtrudniejszych sytuacji, z poczuciem bezpieczeństwa i planem na przyszłość.
          </p>
        </div>

        {/* Creative layout with image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-6 top-0 w-1 h-20 bg-gradient-to-b from-primary to-primary/30 rounded-full"></div>
              <div className="pl-8">
                <p className="text-lg text-card-foreground leading-relaxed">
                  Wiemy, że kryzys firmy to nie tylko liczby. To Twój zespół, rodzina, klienci, zobowiązania i często dorobek wielu lat ciężkiej pracy i wyrzeczeń.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-0 w-1 h-20 bg-gradient-to-b from-primary/60 to-primary/10 rounded-full"></div>
              <div className="pl-8">
                <p className="text-lg text-card-foreground leading-relaxed">
                  Dlatego łączymy wiedzę prawniczą, doświadczenie biznesowe i finansowe, by znaleźć rozwiązanie skrojone pod Twoją sytuację.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-transparent p-8 rounded-lg">
              <p className="text-lg font-medium text-card-foreground leading-relaxed">
                <strong>Misztal Zalewski Kancelaria Restrukturyzacyjna</strong> to interdyscyplinarny zespół licencjonowanych doradców restrukturyzacyjnych, adwokatów, doradców podatkowych, rzeczoznawców majątkowych oraz psychologów biznesu.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-primary font-medium text-xl italic">
                Naszą misją jest dać Ci drugą szansę – i przygotować Cię na kolejne wyzwania.
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/lovable-uploads/65ed0619-d166-46e2-bfb5-cc32f613506a.png" 
                alt="Zespół Misztal Zalewski Kancelaria Restrukturyzacyjna podczas konsultacji"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Feature cards with WhyUs styling */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 bg-card hover:shadow-lg transition-shadow text-center h-full">
            <h3 className="text-2xl font-[100] text-primary mb-4">Jesteśmy elastyczni</h3>
            <p className="text-muted-foreground leading-relaxed">
              Dostosujemy się do specyfiki prowadzonej przez Ciebie firmy i profilu Twojej działalności. Posiadamy wieloletnie doświadczenie w obsłudze przedsiębiorstw z różnych branż.
            </p>
          </Card>
          
          <Card className="p-8 bg-card hover:shadow-lg transition-shadow text-center h-full">
            <h3 className="text-2xl font-[100] text-primary mb-4">Jesteśmy w pełni mobilni</h3>
            <p className="text-muted-foreground leading-relaxed">
              W razie zaistnienia takiej potrzeby, zorganizujemy spotkania, szkolenia, czy też negocjacje w dowolnej części kraju.
            </p>
          </Card>
          
          <Card className="p-8 bg-card hover:shadow-lg transition-shadow text-center h-full">
            <h3 className="text-2xl font-[100] text-primary mb-4">Jesteśmy dla Ciebie</h3>
            <p className="text-muted-foreground leading-relaxed">
              Zostałeś pozwany przez wierzycieli? Grozi Ci egzekucja komornicza? Pomożemy Ci na każdym etapie postępowania sądowego.
            </p>
          </Card>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default About;