import Hero from '@/components/HeroSection';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import ContactUs from '@/components/ContactUs';
import Faq from '@/components/Faq';


export default function Home() {
  return (
    <div>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="services">
        <Services/>
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <ContactUs/>
      </div>
      <div id="faq">
        <Faq />
      </div>
    </div>
  );
}
