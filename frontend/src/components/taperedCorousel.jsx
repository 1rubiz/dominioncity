import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const TaperedCarousel = ({ items }) => {
  const carouselRef = useRef(null); // Reference to the carousel container
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth; // Width of the container
      const contentWidth = carouselRef.current.scrollWidth; // Total width of the content
      setConstraints({ left: -contentWidth + containerWidth, right: 0 });
    }
  }, [items]);

  return (
    <div
      ref={carouselRef}
      className="relative overflow-hidden w-full h-64 flex items-center"
    >
      <motion.div
        className="flex gap-6"
        drag="x"
        dragConstraints={constraints}
        whileTap={{ cursor: "grabbing" }}
        style={{ cursor: "grab" }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-48 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center text-center text-lg font-semibold"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            whileHover={{ scale: 1.1 }}
            initial={{
              scale: 0.9,
              opacity: 0.7,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          >
            {item.title}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TaperedCarousel;
