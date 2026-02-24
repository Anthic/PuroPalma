import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MapSection = () => {
  const mapContainer = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".animate-map", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: mapContainer.current,
          start: "top 85%",
        },
      });

      gsap.from(".contact-text", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-trigger",
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-black py-20 overflow-hidden text-white"
    >
      <div className="w-11/12 mx-auto">
        <div
          ref={mapContainer}
          className="animate-map h-75 md:h-112.5 lg:h-137.5 relative rounded-sm overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl mb-24"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5471.216390776595!2d-4.5029377!3d36.6347141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72fb66a25690b1%3A0xc6f3f009f471e95e!2sTorremolinos%2C%20M%C3%A1laga%2C%20Spain!5e0!3m2!1sen!2sbd!4v1711234567890!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PuroPalma Location"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border border-white/10"></div>
        </div>

        <div className="contact-trigger">
          <h2 className="contact-text text-4xl md:text-5xl lg:text-[64px] font-serif leading-[1.1] mb-16 max-w-5xl tracking-tight">
            Reach Out to Us Directly
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 pt-12">
            <div className="contact-text">
              <p className="text-lg md:text-xl font-light">
                El Pinar, Torremolinos,
                <br /> Malaga, Spain.
              </p>
            </div>
            <div className="contact-text">
              <a
                href="tel:+011000011"
                className="text-lg md:text-xl font-light hover:text-[#C5A367] transition-colors"
              >
                (+0) 1100 0011
              </a>
            </div>
            <div className="contact-text">
              <a
                href="mailto:hello@puropalma.com"
                className="text-lg md:text-xl font-light hover:text-[#C5A367] transition-colors underline underline-offset-8 decoration-white/20"
              >
                hello@puropalma.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
