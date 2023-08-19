import chat from "../assets/chat.png"
import ecommerce from "../assets/ecommerce.png"
import social from "../assets/social.png"

const projectsData = [
  {
    title: "E-commerce Website",
    description:
      "An online store showcasing various products with shopping cart functionality and payment gateway.",
    technologies: ["React", "ReactContext", "Node.js", "MongoDB","jwt"],
    imagePath: ecommerce,
    liveDemoLink: "https://mern-ecommerce-app-aj2b.onrender.com",
    sourceCodeLink: "https://github.com/StevenMODIMO/mern-ecommerce-app",
  },
  {
    title: "Social Media App",
    description:
      "A social media platform for users to post, like, and comment on each other's content.",
    technologies: ["React", "MongoDB","Node.js", "jwt"],
    imagePath: social,
    liveDemoLink: "https://mern-social-i1zj.onrender.com",
    sourceCodeLink: "https://github.com/StevenMODIMO/mern-social-media-app",
  },
  {
    title: "Messaging App",
    description:
      "A real-time messaging application for users to communicate with each other.",
    technologies: ["React", "Socket.io", "MongoDB","Node.js","jwt"],
    imagePath: chat,
    liveDemoLink: "https://chat-app-3fog.onrender.com",
    sourceCodeLink: "https://github.com/StevenMODIMO/mern-chat-app",
  },
];

export default projectsData;
