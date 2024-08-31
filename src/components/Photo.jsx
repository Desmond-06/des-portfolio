import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import lolo from "../assets/images/lolo.png";

const Photo = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="">
      {/* Container to keep photo and circle in the same position */}
      <div className="relative w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] flex items-center justify-center ">
        {/* Animated Circle */}
        <motion.svg
          className="absolute inset-0 "
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="253"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={
              isLargeScreen
                ? {
                    strokeDasharray: [
                      "15 120 25 25",
                      "16 25 92 72",
                      "4 250 22 22",
                    ],
                    rotate: [120, 360],
                  }
                : { strokeDasharray: "24 10 0 0", rotate: 0 }
            }
            transition={
              isLargeScreen
                ? {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }
                : { duration: 0 }
            }
          />
        </motion.svg>

        {/* Photo clipped to the circle */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-full hover:shadow-[0_0_20px_#00ffee] transition-transform duration-150  ease-in-out">
          <img src={lolo} alt="Lolo" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Photo;
