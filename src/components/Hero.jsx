// Hero.jsx
import { content } from "../Content";
import { useState } from "react";
import { FaGoogle, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  const { hero } = content;
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section className={`overflow-hidden relative transition-colors duration-500 ${darkMode ? "dark" : ""}`} id="home">

      {/* Decorative triangle background */}
      <svg
        className="absolute -z-10 top-0 right-0 w-[60vw] md:w-[40vw] h-[50vh] md:h-[65vh] pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="triGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ffff" stopOpacity="0.22" />
          </linearGradient>
        </defs>
        <polygon points="0,0 100,0 100,100" fill="url(#triGrad)" />
      </svg>

      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center px-6">
        {/* left column */}
        <div className="pb-16 pt-10" data-aos="fade-down">
          <h3 className="text-base md:text-lg text-gray-600 dark:text-gray-300">Hello! I'm</h3>
          <h1 className="py-2 md:py-4 text-3xl md:text-5xl font-bold text-cyan-900 dark:text-white">
            Oshadhi Vimarsha
          </h1>
          <h2 className="text-cyan-600 dark:text-cyan-400 text-xl md:text-2xl">Web Developer</h2>

          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mt-4">
            This is my official portfolio website to show all details <br/>
            and work experience in web development. <br/>
            I excel at crafting elegant digital experiences.
          </p>

          {/* CTA Button */}
          <div className="flex justify-start mt-6 py-2">
            <button
                className="relative overflow-hidden px-6 py-3 font-medium text-white rounded-xl bg-white dark:bg-indigo-500 group">
              {/* Gradient Overlay */}
              <span
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              {/* Button Text */}
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                <a href={hero.link}>
                  <button>{hero.btnText}</button>
                </a>
              </span>
              {/* Shadow Effect */}
              <span
                  className="absolute inset-0 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-4 py-3">
            {/* Google */}
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=oshivimarsha1221@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google"
                className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-500 hover:shadow-lg hover:scale-110 transition transform duration-300"
            >
              <FaGoogle size={22} className="text-red-500"/>
            </a>

            {/* Facebook */}
            <a
                href="https://www.facebook.com/profile.php?id=100090217184743"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-lg hover:scale-110 transition transform duration-300"
            >
              <FaFacebook size={22} className="text-[#0866FF]"/>
            </a>

            {/* Instagram */}
            <a
                href="https://www.instagram.com/oshivimarsha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-pink-500 hover:shadow-lg hover:scale-110 transition transform duration-300"
            >
              <FaInstagram size={22} className="text-pink-500"/>
            </a>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/oshadhi-vimarsha-liyanage-0102a2383"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-sky-600 hover:shadow-lg hover:scale-110 transition transform duration-300"
            >
              <FaLinkedin size={22} className="text-[#0A66C2]"/>
            </a>

            {/* GitHub */}
            <a
                href="https://github.com/OshadhiVimarsha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-600 hover:shadow-lg hover:scale-110 transition transform duration-300"
            >
              <FaGithub size={22} className="text-gray-800 dark:text-gray-200"/>
            </a>
          </div>

        </div>

        {/* right column (image) */}
        <div className="md:h-[35rem] h-96">
          <img
              src={hero.image}
              data-aos="fade-up"
              alt="Portrait"
              className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
