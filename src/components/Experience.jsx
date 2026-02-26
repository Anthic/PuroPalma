import { useRef } from "react";


// ইমেজ ইম্পোর্ট (আপনার সঠিক পাথ অনুযায়ী চেক করে নিন)
import imgOne from "../assets/one.webp";
import imgTwo from "../assets/two.webp";
import imgThree from "../assets/three.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRefs = useRef([]);

  const galleryImages = [imgOne, imgTwo, imgThree];

  useGSAP(
    () => {
      // টেক্সট অ্যানিমেশন
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      });

      // ইমেজ অ্যানিমেশন (Reveal Effect)
      imageRefs.current.forEach((img, index) => {
        gsap.fromTo(
          img,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            delay: index * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 90%",
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-24 bg-[#0a0a0a] text-white"
    >
      <div className="w-11/12 mx-auto">
        {/* Upper Text Content */}
        <div ref={textRef} className="max-w-7xl mb-12 md:mb-20 pl-20">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-white block mb-6">
            About
          </span>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-light leading-[1.4] tracking-tight">
            Experience PuroPalma: A uniquely modern villa in Torremolinos. Relax
            by your private saltwater pool, surrounded by lush palms. An
            eco-friendly sanctuary featuring world-class Italian design and
            Mediterranean warmth.
          </h2>
        </div>

        {/* 3 Images Grid - Height Controlled */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className="group relative overflow-hidden bg-white/5 
                         h-75 md:h-87.5 lg:h-100 w-full"
            >
              <img
                src={src}
                alt={`Villa View ${index + 1}`}
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
