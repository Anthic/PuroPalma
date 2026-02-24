import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="font-poppins">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
