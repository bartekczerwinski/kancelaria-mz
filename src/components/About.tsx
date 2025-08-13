import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              O nas
            </h2>
            <p className="text-xl text-foreground leading-relaxed">
              Pomagamy przedsiębiorcom wyjść z najtrudniejszych sytuacji, z poczuciem bezpieczeństwa i planem na przyszłość.
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card mb-12">
            <div className="space-y-6 text-lg text-card-foreground leading-relaxed">
              <p>
                Wiemy, że kryzys firmy to nie tylko liczby. To Twój zespół, rodzina, klienci, zobowiązania i często dorobek wielu lat ciężkiej pracy i wyrzeczeń. Dlatego łączymy wiedzę prawniczą, doświadczenie biznesowe i finansowe, by znaleźć rozwiązanie skrojone pod Twoją sytuację.
              </p>
              <p>
                <strong>Misztal Zalewski Kancelaria Restrukturyzacyjna</strong> to interdyscyplinarny zespół licencjonowanych doradców restrukturyzacyjnych, adwokatów, doradców podatkowych, rzeczoznawców majątkowych oraz psychologów biznesu, będących ekspertami w swoich dziedzinach, którzy od lat skutecznie ratują firmy.
              </p>
              <p className="text-primary font-semibold text-xl">
                Naszą misją jest dać Ci drugą szansę – i przygotować Cię na kolejne wyzwania.
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">Jesteśmy elastyczni</h3>
              <p className="text-muted-foreground">
                Dostosujemy się do specyfiki prowadzonej przez Ciebie firmy i profilu Twojej działalności. Posiadamy wieloletnie doświadczenie w obsłudze przedsiębiorstw z różnych branż.
              </p>
            </Card>
            
            <Card className="p-6 bg-card text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">Jesteśmy w pełni mobilni</h3>
              <p className="text-muted-foreground">
                W razie zaistnienia takiej potrzeby, zorganizujemy spotkania, szkolenia, czy też negocjacje w dowolnej części kraju.
              </p>
            </Card>
            
            <Card className="p-6 bg-card text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">Jesteśmy dla Ciebie</h3>
              <p className="text-muted-foreground">
                Zostałeś pozwany przez wierzycieli? Grozi Ci egzekucja komornicza? Pomożemy Ci na każdym etapie postępowania sądowego.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;