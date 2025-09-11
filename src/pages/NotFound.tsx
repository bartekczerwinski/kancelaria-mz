import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Home, Phone } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Set SEO meta tags for 404 page
    document.title = "Strona nie znaleziona - 404 | Misztal Zalewski Kancelaria Restrukturyzacyjna";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Nie możemy znaleźć strony, której szukasz. Skontaktuj się z nami lub wróć na stronę główną kancelarii restrukturyzacyjnej Misztal Zalewski w Lublinie.');
    }

    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-2xl mx-auto">
        <Card className="p-12 bg-card border-border">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-[100] text-card-foreground mb-4">
              Strona nie została znaleziona
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Przepraszamy, ale nie możemy znaleźć strony, której szukasz. 
              Mogła zostać przeniesiona lub usunięta. Sprawdź poprawność adresu 
              lub skontaktuj się z nami, jeśli potrzebujesz pomocy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={() => { scrollToTop(); window.location.href = '/'; }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Home className="h-4 w-4 mr-2" />
              Wróć na stronę główną
            </Button>
            
            <Button 
              onClick={() => { scrollToTop(); window.location.href = '/#kontakt'; }}
              variant="outline" 
              className="border-border hover:bg-muted"
            >
              <Phone className="h-4 w-4 mr-2" />
              Skontaktuj się z nami
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>Potrzebujesz pilnej pomocy prawnej?</p>
            <p className="font-semibold text-primary mt-1">
              📞 +48 501 047 762 | Reagujemy w 24h
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
