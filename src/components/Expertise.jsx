import React from "react";
import {
  FaReact,
  FaLongArrowAltRight,
  FaServer,
  FaAppStore,
} from "react-icons/fa";
import { AiFillDatabase, AiOutlineApi } from "react-icons/ai";
import { BsDatabaseAdd, BsGlobe } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import { BiLogoPlayStore } from "react-icons/bi";
import { FcAndroidOs } from "react-icons/fc";

export default function Expertise({ theme }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, ease: "easeInOut" }}
      className="py-10 lg:min-h-screen lg:flex lg:flex-col lg:justify-center"
    >
      <h1 className="text-center font-bold text-3xl mb-10">/My Expertise</h1>
      <section className="grid grid-cols-1 gap-2 mx-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className={
            theme === "dark"
              ? "p-1 border shadow-xl cursor-pointer text-center"
              : "bg-white p-1 border shadow-xl cursor-pointer text-center"
          }
        >
          <h1 className="text-xl font-semibold mb-4">Frontend Development</h1>
          <p className="text-gray-600 mb-4">
            As a frontend developer, I excel in creating intuitive user
            interfaces and engaging user experiences.
          </p>
          <div className="text-5xl mb-4">
            <FaReact className="inline-block text-blue-500 mr-4" />
            <TbBrandNextjs className="inline-block text-purple-500" />
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className={
            theme === "dark"
              ? "p-1 border shadow-xl cursor-pointer text-center"
              : "bg-white p-1 border shadow-xl cursor-pointer text-center"
          }
        >
          <h1 className="text-xl font-semibold mb-4">Backend Development</h1>
          <p className="text-gray-600 mb-4">
            My backend development skills enable me to build robust and scalable
            server-side solutions.
          </p>
          <div className="text-5xl mb-4">
            <AiFillDatabase className="inline-block text-green-500 mr-4" />
            <AiOutlineApi className="inline-block text-yellow-500" />
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className={
            theme === "dark"
              ? "p-1 border shadow-xl cursor-pointer text-center"
              : "bg-white p-1 border shadow-xl cursor-pointer text-center"
          }
        >
          <h1 className="text-xl font-semibold mb-4">Database Management</h1>
          <p className="text-gray-600 mb-4">
            I'm proficient in managing databases to ensure efficient storage and
            retrieval of data.
          </p>
          <div className="text-5xl mb-4">
            <BsDatabaseAdd className="inline-block text-red-500" />
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className={
            theme === "dark"
              ? "p-1 border shadow-xl cursor-pointer text-center"
              : "bg-white p-1 border shadow-xl cursor-pointer text-center"
          }
        >
          <h1 className="text-xl font-semibold mb-4">Full Stack Development</h1>
          <p className="text-gray-600 mb-4">
            With a full stack development background, I can seamlessly bridge
            the gap between frontend and backend.
          </p>
          <div className="text-5xl mb-4">
            <FaServer className="inline-block text-indigo-500 mr-4" />
            <FaLongArrowAltRight className="inline-block text-gray-600 mx-4" />
            <BsGlobe className="inline-block text-yellow-500" />
          </div>
        </motion.div>
      </section>

      <main>
        <h1 className="text-center font-bold text-3xl my-10">
          Currently Learning!!
        </h1>
        <h1 className="text-center font-semibold text-xl mb-4">
          Mobile App Design and Development.
        </h1>
        <div className="flex justify-center items-center space-x-4 text-4xl mt-6">
          <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
            <FaAppStore className="text-gray-500 hover:text-blue-500 transition-colors duration-300" />
          </motion.div>
          <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
            <BiLogoPlayStore className="text-gray-500 hover:text-green-500 transition-colors duration-300" />
          </motion.div>
          <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
            <FcAndroidOs className="text-gray-500 hover:text-green-500 transition-colors duration-300" />
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}
