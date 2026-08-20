import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Work from "@/components/Work";
import Services from "@/components/Services";
import About from "@/components/About";

import Process from "@/components/Process";
import Pricing from "@/components/craft";


import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section id="top">
        <Hero />
      </section>



      <section id="work">
        <Work />
      </section>


      <section id="services">
        <Services />
      </section>

      <About />
 
      <Pricing />
    
      <FAQ />

<Process/>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}