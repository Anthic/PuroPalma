import logo from "../assets/logo.png";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-14 px-1 md:px-3 lg:px-1 ">
      <div className="w-11/12 mx-auto">
        {/* Top Section: Navigation & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-12 md:gap-0 mb-32">
          {/* Middle: Navigation Links (Exact Position as Screenshot) */}
          <div className="md:ml-[40%]">
            <h4 className="text-[15px] uppercase tracking-[0.3em] text-[#F2EBDB] font-bold mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#home"
                  className="text-xl text-[#F2EBDB] lg:text-2xl hover:text-gray-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-xl text-[#F2EBDB] lg:text-2xl hover:text-gray-400 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-xl text-[#F2EBDB] lg:text-2xl hover:text-gray-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Social Follow Links */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#F2EBDB] font-bold mb-6">
              Follow Us On
            </h4>
            <div className="flex gap-6 text-2xl">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Logo & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          {/* Left Side: Logo Placeholder (Apni ekhane apnar logo add korben) */}
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="PuroPalma"
                className="h-14 md:h-20 w-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side: Back to Top & Copyright */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center text-[15px] uppercase tracking-widest text-[#F2EBDB] font-bold">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-white transition-colors"
            >
              Back to Top
            </button>
            <p>©2026 Puropalma All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
