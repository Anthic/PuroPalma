import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

import promoVideo from "../assets/video/mickey9393.mp4";

gsap.registerPlugin(ScrollTrigger);

const PromoVideo = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(
    () => {
      
      gsap.fromTo(
        videoRef.current,
        {
          opacity: 0,
          scale: 1.1,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      // autoplay when enters viewport
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          videoRef.current.play();
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden pt-12"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={promoVideo}
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
    </section>
  );
};

export default PromoVideo;
