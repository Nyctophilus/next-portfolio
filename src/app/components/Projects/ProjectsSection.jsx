"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React DashBoard",
    description:
      "This is a Dashboard which used a lot of react functionality to create. It has Main, login, Register, Error Pages. user login authentication with firebase login tokens (automatic login, automatic logout on token expires). Redux/toolkit used in state management.",
    image:
      "https://nyctophilus.github.io/Portfolio/assets/images/portfolio/DashBoard.webp",
    tag: ["all", "react"],
    gitUrl: "https://github.com/Nyctophilus/DashBoard",
    previewUrl: "https://nyctophilus.github.io/DashBoard",
  },
  {
    id: 2,
    title: "My Reads",
    description:
      "A Bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.",
    image:
      "https://nyctophilus.github.io/Portfolio/assets/images/portfolio/MyReads-React.webp",
    tag: ["all", "react"],
    gitUrl: "https://github.com/Nyctophilus/MyReads-React",
    previewUrl: "https://nyctophilus.github.io/MyReads-React",
  },
  {
    id: 3,
    title: "Quote React App",
    description:
      "This is my Third react project. storing/adding quotes app utilizing all react feature during learning process upon using react-router.",
    image:
      "https://nyctophilus.github.io/Portfolio/assets/images/portfolio/Quote-React-Router-App.webp",
    tag: ["all", "react"],
    gitUrl: "https://github.com/Nyctophilus/Quotes--RouterProject",
    previewUrl: "https://mfayad-react-quotes-router-project.netlify.app",
  },
  {
    id: 4,
    title: "Cocktail",
    description:
      "In this project, Implemented a search engine through cocktail API. using react/router, fetching and displaying cocktail by user demand.",
    image:
      "https://nyctophilus.github.io/Portfolio/assets/images/portfolio/Cocktails.webp",
    tag: ["all", "react"],
    gitUrl: "https://github.com/Nyctophilus/Cocktails",
    previewUrl: "https://silver-cocktails-react-app.netlify.app/",
  },
  {
    id: 5,
    title: "Food Order App",
    description:
      "This is my second completed react project. Food ordering app utilizing all react feature during learning process.",
    image:
      "https://nyctophilus.github.io/Portfolio/assets/images/portfolio/Food-Order-App.webp",
    tag: ["all", "react"],
    gitUrl: "https://github.com/Nyctophilus/Food-Order-App",
    previewUrl: "https://react-foodorder-cart.netlify.app/",
  },
  {
    id: 6,
    title: "Image Processing API",
    description:
      "Image Processing App with an express server that manipulates images based on a server request with the dimensions and the image name.",
    image:
      "https://nyctophilus.github.io/Portfolio/assets/images/portfolio/image_processing_API.webp",
    tag: ["all", "express"],
    gitUrl: "https://github.com/Nyctophilus/image_processing_API",
    previewUrl: "https://nyctophilus.github.io/image_processing_API",
  },
  {
    id: 7,
    title: "my old Portfolio",
    description: `y personal portfolio. I've tried to gather all the tricks & workarounds I learned so far, So it will serve as a showcase of my present skills! ,and my ability of build from scratch.`,
    image:
      "https://nyctophilus.github.io/Portfolio/assets/images/portfolio/Portfolio.webp",
    tag: ["all", "uI"],
    gitUrl: "https://github.com/Nyctophilus/Portfolio",
    previewUrl: "https://nyctophilus.github.io/Portfolio",
  },
  {
    id: 8,
    title: "fwd weather journal app",
    description:
      "Weather Journal App with Asynchronous JavaScript that uses Web API and user data to dynamically update the UI.",
    image:
      "https://nyctophilus.github.io/Portfolio/assets/images/portfolio/weatherApp.webp",
    tag: ["all", "express"],
    gitUrl: "https://github.com/Nyctophilus/fwd-weather-journal",
    previewUrl: "https://nyctophilus.github.io/fwd-weather-journal",
  },
  {
    id: 9,
    title: "Metis",
    description: "custom blog website 🤳. Basically UI/Sass practise!",
    image:
      "	https://nyctophilus.github.io/Portfolio/assets/images/portfolio/Metis.webp",
    tag: ["all", "uI"],
    gitUrl: "https://github.com/Nyctophilus/Metis",
    previewUrl: "https://nyctophilus.github.io/Metis",
  },
  {
    id: 10,
    title: "Aero",
    description: `It's basically a practice JS Template. Mainly Focused on practical Javascript LocalStorage To Save User Settings, and take defaults when reload, randomly Change Background images at time intervals.`,
    image:
      "https://nyctophilus.github.io/Portfolio/assets/images/portfolio/Aero.webp",
    tag: ["all", "uI"],
    gitUrl: "https://github.com/Nyctophilus/Aero---Car-Accessories-Website",
    previewUrl: "https://nyctophilus.github.io/Aero---Car-Accessories-Website",
  },
];

const tags = ["all", "next", "react", "express", "uI"];

const ProjectsSection = () => {
  const [tag, setTag] = useState("all");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
        {tags.map((el) => (
          <ProjectTag
            key={el}
            name={el}
            isSelected={tag === el}
            setTag={setTag}
          />
        ))}
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            whileInView={{
              x: [index % 2 ? -50 : 50, 0],
              y: [20, 0],
              opacity: [0, 1],
            }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard key={project.id} {...project} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
