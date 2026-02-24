import gsap from "gsap";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { BiMenu, BiX } from "react-icons/bi";
import logo from "../assets/logo.png";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const overlayRef = useRef(null);
  const linksContainerRef = useRef(null);

  // GSAP Animation Logic
  useGSAP(
    () => {
      if (isOpen) {
        gsap.to(overlayRef.current, {
          y: 0,
          duration: 0.8,
          ease: "power4.inOut",
          display: "flex",
        });

        gsap.fromTo(
          linksContainerRef.current.querySelectorAll("li"),
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            delay: 0.4,
            ease: "power3.out",
          },
        );
      } else {
        gsap.to(overlayRef.current, {
          y: "-100%",
          duration: 0.6,
          ease: "power4.inOut",
          display: "none",
        });
      }
    },
    { dependencies: [isOpen] },
  );

  const navLinks = (
    <>
      <li className="overflow-hidden">
        <NavLink
          to={"/"}
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive ? "text-cyan-400" : "text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="overflow-hidden">
        <NavLink
          to={"/gallery"}
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive ? "text-cyan-400" : "text-white"
          }
        >
          Gallery
        </NavLink>
      </li>
      <li className="overflow-hidden">
        <NavLink
          to={"/contact"}
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive ? "text-cyan-400" : "text-white"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <header className="relative w-full ">
     
      <nav className="absolute top-0 left-0 right-0 w-11/12 mx-auto z-40 flex items-center justify-between px-6 py-4 md:px-10 bg-transparent">
        {/* Left Side: Logo */}
        <div className="flex items-center shrink-0">
          <img
            src={logo}
            alt="PuroPalma"
            className="h-7 md:h-9 w-auto object-contain"
          />
        </div>

      
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 text-white group outline-none transition-all border border-gray-400 p-2"
        >
          <span className="text-[12px] text-white font-bold tracking-[0.2em] uppercase hidden md:block  group-hover:opacity-100">
            Menu
          </span>
          <div className=" transition-all ">
            <BiMenu size={24} />
          </div>
        </button>
      </nav>

      
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-[#001524]/95 backdrop-blur-xl flex flex-col items-center justify-center "
        style={{ transform: "translateY(-100%)" }}
      >
        {/* Close Icon */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform duration-300"
        >
          <BiX size={44} strokeWidth={1} />
        </button>

        {/* Dynamic NavLinks */}
        <ul
          ref={linksContainerRef}
          className="flex flex-col gap-6 md:gap-10 text-center text-3xl md:text-6xl font-semibold tracking-tighter text-white"
        >
          {navLinks}
        </ul>

        {/* Footer info inside menu */}
        <div className="absolute bottom-10 text-white/30 text-[10px] tracking-[0.4em] uppercase font-medium">
          Exclusive Living • PuroPalma
        </div>
      </div>
    </header>
  );
}
