import { VscSourceControl } from "react-icons/vsc";
import { motion } from "framer-motion";
import { AiOutlineVideoCameraAdd, AiOutlineFileText } from "react-icons/ai";
import { MdOutlineDashboardCustomize } from "react-icons/md";

export default function Card({ project, theme }) {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      whileHover={{ scale: 1 }}
      className="p-4 rounded-lg mt-4 shadow-2xl"
    >
      <div className="flex justify-between">
        <section className="flex gap-2">
          <div>
            {project.icon === "video" ? (
              <AiOutlineVideoCameraAdd className="mt-1 text-4xl" />
            ) : project.icon === "blog" ? (
              <AiOutlineFileText className="mt-1 text-4xl" />
            ) : (
              <MdOutlineDashboardCustomize className="mt-1 text-4xl" />
            )}
          </div>
          <h2 className="text-xl font-semibold mb-2 text-yellow-500">
            {project.title}
          </h2>
        </section>
        <div className="text-lg text-gray-500">{project.status}</div>
      </div>
      <p className="text-gray-600 text-lg mb-4">{project.description}</p>
      <motion.a
        initial={{ scale: 0.9 }}
        whileHover={{ scale: 1 }}
        href={project.sourceCodeLink}
        className="flex text-lg gap-1 w-fit hover:bg-yellow-500 rounded p-1 hover:text-white hover:transition-all duration-150 ease-in-out"
      >
        <VscSourceControl className="mt-1" />
        <h1>Starter Code</h1>
      </motion.a>
    </motion.div>
  );
}
