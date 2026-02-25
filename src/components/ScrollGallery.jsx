import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import g1 from "../assets/g-1.jpg";
import g2 from "../assets/g-2.jpg";
import g3 from "../assets/g-3.jpg";
import g4 from "../assets/g-4.jpg";
import g5 from "../assets/g-5.jpg";
import g6 from "../assets/g-6.jpg";
import g7 from "../assets/g-7.jpg";
import g8 from "../assets/g-8.jpg";
import g9 from "../assets/g-9.jpg";
import g10 from "../assets/g-10.jpg";

/* ═══════════════════════════════════════════════════
   ANIMATION FLOW
   ═══════════════════════════════════════════════════
   CYCLE 1
   Phase 1 → g1 (left) slides UP       | g2 (right) PINNED  → g3 revealed under g1
   Phase 2 → g3 (left) PINNED          | g2 (right) PINNED  → g4 slides from BELOW over g2
   Phase 3 → g5 FULL-WIDTH from bottom (covers all, resets layout for cycle 2)

   CYCLE 2
   Phase 4 → g6 (left) slides UP       | g7 (right) PINNED  → g8 revealed under g6
   Phase 5 → g8 (left) PINNED          | g7 (right) slides UP → g9 revealed under g7
   Phase 6 → g10 FULL-WIDTH from bottom → SECTION END
   ═══════════════════════════════════════════════════ */

export default function ScrollGallery() {
  const wrapperRef = useRef(null);

  // LEFT HALF images
  const g1Ref = useRef(null);  // cycle-1 primary   → exits Phase 1
  const g3Ref = useRef(null);  // cycle-1 bg        → revealed under g1, hidden behind g5
  const g6Ref = useRef(null);  // cycle-2 primary   → exits Phase 4
  const g8Ref = useRef(null);  // cycle-2 bg        → revealed under g6

  // RIGHT HALF images
  const g2Ref = useRef(null);  // cycle-1 primary   → pinned through P1+P2, hidden behind g5
  const g4Ref = useRef(null);  // cycle-1 cover     → slides UP over g2 in Phase 2
  const g7Ref = useRef(null);  // cycle-2 primary   → exits Phase 5
  const g9Ref = useRef(null);  // cycle-2 bg        → revealed under g7

  // FULL-WIDTH images
  const g5Ref  = useRef(null); // cycle-1 full-width cover
  const g10Ref = useRef(null); // cycle-2 full-width end

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── Step 1: Set ALL initial positions via GSAP only (no React inline transforms) ── */
      // Visible at start
      gsap.set([g1Ref.current, g2Ref.current, g3Ref.current, g9Ref.current], { yPercent: 0 });

      // Hidden below viewport (will slide up)
      gsap.set(
        [g4Ref.current, g5Ref.current, g6Ref.current, g7Ref.current, g8Ref.current, g10Ref.current],
        { yPercent: 100 }
      );

      /* ── Step 2: Build master timeline ── */
      const tl = gsap.timeline({ paused: true });

      /*
        Position map (total timeline = 13 units):
        0   – 2    Phase 1:   g1 exits left
        2.5 – 4.5  Phase 2:   g4 slides up over g2 (from yP:100 → 0)
        5   – 6    Phase 3a:  g5 enters full-width
        6   – 6.5  Phase 3b:  cleanup cycle-1 + setup cycle-2 (short `to` not `set`)
        6.5 – 7.5  Phase 3c:  g5 exits
        8   – 9.5  Phase 4:   g6 exits left
        9.5 – 11   Phase 5:   g7 exits right
        11  – 12   Phase 6:   g10 enters full-width
      */

      // ── Phase 1: g1 scrolls off top ──
      tl.to(g1Ref.current, { yPercent: -100, ease: "none", duration: 2 }, 0);

      // ── Phase 2: g4 slides up from below OVER g2 ──
      tl.to(g4Ref.current, { yPercent: 0, ease: "none", duration: 2 }, 2.5);

      // ── Phase 3a: g5 full-width enters from bottom ──
      tl.to(g5Ref.current, { yPercent: 0, ease: "none", duration: 1 }, 5);

      // ── Phase 3b: cleanup (very short duration so scrub handles reversal cleanly) ──
      // Hide cycle-1 leftovers
      tl.to(g2Ref.current, { yPercent: -100, ease: "none", duration: 0.3 }, 6);
      tl.to(g3Ref.current, { yPercent: -100, ease: "none", duration: 0.3 }, 6);
      tl.to(g4Ref.current, { yPercent: -100, ease: "none", duration: 0.3 }, 6);
      tl.to(g1Ref.current, { yPercent: -200, ease: "none", duration: 0.3 }, 6); // push further if needed

      // Bring cycle-2 into position (behind g5 cover)
      tl.to(g6Ref.current, { yPercent: 0, ease: "none", duration: 0.3 }, 6);
      tl.to(g7Ref.current, { yPercent: 0, ease: "none", duration: 0.3 }, 6);
      tl.to(g8Ref.current, { yPercent: 0, ease: "none", duration: 0.3 }, 6);

      // ── Phase 3c: g5 exits upward, cycle-2 revealed ──
      tl.to(g5Ref.current, { yPercent: -100, ease: "none", duration: 1 }, 6.5);

      // ── Phase 4: g6 (left) exits up, g8 revealed ──
      tl.to(g6Ref.current, { yPercent: -100, ease: "none", duration: 1.5 }, 8);

      // ── Phase 5: g7 (right) exits up, g9 revealed ──
      tl.to(g7Ref.current, { yPercent: -100, ease: "none", duration: 1.5 }, 9.5);

      // ── Phase 6: g10 full-width enters → END ──
      tl.to(g10Ref.current, { yPercent: 0, ease: "none", duration: 1 }, 11);

      /* ── Step 3: Connect to scroll ── */
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * 12}`,
        scrub: 1.5,
        animation: tl,
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  /* ── Shared fill style (NO transform here — GSAP handles it) ── */
  const fill = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    /* Wrapper: 100vh base + 12×vh scroll space = 1300vh */
    <div ref={wrapperRef} style={{ height: "1300vh", background: "#0a0a0a" }}>

      {/* ─── STICKY VIEWPORT ─── */}
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>

        {/* ══ LEFT HALF ══
            z-order (bottom → top, all clipped by overflow:hidden):
            g8  z:1  cycle-2 bg   starts at yPercent:100
            g3  z:2  cycle-1 bg   starts at yPercent:0  (revealed under g1)
            g6  z:3  cycle-2 top  starts at yPercent:100
            g1  z:4  cycle-1 top  starts at yPercent:0  → exits Phase 1
        */}
        <div style={{
          position: "absolute", left: 0, top: 0,
          width: "50%", height: "100%", overflow: "hidden",
        }}>
          <img ref={g8Ref} src={g8} alt="g8" style={{ ...fill, zIndex: 1 }} />
          <img ref={g3Ref} src={g3} alt="g3" style={{ ...fill, zIndex: 2 }} />
          <img ref={g6Ref} src={g6} alt="g6" style={{ ...fill, zIndex: 3 }} />
          <img ref={g1Ref} src={g1} alt="g1" style={{ ...fill, zIndex: 4 }} />
        </div>

        {/* ══ RIGHT HALF ══
            z-order:
            g9  z:1  cycle-2 bg   starts at yPercent:0  (always behind, revealed under g7)
            g7  z:2  cycle-2 top  starts at yPercent:100
            g2  z:3  cycle-1 top  starts at yPercent:0  → stays pinned Phase 1+2
            g4  z:4  cycle-1 covr starts at yPercent:100 → slides over g2 Phase 2
        */}
        <div style={{
          position: "absolute", right: 0, top: 0,
          width: "50%", height: "100%", overflow: "hidden",
        }}>
          <img ref={g9Ref} src={g9} alt="g9" style={{ ...fill, zIndex: 1 }} />
          <img ref={g7Ref} src={g7} alt="g7" style={{ ...fill, zIndex: 2 }} />
          <img ref={g2Ref} src={g2} alt="g2" style={{ ...fill, zIndex: 3 }} />
          <img ref={g4Ref} src={g4} alt="g4" style={{ ...fill, zIndex: 4 }} />
        </div>

        {/* ══ FULL-WIDTH: g5 (Cycle 1 cover, z:10) ══ */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 10 }}>
          <img ref={g5Ref} src={g5} alt="g5 full" style={{ ...fill }} />
        </div>

        {/* ══ FULL-WIDTH: g10 (Cycle 2 end, z:11) ══ */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 11 }}>
          <img ref={g10Ref} src={g10} alt="g10 full" style={{ ...fill }} />
        </div>

      </div>
    </div>
  );
}
