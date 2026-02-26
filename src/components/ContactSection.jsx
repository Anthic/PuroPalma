import React, { useRef } from "react";


// Local assets theke images import kora hocche
import Contact1 from "../assets/c-1.webp";
import Contact2 from "../assets/c-2.webp";
import Contact3 from "../assets/c-3.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



const ContactSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });

      // Text Animation
      tl.from(".contact-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Image Reveal Animation (Scale + Opacity)
      tl.from(
        ".contact-image",
        {
          scale: 1.2,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "expo.out",
        },
        "-=0.8",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Header Info */}
      <div className="mb-16">
        <span className="contact-text block text-xs uppercase tracking-[0.3em] text-[#F2EBDB] mb-6 font-semibold">
          CONTACT US
        </span>
        <h2 className="contact-text text-4xl md:text-5xl lg:text-[64px] font-medium leading-[1.1] mb-12 max-w-6xl tracking-tight">
          Your Private Sanctuary Awaits. We’re <br /> Here to Guide You.
        </h2>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mt-16 border-t border-white/10 pt-10">
          <div className="contact-text">
            <p className="text-gray-400 text-sm mb-2">Location</p>
            <p className="text-lg">
              El Pinar, Torremolinos,
              <br /> Malaga, Spain.
            </p>
          </div>
          <div className="contact-text">
            <p className="text-gray-400 text-sm mb-2">WhatsApp</p>
            <a
              href="tel:+011000011"
              className="text-lg hover:text-[#C5A367] transition-colors"
            >
              (+0) 1100 0011
            </a>
          </div>
          <div className="contact-text">
            <p className="text-gray-400 text-sm mb-2">Email</p>
            <a
              href="mailto:hello@puropalma.com"
              className="text-lg hover:text-[#C5A367] transition-colors underline underline-offset-4"
            >
              hello@puropalma.com
            </a>
          </div>
        </div>
      </div>

      {/* Image Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-12">
        {[Contact1, Contact2, Contact3].map((img, idx) => (
          <div
            key={idx}
            className="contact-image relative h-87.5 md:h-112.5 lg:h-137.5 overflow-hidden rounded-sm group"
          >
            <img
              src={img}
              alt={`PuroPalma ${idx + 1}`}
              className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
