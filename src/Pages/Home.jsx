import Banner from "../components/Banner";
import ContactSection from "../components/ContactSection";
import EssenceSection from "../components/EssenceSection";
import Experience from "../components/Experience";
import GallerySub from "../components/GallerySub";


import LuxuryFacilities from "../components/LuxuryFacilities";
import PromoVideo from "../components/PromoVideo";

export default function Home() {
  return (
    <div>
      <Banner />
      <PromoVideo />
      <Experience />
      <LuxuryFacilities />
      <GallerySub/>
      
      <ContactSection />
      <EssenceSection />
    </div>
  );
}
