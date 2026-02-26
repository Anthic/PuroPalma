import React, { useEffect, useRef } from "react";


// Images import
import PoolImg from "../assets/pool.webp";
import KitchenImg from "../assets/kitchen.webp";
import SleepImg from "../assets/sleep.webp";
import gym from "../assets/gym.webp";
import outdoor from "../assets/outdoor.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const LuxuryFacilities = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const cards = gsap.utils.toArray(".facility-card");

      cards.forEach((card, i) => {
        // Shudhu last card chara baki gulo stack hobe
        if (i < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            pin: true,
            pinSpacing: false, // Etai stacking effect create kore
            scrub: true,
            // Card overlap ke smooth korar jonno animation
            animation: gsap.to(card, {
              opacity: 0.4, // Nicher card ashle uporer ta halka dim hobe
              scale: 0.95, // Halka depth effect
              ease: "power1.inOut",
            }),
          });
        }
      });
    });

    return () => mm.revert();
  }, []);

  const facilityData = [
    {
      title: "Private Heated Saltwater Pool",
      img: PoolImg,
      desc: "Experience year-round relaxation in your exclusive saltwater pool...",
      bgColor: "bg-[#C5A367]",
    },
    {
      title: "Gourmet Chef’s Kitchen",
      img: KitchenImg,
      desc: "A professionally designed culinary space equipped with best-in-class NEFF...",
      bgColor: "bg-[#C5A367]",
    },
    {
      title: "Italian Sleep System",
      img: SleepImg,
      desc: "Rest deeply on OEKO-TEX certified breathable mattresses made in Italy...",
      bgColor: "bg-[#C5A367]",
    },
    {
      title: "GYM & Cardio Equipment",
      img: gym,
      desc: "Stay energized and maintain your peak performance in our state-of-the-art...",
      bgColor: "bg-[#C5A367]",
    },
    {
      title: "Outdoor Dining",
      img: outdoor,
      desc: "Savor the essence of Mediterranean living with elegant al fresco dining...",
      bgColor: "bg-[#C5A367]",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col lg:flex-row min-h-screen bg-white"
    >
      {/* LEFT SIDE - Content remains visible while right side stacks */}
      <div className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0 z-10 flex flex-col justify-center px-8 md:px-16 py-12 lg:py-0 bg-white">
        <span className="text-[14px] uppercase tracking-[0.3em] text-[#0F0F0F] font-bold mb-4">
          FACILITIES
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-medium leading-[1.2] text-[#0F0F0F] max-w-lg">
          A masterfully designed eco-smart sanctuary blending solar innovation
          with high-end Italian craftsmanship.
        </h2>
      </div>

      {/* RIGHT SIDE - Cards Stacking Container */}
      <div className="w-full lg:w-1/2 relative overflow-hidden">
        {facilityData.map((item, index) => (
          <section
            key={index}
            className={`facility-card relative h-screen w-full flex flex-col items-center justify-center text-[#343434] px-6 md:px-10 ${item.bgColor} border-b border-white/10`}
            style={{ zIndex: index }} // Pratyekta card-er order thik rakhar jonno
          >
            <h3 className="text-3xl md:text-[38px] font-serif mb-12 text-center tracking-tight leading-tight">
              {item.title}
            </h3>

            {/* Circular Image Frame */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-105 lg:h-105 rounded-full overflow-hidden border border-white/20 shadow-xl">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-110"
              />
            </div>

            <p className="mt-12 text-center max-w-sm text-sm md:text-[16px] leading-relaxed font-light">
              {item.desc}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default LuxuryFacilities;
