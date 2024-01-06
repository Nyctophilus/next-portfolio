import { motion } from "framer-motion";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

import Skills from "./Skills";
import Certs from "./Certs";

const skills = [
  "next",
  "tailwind",
  "react",
  "redux",
  "typescript",
  "Sass",
  "framer motion",
  "pugjs",
  "bootstrap",
  "javascript",
  "css",
  "html",
  "express.js",
  "firebase",
  "gulp",
  "git & github",
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: <Skills items={skills} />,
  },
  {
    title: "Education",
    id: "education",
    content: (
      <motion.ul layout className="list-disc pl-2">
        <li>Udacity - Nano Degree, Computer Software Engineering</li>
        <li>KTH Royal Sweden institute of Technology</li>
        <li>Pharos University, Alexandria (BEng)</li>
      </motion.ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: <Certs />,
  },
];

const Tabs = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duratidon: 0.5, delay: 0.3 }}
        className="flex flex-row justify-start mt-8"
      >
        {TAB_DATA.map(({ id, title }) => (
          <TabButton
            key={id}
            selectTab={() => handleTabChange(id)}
            active={tab === id}
          >
            {title}
          </TabButton>
        ))}
      </motion.div>
      <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
    </>
  );
};
export default Tabs;
