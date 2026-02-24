import ContactBanner from "../components/ContactBanner";
import ContactForm from "../components/ContactForm";
import MapSection from "../components/MapSection";
import NavBar from "../components/NavBar";

export default function Contact() {
  return (
    <div>
      <NavBar />

      <ContactBanner />
      <ContactForm />
      <MapSection />
    </div>
  );
}
