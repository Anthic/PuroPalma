import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to top on every page navigation, using Lenis if available
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.lenis) {
      // Use Lenis for instant scroll reset (no smooth animation on page change)
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      // Fallback
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
}
