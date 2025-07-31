import React, { useState, useEffect } from "react";
import "./HeroSectionCSS.css";
import { motion } from "framer-motion";
import TechGlobe from "../TechGlobe/TechGlobe"


const TypingEffect = ({ text, speed, loop }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line
    let timeout;
    const typeText = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        if (loop) {
          timeout = setTimeout(() => {
            setDisplayedText("");
            setIndex(0);
          }, 2000);
        }
      }
    };

    const interval = setInterval(typeText, speed);

    return () => clearInterval(interval);
  }, [index, text, speed, loop]);

  return <motion.span>{displayedText}</motion.span>;
};

const HeroSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    const heroSection = document.querySelector(".hero-section");
    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="availability-badge shine-button">
        <div className="ping-dot" />
        <p>Available for full-time opportunities</p>
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <TypingEffect text="Hi, I'm Ronit Raj." speed={200} loop={true} />
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          >
            Full-Stack Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            I’m passionate about turning ideas into real-world web applications using clean, efficient code.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1.7 }}
          >
            <a
              href="https://drive.google.com/file/d/105_o7Zcg_cTf5LOIfTeT8riBfAqdMmJM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="join-button shine-button"
            >
              My Resume
            </a>
            <a href="mailto:ronit9450@gmail.com" className="contact-link shine-button">
              Mail Me
            </a>
          </motion.div>
        </div>
        <TechGlobe />
      </div>
    </div>
  );
};

export default HeroSection;
