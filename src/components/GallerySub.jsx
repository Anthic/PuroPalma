import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Images Import
import g1 from "../assets/g-1.jpg";
import g2 from "../assets/g-2.jpg";
import g3 from "../assets/g-3.jpg";
import g4 from "../assets/g-4.jpg";
import g5 from "../assets/g-5.jpg";
import g6 from "../assets/g-6.jpg";
import g7 from "../assets/g-7.jpg";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const GallerySub = () => {
  const containerRef = useRef(null);

  const projects = [
    { id: 1, image1: g1, image2: g2 },
    { id: 2, image1: g3, image2: g4 },
    { id: 3, image1: g5, image2: g6 },
    { id: 4, image1: g7, image2: g1 },
  ];

  useGSAP(
    function () {
      const rows = gsap.utils.toArray(".gallery-row");

      /* ── Step 1: Set initial state for ALL rows ── */
      gsap.set(rows, {
        scale: 0.75,
        opacity: 0.25,
        transformOrigin: "center center",
      });

      /* ── Step 2: Row 1 starts fully visible ── */
      gsap.set(rows[0], { scale: 1, opacity: 1 });

      rows.forEach((row, index) => {
        /* ── Enter animation (rows 2, 3, 4 only) ──
           As the row scrolls up into the viewport center,
           it scales from 0.75 → 1 and fades from 0.25 → 1   */
        if (index > 0) {
          gsap.fromTo(
            row,
            { scale: 0.75, opacity: 0.25 },
            {
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top 85%",    // starts when row top hits 85% of viewport
                end: "center center", // fully scaled when row center hits viewport center
                scrub: 1.2,
              },
            }
          );
        }

        /* ── Exit animation (ALL rows) ──
           As the row passes the center going upward,
           it shrinks from 1 → 0.75 and dims to 0.5 opacity  */
        gsap.fromTo(
          row,
          { scale: 1, opacity: 1 },
          {
            scale: 0.75,
            opacity: 0.5,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "center center", // starts when row center hits viewport center
              end: "bottom 15%",      // finishes when row bottom is near top
              scrub: 1.2,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="bg-black">
      <div className="w-11/12 mx-auto lg:p-4 p-2 pt-[15vh] lg:pt-[20vh]">

        {/* Gallery Rows */}
        <div className="gallery-container">
          {projects.map((elem, idx) => (
            <div
              key={idx}
              className="gallery-row w-full lg:h-125 mb-6 flex lg:flex-row flex-col lg:gap-4 gap-2"
            >
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          ))}
        </div>

        {/* View Gallery Button */}
        <div className="mt-20 flex justify-start">
          <Link
            to={"/gallery"}
            className="px-12 py-4 border bg-[#F2EBDB] font-bold uppercase tracking-widest text-[12px] hover:bg-white hover:text-black transition-all duration-500 text-[#C5A059]"
          >
            View Gallery
          </Link>
        </div>

      </div>
    </div>
  );
};

export default GallerySub;
