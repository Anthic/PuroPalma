import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Image Import (Local assets theke)
import ContactBG from "../assets/contactbanner.jpg";

gsap.registerPlugin(ScrollTrigger);

const ContactBanner = () => {
  const bannerRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 85%", // Animation trigger point
          toggleActions: "play none none reverse",
        },
      });

      // 1. Vertical Gradient Overlay Animation
      tl.fromTo(
        overlayRef.current,
        { height: "0%", opacity: 0 },
        {
          height: "100%",
          opacity: 1,
          duration: 1.5,
          ease: "power4.inOut",
        },
      );

      // 2. Text Content Animation (Staggered reveal)
      tl.from(
        contentRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
        },
        "-=0.6", // Overlay finish hobar kichu agei text reveal shuru hobe
      );
    },
    { scope: bannerRef },
  );

  return (
    <section
      ref={bannerRef}
      className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden flex items-center justify-center text-white bg-[#030303]"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={ContactBG}
          alt="Contact Us Background"
          className="w-full h-full object-cover grayscale-10"
        />
      </div>

      {/* Vertical Linear Gradient Overlay (Animated) */}
      <div
        ref={overlayRef}
        className="absolute bottom-0 left-0 w-full z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(0deg,rgba(3, 3, 3, 1) 0%, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 1) 100%)",
        }}
      />

      {/* Content Overlay */}
      <div ref={contentRef} className="relative z-20 text-center px-6">
        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter leading-none">
          Contact Us
        </h1>
        <p className="text-lg md:text-2xl font-light opacity-80 tracking-wide">
          Say hi, ask anything.
        </p>
      </div>
    </section>
  );
};

export default ContactBanner;
