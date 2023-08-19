import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { PiDotsNine } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { MdOutlineDarkMode, MdRestartAlt } from "react-icons/md";
import { FaSun, FaTimes } from "react-icons/fa";
import { GiSaveArrow } from "react-icons/gi";
import { Link } from "react-scroll";
import { BsBriefcase } from "react-icons/bs";

export default function Navbar({ theme, setTheme }) {
  const [links, setLinks] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hover, setHover] = useState(false);
  const [resume, setResume] = useState(false);
  const { scrollYProgress } = useScroll();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Steven_Modimo_Resume_11-08-2023-09-55-07.pdf";
    link.download = "Steven_Modimo.pdf";
    link.click();
  };

  const vars = {
    initial: {
      opacity: 0,
      x: -1000,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -1000,
    },
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  };

  const toggleLinks = () => setLinks(!links);
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill:
        theme === "light" ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 1)",
    },
  };

  const iconVariants = {
    hidden: {
      ...icon.hidden,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 3,
        ease: "easeInOut",
      },
    },
    visible: {
      ...icon.visible,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-yellow-500 fixed top-0 right-0 left-0 h-2"
      />
      <nav className="pt-8">
        <header className={links ? "hidden" : "flex justify-between"}>
          <NavLink to="/">
            <div className="flex -space-x-20 mt-1 ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 40"
                className={
                  theme === "light"
                    ? "stroke-1 stroke-black w-28"
                    : "stroke-1 stroke-white w-28"
                }
              >
                <motion.path
                  d="M0.818182 0.727272H4.18182L12.0909 20.0455H12.3636L20.2727 0.727272H23.6364V24H21V6.31818H20.7727L13.5 24H10.9545L3.68182 6.31818H3.45455V24H0.818182V0.727272Z"
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 40"
                className={
                  theme === "light"
                    ? "stroke-1 stroke-black w-28"
                    : "stroke-1 stroke-white w-28"
                }
              >
                <motion.path
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M21.4545 12.3636C21.4545 14.8182 21.0114 16.9394 20.125 18.7273C19.2386 20.5152 18.0227 21.8939 16.4773 22.8636C14.9318 23.8333 13.1667 24.3182 11.1818 24.3182C9.19697 24.3182 7.43182 23.8333 5.88636 22.8636C4.34091 21.8939 3.125 20.5152 2.23864 18.7273C1.35227 16.9394 0.909091 14.8182 0.909091 12.3636C0.909091 9.90909 1.35227 7.78788 2.23864 6C3.125 4.21212 4.34091 2.83333 5.88636 1.86364C7.43182 0.893939 9.19697 0.40909 11.1818 0.40909C13.1667 0.40909 14.9318 0.893939 16.4773 1.86364C18.0227 2.83333 19.2386 4.21212 20.125 6C21.0114 7.78788 21.4545 9.90909 21.4545 12.3636ZM18.7273 12.3636C18.7273 10.3485 18.3902 8.64773 17.7159 7.26136C17.0492 5.875 16.1439 4.82576 15 4.11364C13.8636 3.40151 12.5909 3.04545 11.1818 3.04545C9.77273 3.04545 8.49621 3.40151 7.35227 4.11364C6.21591 4.82576 5.31061 5.875 4.63636 7.26136C3.9697 8.64773 3.63636 10.3485 3.63636 12.3636C3.63636 14.3788 3.9697 16.0795 4.63636 17.4659C5.31061 18.8523 6.21591 19.9015 7.35227 20.6136C8.49621 21.3258 9.77273 21.6818 11.1818 21.6818C12.5909 21.6818 13.8636 21.3258 15 20.6136C16.1439 19.9015 17.0492 18.8523 17.7159 17.4659C18.3902 16.0795 18.7273 14.3788 18.7273 12.3636Z"
                  fill="black"
                />
              </svg>

              <svg
                className={
                  theme === "light"
                    ? "stroke-1 stroke-black w-28"
                    : "stroke-1 stroke-white w-28"
                }
                viewBox="0 0 100 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M8 24H0.818182V0.727272H8.31818C10.5758 0.727272 12.5076 1.19318 14.1136 2.125C15.7197 3.04924 16.9508 4.37879 17.8068 6.11364C18.6629 7.84091 19.0909 9.90909 19.0909 12.3182C19.0909 14.7424 18.6591 16.8295 17.7955 18.5795C16.9318 20.322 15.6742 21.6629 14.0227 22.6023C12.3712 23.5341 10.3636 24 8 24ZM3.63636 21.5H7.81818C9.74242 21.5 11.3371 21.1288 12.6023 20.3864C13.8674 19.6439 14.8106 18.5871 15.4318 17.2159C16.053 15.8447 16.3636 14.2121 16.3636 12.3182C16.3636 10.4394 16.0568 8.82197 15.4432 7.46591C14.8295 6.10227 13.9129 5.05682 12.6932 4.32954C11.4735 3.5947 9.95455 3.22727 8.13636 3.22727H3.63636V21.5Z"
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                />
              </svg>

              <svg
                className={
                  theme === "light"
                    ? "stroke-1 stroke-black w-28"
                    : "stroke-1 stroke-white w-28"
                }
                viewBox="0 0 100 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M3.63636 0.727272V24H0.818182V0.727272H3.63636Z"
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 40"
                className={
                  theme === "light"
                    ? "stroke-1 stroke-black w-28"
                    : "stroke-1 stroke-white w-28"
                }
              >
                <motion.path
                  d="M0.818182 0.727272H4.18182L12.0909 20.0455H12.3636L20.2727 0.727272H23.6364V24H21V6.31818H20.7727L13.5 24H10.9545L3.68182 6.31818H3.45455V24H0.818182V0.727272Z"
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 40"
                className={
                  theme === "light"
                    ? "stroke-1 stroke-black w-28"
                    : "stroke-1 stroke-white w-28"
                }
              >
                <motion.path
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M21.4545 12.3636C21.4545 14.8182 21.0114 16.9394 20.125 18.7273C19.2386 20.5152 18.0227 21.8939 16.4773 22.8636C14.9318 23.8333 13.1667 24.3182 11.1818 24.3182C9.19697 24.3182 7.43182 23.8333 5.88636 22.8636C4.34091 21.8939 3.125 20.5152 2.23864 18.7273C1.35227 16.9394 0.909091 14.8182 0.909091 12.3636C0.909091 9.90909 1.35227 7.78788 2.23864 6C3.125 4.21212 4.34091 2.83333 5.88636 1.86364C7.43182 0.893939 9.19697 0.40909 11.1818 0.40909C13.1667 0.40909 14.9318 0.893939 16.4773 1.86364C18.0227 2.83333 19.2386 4.21212 20.125 6C21.0114 7.78788 21.4545 9.90909 21.4545 12.3636ZM18.7273 12.3636C18.7273 10.3485 18.3902 8.64773 17.7159 7.26136C17.0492 5.875 16.1439 4.82576 15 4.11364C13.8636 3.40151 12.5909 3.04545 11.1818 3.04545C9.77273 3.04545 8.49621 3.40151 7.35227 4.11364C6.21591 4.82576 5.31061 5.875 4.63636 7.26136C3.9697 8.64773 3.63636 10.3485 3.63636 12.3636C3.63636 14.3788 3.9697 16.0795 4.63636 17.4659C5.31061 18.8523 6.21591 19.9015 7.35227 20.6136C8.49621 21.3258 9.77273 21.6818 11.1818 21.6818C12.5909 21.6818 13.8636 21.3258 15 20.6136C16.1439 19.9015 17.0492 18.8523 17.7159 17.4659C18.3902 16.0795 18.7273 14.3788 18.7273 12.3636Z"
                  fill="black"
                />
              </svg>
            </div>
          </NavLink>
          <div className="flex -ml-16 gap-4 cursor-pointer lg:mr-20">
            <div
              onClick={toggleTheme}
              className="flex h-fit p-1 gap-2 mt-1 text-xl bg-gray-800 rounded-xl"
            >
              <FaSun
                className={
                  theme === "light"
                    ? "opacity-0 transition-all duration-700 ease-in-out"
                    : "text-yellow-500 transition-all duration-700 ease-in-out"
                }
              />
              <MdOutlineDarkMode
                className={
                  theme === "light"
                    ? "text-white transition-all duration-700 ease-in-out"
                    : "opacity-0 transition-all duration-700 ease-in-out"
                }
              />
            </div>
            <PiDotsNine className="text-4xl lg:hidden" onClick={toggleLinks} />

            <ul className="hidden lg:flex gap-7 space-x-2 lg:mt-1 lg:text-xl">
              <li>
                <NavLink
                  to="/"
                  className="flex gap-1 hover:text-yellow-500 transition-all duration-150 ease-in-out"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <MdRestartAlt
                    className={
                      hovered
                        ? "mt-1 rotate-180 transition-all duration-700 ease-in-out"
                        : "mt-1 transition-all duration-700 ease-in-out"
                    }
                  />
                  <h1>Intro</h1>
                </NavLink>
                <div
                  className={
                    hovered
                      ? "w-10 h-1 bg-yellow-500 transition-all duration-150 ease-in-out"
                      : "w-0 h-1 bg-yellow-500 transition-all duration-150 ease-in-out"
                  }
                ></div>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="flex gap-1 hover:text-yellow-500 transition-all duration-150 ease-in-out"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <BsBriefcase
                    className={
                      hover
                        ? "mt-1 rotate-0 transition-all duration-700 ease-in-out"
                        : "mt-1 transition-all duration-700 ease-in-out rotate-180"
                    }
                  />
                  <h1>Projects</h1>
                </NavLink>
                <div
                  className={
                    hover
                      ? "w-10 h-1 bg-yellow-500 transition-all duration-150 ease-in-out"
                      : "w-0 h-1 bg-yellow-500 transition-all duration-150 ease-in-out"
                  }
                ></div>
              </li>
              <main>
                <section
                  variants={item}
                  className="hidden sm:flex items-center space-x-2  hover:text-yellow-500 transition-all duration-150 ease-in-out"
                  onClick={handleDownload}
                  onMouseEnter={() => setResume(true)}
                  onMouseLeave={() => setResume(false)}
                >
                  <div className="text-xl">Resume</div>
                  <GiSaveArrow
                    className={
                      resume
                        ? "text-xl animate-pulse rotate-0 transition-all duration-700 ease-in-out"
                        : "text-xl animate-pulse rotate-180 transition-all duration-700 ease-in-out"
                    }
                  />
                </section>
                <div
                  className={
                    resume
                      ? "w-10 h-1 bg-yellow-500 transition-all duration-150 ease-in-out"
                      : "w-0 h-1 bg-yellow-500 transition-all duration-150 ease-in-out"
                  }
                ></div>
              </main>
            </ul>
          </div>
        </header>
      </nav>

      <Links
        links={links}
        setLinks={setLinks}
        vars={vars}
        container={container}
        item={item}
        handleDownload={handleDownload}
      />
    </div>
  );
}

const Links = ({ links, setLinks, vars, container, item, handleDownload }) => {
  return (
    <>
      <AnimatePresence>
        {links && (
          <motion.ul
            variants={vars}
            initial="initial"
            animate="animate"
            transition="transition"
            exit="exit"
            className="fixed bg-black  text-gray-500 bg-opacity-90 top-0 h-screen w-full flex flex-col text-3xl z-20 lg:hidden"
          >
            <div
              onClick={() => setLinks(false)}
              className="flex justify-end text-3xl m-3"
            >
              <FaTimes />
            </div>
            <motion.main
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-3"
            >
              <motion.section
                variants={item}
                className="flex items-center space-x-2"
                onClick={handleDownload}
              >
                <div>Resume</div>
                <GiSaveArrow className="text-xl animate-pulse" />
              </motion.section>
              <motion.li variants={item}>
                <NavLink to="/" onClick={() => setLinks(false)}>
                  Intro
                </NavLink>
              </motion.li>
              <motion.li variants={item}>
                <NavLink to="/projects" onClick={() => setLinks(false)}>
                  Projects
                </NavLink>
              </motion.li>
            </motion.main>
            <footer className="flex justify-center mt-8 text-sm sm:text-lg">
              <p>Handcrafted by Steven Modimo &copy; 2022.</p>
            </footer>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};
