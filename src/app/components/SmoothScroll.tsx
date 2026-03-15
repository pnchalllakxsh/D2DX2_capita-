import { useEffect } from 'react';
import Lenis from 'lenis';

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.13,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.1,
      smoothWheel: true,
      syncTouch: false,
      infinite: false,
    });

    let frameId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    // expose lenis globally so Framer Motion useScroll stays in sync
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return null;
}
