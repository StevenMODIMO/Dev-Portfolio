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
            <span>
              <AiOutlineCode />
            </span>
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
        className="flex flex-col items-center mt-32 sm:mt-40"
      >
        <div className="flex items-center gap-4">
          <img src={biko} alt="biko logo" className="rounded w-56 mb-8 mt" />
        </div>
        <p className="text-2xl text-center lg:text-5xl">
          Hello, I'm <span className="font-thin">Steven Modimo</span>, a
          passionate full stack web developer. I thrive on turning ideas into
          interactive experiences that leave a lasting impact.
        </p>
        <h2 className="mt-6 mb-4 ml-32 lg:text-3xl lg:mt-32">
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
              className="text-xl flex flex-col items-center"
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
              className="text-xl flex flex-col items-center"
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
              className="text-xl flex flex-col items-center"
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
              className="text-xl flex flex-col items-center"
            >
              <AiFillLinkedin />
              <p>LinkedIn</p>
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
