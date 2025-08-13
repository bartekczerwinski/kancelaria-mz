import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Promises from "@/components/Promises";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Promises />
      <Services />
      <Process />
      <WhyUs />
      <About />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
