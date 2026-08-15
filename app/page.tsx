import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Work from "@/components/Work";
import Services from "@/components/Services";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Awards from "@/components/Awards";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClientLogos />
      <Work />
      <Services />
      <About />
      <Experience />
      <Testimonials />
      <Awards />
      <Pricing />
      <Blog />
      <FAQ />
      <Footer />
    </main>
  );
}
