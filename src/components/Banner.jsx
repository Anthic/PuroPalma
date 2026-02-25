import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import bannerImg from "../assets/banner.jpg";
import { Link } from "react-router-dom";

export default function Banner() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.5 },
      )
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.8",
        )
        .fromTo(
          btnRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8 },
          "-=0.5",
        );
    },
    { scope: containerRef },
  );
  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={bannerImg}
          alt="Luxury Villa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-7xl">
        <div className=" mb-6 md:mb-10">
          <h1
            ref={titleRef}
            className="text-white font-['Poppins'] font-bold text-[40px] md:text-[64px] leading-[100%] tracking-normal text-center"
          >
            Your Private Escape in Malaga
          </h1>
        </div>

        {/* Subtitle Wrapper */}
        <div className="overflow-hidden">
          <p
            ref={subtitleRef}
            className="text-white/80 font-poppins font-normal text-[18px] md:text-[24px] leading-[120%] tracking-[-0.04em] text-center max-w-3xl mx-auto line-clamp-3"
          >
            Welcome to PuroPalma, a private luxury villa designed for
            relaxation, comfort, and tranquility.
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-16 z-20">
        <Link
          to={"/contact"}
          ref={btnRef}
          className="flex items-center gap-3 bg-black/80 hover:bg-white hover:text-black transition-all duration-500 border border-white/20 px-8 py-4 md:px-10 md:py-5 uppercase tracking-[0.2em] text-xs md:text-sm group"
        >
          Contact Us
          <span className="group-hover:translate-x-2 transition-transform duration-300 text-xl">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
