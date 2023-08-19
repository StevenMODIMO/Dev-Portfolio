import React from "react";
import { motion } from "framer-motion";
import { AiFillEye } from "react-icons/ai";
import { VscSourceControl } from "react-icons/vsc";

export default function ProjectCard({ project, theme }) {
  const {
    title,
    description,
    technologies,
    imagePath,
    liveDemoLink,
    sourceCodeLink,
  } = project;

  return (
    <motion.div
      initial={{ scale: 0.9 }}
      whileHover={{ scale: 1 }}
      className={
        theme === "dark"
          ? " rounded-lg shadow-2xl  p-6 transition-all duration-150 ease-in-out"
          : "rounded-lg shadow-2xl p-6 transition-all duration-150 ease-in-out"
      }
    >
      <img
        src={imagePath}
        alt={title}
        className="w-full rounded shadow-lg h-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-yellow-500">{title}</h3>
      <p className="text-gray-600 text-lg mb-2">{description}</p>
      <div className="text-sm mt-4 grid grid-cols-2 gap-1">
        {technologies.map((tech, index) => (
          <motion.span
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1 }}
            key={index}
            className="bg-gray-200 text-gray-600 w-fit px-2 py-1 rounded mr-2 hover:bg-yellow-500 hover:transition-all duration-150 ease-in-out"
          >
            #{tech}
          </motion.span>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <motion.a
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          href={liveDemoLink}
          className="flex text-lg gap-1 hover:bg-yellow-500 rounded p-1 hover:text-white hover:transition-all duration-150 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillEye className="mt-1" />
          <h1>Live Demo</h1>
        </motion.a>
        <motion.a
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          href={sourceCodeLink}
          className="flex text-lg gap-1 hover:bg-yellow-500 rounded p-1 hover:text-white hover:transition-all duration-150 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscSourceControl className="mt-1" />
          <h1>Source Code</h1>
        </motion.a>
      </div>
    </motion.div>
  );
}
