import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Add 404 page structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Strona nie znaleziona - 404",
      "description": "Przepraszamy, ale strona, której szukasz nie istnieje. Wróć do strony głównej kancelarii restrukturyzacyjnej Misztal Zalewski.",
      "url": `https://misztal-zalewski.lovable.app${location.pathname}`,
      "isPartOf": {
        "@type": "WebSite",
        "name": "Misztal Zalewski - Kancelaria Restrukturyzacyjna",
        "url": "https://misztal-zalewski.lovable.app"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    script.id = '404-structured-data';
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('404-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Strona nie została znaleziona</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Przepraszamy, ale strona, której szukasz nie istnieje lub została przeniesiona.
        </p>
        <div className="space-y-4">
          <a 
            href="/" 
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2 font-medium transition-colors"
          >
            Wróć do strony głównej
          </a>
          <div className="text-sm text-muted-foreground">
            <p>Potrzebujesz pomocy prawnej w zakresie restrukturyzacji?</p>
            <a href="/#contact" className="text-primary hover:underline">
              Skontaktuj się z nami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
