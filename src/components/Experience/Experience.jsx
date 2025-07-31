import React, { useState } from "react";
import "./ExperienceCSS.css";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: `<a href="https://www.linkedin.com/posts/hashtagronit_successfully-completed-a-transformative-summer-activity-7227106477109297152-UOn6?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRxOrwBuRh980zCGDQuloQ-Ty0ewEmPyVw" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">⚛ ReactJs Intern</a>`,
      organization: "Celebal Technologies",
      duration: "May 2024- Jul 2024",
      details:
        "As a React JS Intern at Celebal Technologies, I built dynamic and responsive web apps, including a feature-rich admin dashboard and a full-stack task manager using React, and Tailwind CSS. I integrated APIs like ChatGPT and DALL·E in an AI-powered simulation tool, optimized components for performance and usability, and collaborated in an Agile team, gaining hands-on experience in real-world development and scalable UI design.",
    },
    {
      role: `<a href="https://www.linkedin.com/posts/marketing-and-promotions-club-gcet_leadership-marketing-strategy-activity-7170162668987670528-f4g0/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">
               🧑‍💼 Club President
             </a>`,
      organization: "Marketing & Promotions Club GCET",
      duration: "Nov 2023- Sep 2024",
      details:
        "As Club Head of the Marketing and Promotions Club at GCET, I led a dynamic team in promoting major college events. I strategized and executed digital campaigns that significantly boosted student engagement and event turnout. Under my leadership, the club's social media reach tripled, and we built a strong campus brand presence. I also conducted team recruitments, mentored juniors, and collaborated with the student council and faculty to ensure the smooth execution of all promotional activities.",
    },
    {
      role: `<a href="https://www.linkedin.com/posts/galgotias-extreme-club_one-story-ends-another-begins-galgotias-activity-7168565982150557697-gGso/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">
               🧑‍💻 Secretary
             </a>`,
      organization: "Extreme Club CSE Department GCET",
      duration: "Nov 2023- Sep 2024",
      details:
        "As Secretary of the Extreme Club, I coordinated club activities and strengthened engagement within the CSE department. I successfully organized a 48-hour continuous All India level hackathon, demonstrating strong leadership skills and ensuring seamless execution. I also organized meetings, managed membership drives, and led initiatives to foster a collaborative and inclusive community. Through close collaboration with faculty and students, I helped increase participation in technical events and workshops, enhancing the club’s presence and impact across the department.",
    }
   
  ];

  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section id="Experience" className="experience-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <i className="fa-solid fa-business-time"></i> Experience
      </motion.h2>
      <motion.div
        className="experience-timeline"
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2, 
            },
          },
        }}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.15 * index, 
            }}
          >
            <div className="timeline-content">
            <h3 dangerouslySetInnerHTML={{ __html: experience.role }} />
              <p className="organization">{experience.organization}</p>
              <span className="duration">{experience.duration}</span>
              <p className="details">
                {expanded[index]
                  ? experience.details
                  : `${experience.details.substring(0, 250)}...`}{" "}
                <span
                  className="toggle-button"
                  onClick={() => toggleExpanded(index)}
                  style={{ color: "#0078d4", cursor: "pointer" }}
                >
                  {expanded[index] ? "See Less" : "See More"}
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
