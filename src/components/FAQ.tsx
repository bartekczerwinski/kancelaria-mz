import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Ile mam czasu, zanim wierzyciele zablokują mi konto?",
      answer: "Zazwyczaj działa to szybciej, niż myślisz. Dlatego warto podjąć natychmiastowe działania. W wielu przypadkach możemy wstrzymać egzekucję już w 2 dni od rozpoczęcia procedury."
    },
    {
      question: "Czy mogę wstrzymać egzekucję lub wypowiedzenie umów już teraz?",
      answer: "Tak. Po otwarciu postępowania restrukturyzacyjnego egzekucje zostaną wstrzymane, a Twoi wierzyciele nie będą mogli wszczynać nowych. To samo dotyczy wypowiedzenia kluczowych umów (np. leasingu czy najmu)."
    },
    {
      question: "Co zrobić w pierwszej kolejności, żeby nie pogorszyć sytuacji?",
      answer: "Nie podpisuj pochopnie ugód i nie spłacaj wybranych wierzycieli \"po trochu\". Najpierw ustal strategię, a my zrobimy pełną analizę sytuacji i pokażemy Ci, jak postępować by ograniczyć ryzyko."
    },
    {
      question: "Czy restrukturyzacja zmniejszy mój dług, czy tylko go odroczy?",
      answer: "W wyniku restrukturyzacji można osiągnąć i jedno i drugie jednocześnie. Wiele układów przewiduje realną redukcję zobowiązań (nawet o kilkadziesiąt procent), a pozostałą część rozkłada na raty, które firma jest w stanie spłacać."
    },
    {
      question: "Czy restrukturyzacja oznacza utratę firmy?",
      answer: "Nie. Jej celem jest uchronienie przedsiębiorstwa przed upadłością i innymi zagrożeniami oraz poprawa płynności finansowej."
    },
    {
      question: "Jak długo trwa cały proces?",
      answer: "Od kilku miesięcy do kilku lat. Wiele zależy od zastosowanej procedury i Twojej sytuacji."
    },
    {
      question: "Ile kosztuje pomoc kancelarii i kiedy muszę zapłacić?",
      answer: "Koszt ustalamy po analizie Twojej sytuacji. Często część wynagrodzenia rozkładamy na etapy postępowania, by odciążyć Twoją firmę i zapewnić jej płynność finansową w pierwszych miesiącach."
    },
    {
      question: "Jakie zobowiązania mogę objąć postępowaniem restrukturyzacyjnym?",
      answer: "Możesz objąć: kredyty bankowe i pożyczki, leasingi, zobowiązania handlowe wobec dostawców, zaległości podatkowe i ZUS (w określonym trybie), czynsze, media i inne koszty stałe. Nie można objąć m.in.: wierzytelności alimentacyjnych, rent uzyskanych z odszkodowań, wierzytelności ze stosunku pracy czy niektórych wierzytelności zabezpieczonych. W takich przypadkach doradzimy Ci inne rozwiązania."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Najczęstsze pytania przedsiębiorców w kryzysie
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:text-primary py-6">
                  {index + 1}. {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;