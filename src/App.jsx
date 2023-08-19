import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./routes/Projects.jsx";
import Intro from "./routes/Intro.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div
      className={
        theme === "light"
          ? "bg-white text-gray-500 transition-all duration-700 ease-in-out min-h-screen"
          : "bg-black bg-opacity-90 text-gray-500 transition-all duration-700 ease-in-out min-h-screen"
      }
    >
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Intro theme={theme} />} />
          <Route path="/projects" element={<Projects theme={theme} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
