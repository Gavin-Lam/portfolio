import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <FeaturedProjects />
        <section
          aria-label="Experience and skills"
          className="border-t border-line bg-surface"
        >
          <div className="mx-auto grid max-w-page gap-x-12 gap-y-12 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-12">
            <Experience />
            <About />
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
