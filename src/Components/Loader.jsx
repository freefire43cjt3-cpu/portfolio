import "./Loader.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Loader({
  name = "RAYMOND",
  subtitle = "PORTFOLIO",
  onComplete,
}) {
  const letters = name.split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="loader-overlay">
      {/* GLOW ORBS */}
      <span className="loader-orb loader-orb-1" />
      <span className="loader-orb loader-orb-2" />
      <span className="loader-orb loader-orb-3" />

      {/* STARFIELD */}
      <div className="loader-stars" aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="loader-star"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 10) * 0.25}s`,
              width: i % 5 === 0 ? "3px" : "2px",
            }}
          />
        ))}
      </div>

      <div className="loader-content">
        {/* ORBIT SPINNER */}
        <div className="loader-spinner">
          <span className="loader-ring" />
          <span className="loader-ring loader-ring-2" />

          <motion.span
            className="loader-core"
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* NAME */}
        <div className="loader-name" aria-label={name}>
          {letters.map((letter, i) => (
            <motion.span
              key={`${letter}-${i}`}
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.05 + i * 0.035,
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>

        {/* SUBTITLE */}
        <div className="loader-subtitle">
          <span>{subtitle}</span>

          <span className="loader-dots">
            <motion.span
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
            >
              .
            </motion.span>

            <motion.span
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: 0.15,
              }}
            >
              .
            </motion.span>

            <motion.span
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: 0.3,
              }}
            >
              .
            </motion.span>
          </span>
        </div>

        {/* PROGRESS BAR */}
        <div className="loader-bar">
          <motion.span
            className="loader-bar-fill"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Loader;