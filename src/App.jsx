// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Navbar with toggle */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero */}
      <Hero darkMode={darkMode} />

      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <Service darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />

      <footer className="relative bg-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-cyan-600 py-6 px-4 mt-10 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative line */}
          <div className="flex justify-center mb-3">
            <span className="inline-block w-16 h-[2px] bg-cyan-600 rounded-full"></span>
          </div>

          <h6 className="text-xl font-semibold tracking-wider mb-2 hover:text-cyan-600 transition-colors duration-300">
            OSHADHI VIMARSHA
          </h6>

          <h1 className="text-xl font-semibold tracking-wider mb-2 hover:text-cyan-600 transition-colors duration-300">
            Trainee Software Engineer
          </h1>

          <p className="text-sm text-cyan-600">
            My Portfolio © All Rights Reserved 2025
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-4">
            <a
              href="https://github.com/OshadhiVimarsha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700 hover:scale-110 transition-transform duration-300"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/oshadhi-vimarsha-liyanage-0102a2383"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700 hover:scale-110 transition-transform duration-300"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/oshivimarsha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700 hover:scale-110 transition-transform duration-300"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-cyan-300 via-transparent to-cyan-600 blur-3xl pointer-events-none"></div>
      </footer>

    </div>
  );
};

export default App;
