import { About } from "@/components/Content/about";
import { Contact } from "@/components/Content/contact";
import { Footer } from "@/components/Content/footer";
import Hero from "@/components/Content/hero";
import Navbar from "@/components/Content/navbar";
import { Projects } from "@/components/Content/projects";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact/>
      <Footer />
    </main>
  );
}
