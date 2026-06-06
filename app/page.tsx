import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="space-y-32">
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
