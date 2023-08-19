import React from "react";
import ProjectCard from "../components/ProjectCard";
import Card from "../components/Card";
import projectsData from "../data/projects-data";
import upcoming from "../data/upcoming-projects";
import { motion } from "framer-motion";
import { BiLogoUpwork } from "react-icons/bi";

export default function Portfolio({ theme }) {
  return (
    <div className="pt-5 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-center m-2 text-3xl">/Projects.</h2>
        <h2 className="text-2xl text-center mt-2 font-semibold mb-8">
          Showcasing Excellence: A Gallery of Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 cursor-pointer">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} theme={theme} />
          ))}
        </div>
        <h2 className="text-center mx-2 mt-14 text-3xl">/Upcoming Projects.</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 cursor-pointer">
          {upcoming.map((project, index) => (
            <Card key={index} project={project} theme={theme} />
          ))}
        </div>
      </div>
      <main className="text-center m-10">
        <h1 className="m-2 text-lg">Let's Get in touch!</h1>
        <motion.button
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          className="bg-yellow-500 mx-4 p-2 text-xl"
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=freelancer.stevenmodimo@gmail.com"
            target="_blank"
          >
            Shoot me a Mail
          </a>
        </motion.button>
      </main>
      <section className="flex justify-center text-lg">
        <span>OR</span>
      </section>
      <motion.main initial={{ scale: 0.9 }} whileHover={{ scale: 1 }}>
        <a
          href="https://www.upwork.com/freelancers/~01740dfbe3a78f08c8"
          target="_blank"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
        >
          <main className="text-center text-green-500 cursor-pointer text-xl p-1 flex bg-green-700 justify-center gap-2 m-10 lg:mx-80 lg:text-3xl">
            <BiLogoUpwork className="mt-1 lg:mt-2" />
            <h1>Hire me on upwork</h1>
          </main>
        </a>
      </motion.main>
      <footer className="flex justify-center mt-8 text-sm sm:text-lg">
        <p>Handcrafted by Steven Modimo &copy; 2022.</p>
      </footer>
    </div>
  );
}
