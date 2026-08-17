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

      <section id="top">
        <Hero />
      </section>

      <ClientLogos />

      <section id="work">
        <Work />
      </section>

      <section id="services">
        <Services />
      </section>

      <About />
      <Experience />
      <Testimonials />
      <Awards />
      <Pricing />
      <Blog />
      <FAQ />

      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}