import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ image, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-2xl shadow-xl">
      <div className="h-52 overflow-hidden">
        <div
          className="h-full relative group hover:scale-[1.2] hover:rotate-[1deg]"
          style={{
            background: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transition: "transform .5s ease-out",
          }}
        >
          <div className="items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
            <Link
              href={gitUrl}
              target="_blank"
              className="h-8 w-8 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-5 w-5 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
            <Link
              href={previewUrl}
              target="_blank"
              className="h-8 w-8 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-5 w-5 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 capitalize">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
