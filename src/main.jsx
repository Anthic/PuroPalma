import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router.jsx";

/* ── GSAP Plugin Registration ── */
gsap.registerPlugin(ScrollTrigger);

/* ── Lenis Smooth Scroll Setup ── */
const lenis = new Lenis({
  duration: 1.4,           // scroll animation duration (higher = slower/smoother)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo easing
  orientation: "vertical",
  smoothWheel: true,        // smooth mouse wheel
  wheelMultiplier: 1,       // scroll speed multiplier
  smoothTouch: false,       // touch devices use native scroll (better UX)
  touchMultiplier: 2,
});

// Expose globally so ScrollToTop can call lenis.scrollTo(0)
window.lenis = lenis;

// Use GSAP ticker to drive Lenis (perfect sync with ScrollTrigger)
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// Disable GSAP lag smoothing for perfect Lenis sync
gsap.ticker.lagSmoothing(0);

// Update ScrollTrigger on every Lenis scroll event
lenis.on("scroll", ScrollTrigger.update);

/* ── Render App ── */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
