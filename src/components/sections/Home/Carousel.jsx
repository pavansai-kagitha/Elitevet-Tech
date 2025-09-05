import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "../../../assets/services/p-management.webp";

const Carousel = () => {
const images = [heroBg, heroBg, heroBg, heroBg, heroBg];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play every 2s (pause on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  return (
    <div
      className="position-relative d-flex justify-content-center align-items-center overflow-hidden"
      style={{ height: "300px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence>
        {images.map((src, i) => {
          // calculate relative position (center, left, right, etc.)
          let offset = (i - index + images.length) % images.length;
          if (offset > 2) offset -= images.length;

          return (
            <motion.div
              key={i}
              className="position-absolute"
              initial={{ opacity: 0 }}
              animate={{
                x: offset * 260, // space between cards
                scale: offset === 0 ? 1 : 0.7, // center bigger
                opacity: offset === 0 ? 1 : 0.4,
                zIndex: -Math.abs(offset),
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={src}
                alt={`Slide ${i}`}
                className="rounded shadow-lg"
                style={{ width: "250px", height: "180px", objectFit: "cover" }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
