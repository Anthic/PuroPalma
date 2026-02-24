import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PromoVideo = () => {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        videoRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: videoContainerRef.current,
            start: "top 85%",
          },
        },
      );
    },
    { scope: videoContainerRef },
  );

  return (
    <section
      ref={videoContainerRef}
      className="w-full py-12 md:py-16 bg-[#0a0a0a]"
    >
      {/* Container: Width কমানো হয়েছে (w-10/12) এবং উচ্চতা কন্ট্রোল করা হয়েছে */}
      <div
        ref={videoRef}
        className="relative w-11/12 md:w-10/12 mx-auto h-75 md:h-125 overflow-hidden shadow-2xl border border-white/5"
      >
        {/* এখানে h-[300px] (Mobile) এবং h-[500px] (Desktop) ব্যবহার করা হয়েছে 
            যাতে ভিডিওটি খুব বেশি লম্বা না দেখায়।
        */}
        <iframe
          className="absolute top-1/2 left-1/2 w-full h-[120%] -translate-x-1/2 -translate-y-1/2 object-cover"
          src="https://www.youtube.com/embed/bCR8BXEfdF0?si=Wd7g5WBDdQjZqIRB&rel=0&modestbranding=1&autoplay=0&controls=1"
          title="PuroPalma Promotional Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default PromoVideo;
