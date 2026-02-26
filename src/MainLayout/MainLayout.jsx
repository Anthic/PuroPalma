import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import FloatingWhatsApp from "../components/FlowtingWhatsapp";

export default function MainLayout() {
  return (
    <div className="font-poppins">
      <ScrollToTop />
      <NavBar />
      <Outlet />

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
