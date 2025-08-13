import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-[100] text-primary mb-4">
            Usługi w zakresie restrukturyzacji zadłużenia przedsiębiorstw
          </h2>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Column 1 */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-[100] text-primary mb-4">
                  Szybka diagnoza sytuacji
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Bezpłatna analiza Twojej sytuacji i konkretny plan ratunkowy.
                </p>
                <p className="text-primary font-medium italic">
                  → Zadzwoń dziś – niech czas zacznie działać na Twoją korzyść
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-[100] text-primary mb-4">
                  Negocjacje z wierzycielami
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Przejmujemy ciężar rozmów, chronimy Twoje interesy, szukamy realnych rozwiązań.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-[100] text-primary mb-6">
                  Postępowania restrukturyzacyjne
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-[100] text-foreground mb-2">
                      Postępowanie o zatwierdzenie układu
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      najpopularniejsza i najszybsza ochrona i plan spłaty.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-[100] text-foreground mb-2">
                      Przyspieszone postępowanie układowe
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      gdy czas jest kluczowy.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-[100] text-foreground mb-2">
                      Postępowanie układowe
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      dla firm z bardziej skomplikowaną sytuacją.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-[100] text-foreground mb-2">
                      Sanacja
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      gruntowna odbudowa firmy i pełna ochrona przed egzekucją.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-[100] text-primary mb-6">
                  Rozwiązania specjalne
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-[100] text-foreground">
                      Ochrona członków zarządu
                    </h4>
                  </div>

                  <div>
                    <h4 className="text-lg font-[100] text-foreground">
                      Pre-pack (przygotowana likwidacja)
                    </h4>
                  </div>

                  <div>
                    <h4 className="text-lg font-[100] text-foreground mb-2">
                      Restrukturyzacje branżowe
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      (handel, produkcja, transport, budownictwo, rolnictwo i wiele innych)
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-[100] text-foreground">
                      Upadłość przedsiębiorcy, a także upadłość konsumencka
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom decorative line */}
          <div className="mt-16 flex justify-center">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Dowiedz się, która opcja jest dla Ciebie
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;