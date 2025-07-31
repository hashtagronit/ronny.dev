import React from "react";
import "./AboutMeCSS.css";
import profileImage from "../../images/myPhoto2.jpg";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <>
      <div id="AboutMe" className="about-section">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h1>
            <i className="fa-regular fa-user"></i> About Me
          </h1>
          <p>
            Hi, I'm <b style={{ color: '#4a90e2', fontSize: "1.2em" }}>Ronit Raj</b>.
            I'm a full-stack web developer with a passion for building fast, responsive, and user-focused web applications. With experience in React, Node.js, TypeScript, and modern backend tools, I enjoy turning complex problems into clean, maintainable code. I have a strong eye for design and performance, and I love creating seamless user experiences. My journey began with a curiosity for how the web works, and it’s grown into a focused career path where I aim to contribute to impactful, real-world products.
          </p>
        </motion.div>
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 80,
            damping: 11
          }}
        >
          <motion.img
            src={profileImage}
            alt="Profile"
            draggable="false"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default AboutMe;
