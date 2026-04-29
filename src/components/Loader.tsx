"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Skip on subsequent visits within session
    if (typeof window !== "undefined" && sessionStorage.getItem("julthentic_loaded")) {
      setShow(false);
      return;
    }

    const start = Date.now();
    const duration = 1400;

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);
      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setTimeout(() => {
          setShow(false);
          sessionStorage.setItem("julthentic_loaded", "1");
        }, 350);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="loader-meta">
            <span>Julthentic — Vol. 01</span>
            <span>{String(progress).padStart(3, "0")}%</span>
          </div>
          <div className="loader-bar" style={{ width: `${progress}%` }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
