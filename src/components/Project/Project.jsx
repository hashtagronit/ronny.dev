import "./ProjectCSS.css";
import Projectitem from "./Projectitem";
import MetaCut from "../../images/projectImages/MetaCut.png";
import MetaTask from "../../images/projectImages/MetaTaskImage.png";
import AdminDashboard from "../../images/projectImages/ShipShop.png";
import MetaWrite from "../../images/projectImages/metawrite.png";

const Project = () => {
  const projectData = [
    {
      sourceCodeLink: "https://github.com/hashtagronit/MetaWrite",
      deployedLink: "https://metawrite.vercel.app/",
      name: "MetaWrite - Full-Stack Blogging Platform",
      description:
        "Created a robust full-stack blogging platform with user authentication, blog creation, editing, and pagination. Developed using React and Vite on the frontend, and Node.js with Hono and Prisma on the backend. Integrated JWT-based auth, Zod validation, and PostgreSQL for scalable blog storage.",
      languages:
        "ReactJS | ViteJS | Tailwind CSS | Node.js | Hono | Prisma | PostgreSQL | JWT | Zod | TypeScript",
      image: MetaWrite,
      projectType: "Full-Stack Blog Application",
    },
    {
      sourceCodeLink: "https://github.com/hashtagronit/MetaTask",
      deployedLink: "https://hashtagronit.github.io/MetaTask/",
      name: "MetaTask - Task Manager",
      description:
        "MetaTask is a productivity-focused task management app where managers can assign tasks with deadlines and employees can track, accept, or complete them. It supports offline access using localStorage and features a modular, responsive UI for real-time task flow.",
      languages: "ReactJS | Tailwind CSS | JavaScript | LocalStorage | HTML5",
      image: MetaTask,
      projectType: "Frontend Task Management App",
    },
    {
      sourceCodeLink: "https://github.com/hashtagronit/MetaCut",
      deployedLink: "https://hashtagronit.github.io/MetaCut/",
      name: "MetaCut - AI Image Upscaler",
      description:
        "Developed an AI-powered image upscaling web application that allows users to upload images and download enhanced, high-resolution versions using advanced AI algorithms. Built with Vite and Tailwind CSS, integrating an AI Upscaler API for quality preservation.",
      languages:
        "ReactJS | ViteJS | Tailwind CSS | AI Upscaler API | JavaScript | HTML5",
      image: MetaCut,
      projectType: "AI-Based Image Processing Tool",
    },
    {
      sourceCodeLink: "https://github.com/hashtagronit/dashboard2",
      deployedLink: "https://hashtagronit.github.io/dashboard2/",
      name: "Admin Dashboard UI",
      description:
        "A dynamic admin dashboard built with React featuring customizable themes, analytics charts, calendar integration, and a Kanban board. It delivers an enterprise-grade UI with smooth user experience, responsive layout, and reusable components for managing tasks and data visually.",
      languages:
        "ReactJS | Tailwind CSS | Syncfusion | Chart.js | FullCalendar | JavaScript | HTML5",
      image: AdminDashboard,
      projectType: "Interactive Admin Interface",
    },
  ];

  return (
    <>
      <div id="Projects" className="projects-section">
        <h2>
          <i className="fas fa-project-diagram"></i> Projects
        </h2>
        <div className="projects-container">
          {projectData.map((project, index) => (
            <Projectitem
              key={`${project.name}-${index}`}
              index={index}
              name={project.name}
              description={project.description}
              languages={project.languages}
              image={project.image}
              sourceCodeLink={project.sourceCodeLink}
              deployedLink={project.deployedLink}
              projectType={project.projectType}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
