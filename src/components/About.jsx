import biko from "../assets/20230814_132131.jpg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiFillLinkedin,
  AiOutlineCode,
} from "react-icons/ai";
import { ImNpm } from "react-icons/im";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsFillTagFill } from "react-icons/bs";

export default function About() {
  return (
    <div className="lg:min-h-screen">
      <section className="mt-6 lg:text-start">
        <div className="px-6 rounded-md">
          <h1 className="text-4xl font-bold mb-2 sm:text-6xl lg:text-8xl lg:text-center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Unlocking Possibilities Through Code!")
                  .start();
              }}
            />
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 6 }}
            >
              <AiOutlineCode />
            </motion.span>
          </h1>
          <p className="text-3xl sm:text-4xl md:text-5xl md:mt-6">
            Welcome to my digital realm where creativity meets functionality.
            Join me on a journey of innovation and problem-solving.
          </p>
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, ease: "easeInOut" }}
        className="flex flex-col items-center mt-32 sm:mt-40 lg:mx-80"
      >
        <div className="flex items-center gap-4 w-72 shadow-2xl rounded h-80 bg-[url('src/assets/999.png')] opacity-50">
        </div>
        <p className="text-2xl text-center lg:text-4xl">
          Hello, I'm <span className="font-thin">Steven Modimo</span>, a
          passionate full stack web developer. I thrive on turning ideas into
          interactive experiences that leave a lasting impact.
        </p>
        <h2 className="mt-6 mb-4 ml-32 lg:text-2xl lg:mt-12">
          Join me Socially.
        </h2>
        <div className="flex space-x-8 text-sm lg:text-xl">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer lg:hover:text-yellow-500"
          >
            <a
              href="https://github.com/StevenMODIMO"
              target="_blank"
              className="sm:text-lg md:text-xl flex flex-col items-center"
            >
              <AiFillGithub />
              <p>Github</p>
            </a>
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer lg:hover:text-yellow-500"
          >
            <a
              href="https://twitter.com/Steve_Modimo"
              target="_blank"
              className="sm:text-lg md:text-xl flex flex-col items-center"
            >
              <AiOutlineTwitter />
              <p>Twitter</p>
            </a>
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer lg:hover:text-yellow-500"
          >
            <a
              href="https://web.facebook.com/profile.php?id=100090569018744"
              target="_blank"
              className="sm:text-lg md:text-xl flex flex-col items-center"
            >
              <AiOutlineFacebook />
              <p>Facebook</p>
            </a>
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer lg:hover:text-yellow-500"
          >
            <a
              href="https://www.linkedin.com/in/steven-modimo-912521204/"
              target="_blank"
              className="sm:text-lg md:text-xl flex flex-col items-center"
            >
              <AiFillLinkedin />
              <p>LinkedIn</p>
            </a>
          </motion.div>
        </div>
      </motion.section>
      <motion.main
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, ease: "easeInOut" }}
        className="shadow-2xl mx-3 mt-24 rounded sm:mx-12 sm:p-6 lg:mx-80 lg:p-12"
      >
        <div className="flex justify-end text-2xl m-8 text-yellow-500">
          <BsFillTagFill />
        </div>
        <div className="flex flex-col items-center m-2">
          <h1 className="text-lg text-center">A little about me</h1>
          <div className="w-10 h-1 bg-yellow-500 transition-all duration-150 ease-in-out"></div>
        </div>
        <h1 className="text-3xl text-center">
          I love building Stuffs for the web
        </h1>
        <p className="text-center mx-6 mt-3 sm:text-xl lg:text-2xl">
          Building solutions for the web offers unparalleled accessibility to a
          wide audience, setting it apart from native apps that often demand
          intricate installation and configuration procedures. With web-based
          applications, all it takes is a simple URL entry, and the service is
          instantly available at your fingertips. This seamless accessibility
          eliminates barriers and instantly connects users to the content they
          need, fostering a smoother and more user-centric experience.
        </p>
      </motion.main>
    </div>
  );
}
