import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Image Import (Local Assets)
import EssenceBG from "../assets/scrollBanner.jpg";

gsap.registerPlugin(ScrollTrigger);

const EssenceSection = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      // Text Reveal Animation
      gsap.from(contentRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    
    <section
      ref={containerRef}
      className="relative w-full h-[55vh] lg:h-[65vh] overflow-hidden flex items-center justify-center text-white"
    >
      {/* 1. Background Image - fixed thakbe kintu section height onujayi choto hobe */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${EssenceBG})`,
          backgroundAttachment: "fixed", 
        }}
      >
        {/* Dark Overlay - Text readability baranor jonno */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* 2. Content Overlay */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-4 md:px-6 max-w-4xl"
      >
        <h2 className="text-3xl md:text-5xl lg:text-[52px] font-serif mb-5 leading-tight tracking-tight">
          Ready to Experience the <br className="hidden md:block" /> Essence of PuroPalma?
        </h2>
        <p className="text-xs md:text-base lg:text-lg font-light opacity-85 mb-8 leading-relaxed max-w-2xl mx-auto">
          Connect with us directly to secure your private Mediterranean escape.
          Your journey to tranquility begins with a simple conversation.
        </p>

        <button className="px-10 md:px-24 py-3 border bg-[#F2EBDB] font-bold uppercase tracking-[0.2em] text-[12px] md:text-[14px] hover:bg-white hover:text-black transition-all duration-500 text-[#C5A059] shadow-xl active:scale-95">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default EssenceSection;