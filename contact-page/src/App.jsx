import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}