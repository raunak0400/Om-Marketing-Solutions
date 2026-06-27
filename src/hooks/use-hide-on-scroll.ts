'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Returns `true` when the user is scrolling DOWN on a small (mobile) screen,
 * so floating widgets can hide themselves and de-clutter the view. Reveals
 * again on scroll-up, near the top, or on larger screens.
 */
export function useHideOnScrollDown(threshold = 140, mobileBreakpoint = 768) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        // Never hide on desktop / tablet — only de-clutter the mobile view.
        if (window.innerWidth >= mobileBreakpoint) {
          setHidden(false);
          lastY.current = y;
          ticking = false;
          return;
        }
        const delta = y - lastY.current;
        if (Math.abs(delta) > 8) {
          if (delta > 0 && y > threshold) setHidden(true); // scrolling down
          else if (delta < 0) setHidden(false); // scrolling up
          lastY.current = y;
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold, mobileBreakpoint]);

  return hidden;
}
