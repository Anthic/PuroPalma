
import { useEffect, useState } from "react";
import { siteConfig } from "../data/property";
import { FiMessageCircle } from "react-icons/fi";

export default function FloatingWhatsApp() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 2000);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(138,76%,36%)] text-white shadow-lg transition-transform hover:scale-110 ${
        pulse ? "animate-pulse-whatsapp" : ""
      }`}
      aria-label="Contact via WhatsApp"
    >
      <FiMessageCircle size={26} />
    </a>
  );
}
