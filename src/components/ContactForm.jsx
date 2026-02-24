import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const formRef = useRef(null);

  useGSAP(
    () => {
      // Form elements reveal animation
      gsap.from(".form-item", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: formRef },
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for sending message
    console.log("Message Sent");
  };

  return (
    <section
      ref={formRef}
      className="bg-black py-20 px-6 flex justify-center items-center min-h-[60vh]"
    >
      <div className="w-full max-w-3xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Field */}
          <div className="form-item group">
            <label className="block text-[13px] uppercase tracking-[0.3em] text-white font-bold mb-3">
              NAME
            </label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full bg-white text-black px-4 py-4 outline-none focus:ring-1 focus:ring-gray-300 transition-all font-light"
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-item group">
            <label className="block text-[13px] uppercase tracking-[0.3em] text-white font-bold mb-3">
              EMAIL
            </label>
            <input
              type="email"
              placeholder="janesmith@mail.com"
              className="w-full bg-white text-black px-4 py-4 outline-none focus:ring-1 focus:ring-gray-300 transition-all font-light"
              required
            />
          </div>

          {/* Message Field */}
          <div className="form-item group">
            <label className="block text-[13px] uppercase tracking-[0.3em] text-white font-bold mb-3">
              MESSAGE
            </label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full bg-white text-black px-4 py-4 outline-none focus:ring-1 focus:ring-gray-300 transition-all font-light resize-none"
              required
            ></textarea>
          </div>

          {/* Send Button */}
          <div className="form-item pt-4">
            <button
              type="submit"
              className="w-full bg-[#F2EBDB] text-[#C5A059] py-5 uppercase tracking-[0.4em] text-[12px] font-bold hover:bg-white transition-all duration-500 shadow-lg active:scale-95"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
