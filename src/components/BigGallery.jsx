import React from "react";

// Images Import
import g1 from "../assets/g-1.webp";
import g2 from "../assets/g-2.webp";
import g3 from "../assets/g-3.webp";
import g4 from "../assets/g-4.webp";
import g5 from "../assets/g-5.webp";
import g6 from "../assets/g-6.webp";
import g7 from "../assets/g-7.webp";
import g8 from "../assets/g-8.webp";
import g9 from "../assets/g-9.webp";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const BigGallery = () => {
  const projects = [
    { id: 1, image1: g1, image2: g2 },
    { id: 2, image1: g3, image2: g4 },
    { id: 3, image1: g5, image2: g6 },
    { id: 4, image1: g7, image2: g1 },
    { id: 5, image1: g8, image2: g9 },
  ];

  useGSAP(function () {
    gsap.from(".hero", {
      height: "100px",
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      stagger: {
        amount: 0.8,
      },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 90%",
        end: "top -120%",
        scrub: true,
      },
    });
  });

  return (
    /* 1. Added a main wrapper with margin-top and padding */
    <div className=" bg-black">
      {/* 2. Content Container: Ekhane padding dilei upore space thakbe */}
      <div className="w-11/12 mx-auto lg:p-4 p-2 pt-[15vh] lg:pt-[20vh] ">
        {/* Optional: Gallery Title for better structure */}
        {/* <div className="mb-20 px-4">
           <h2 className="text-white text-5xl lg:text-7xl font-serif uppercase opacity-20">Gallery</h2>
        </div> */}

        {/* Animation Trigger Container */}
        <div className="lol">
          {projects.map((elem, idx) => (
            <div
              key={idx}
              className="hero w-full lg:h-125 mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2 overflow-hidden"
            >
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          ))}
        </div>

        {/* Bottom View Button */}
        {/* <div className="mt-20 flex justify-start">
          <button className="px-12 py-4 border bg-[#F2EBDB] font-bold  uppercase tracking-widest text-[12px] hover:bg-white hover:text-black transition-all duration-500 text-[#C5A059]">
            View Gallery
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default BigGallery;
