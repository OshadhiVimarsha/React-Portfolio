// Hero.jsx
import { content } from "../Content";
import { useState } from "react";

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
            This is my official portfolio website to show all details <br />
            and work experience in web development. <br />
            I excel at crafting elegant digital experiences.
          </p>

          {/* CTA Button */}
          <div className="flex justify-start mt-6 py-2">
            <button className="relative overflow-hidden px-6 py-3 font-medium text-white rounded-xl bg-white dark:bg-indigo-500 group">
              {/* Gradient Overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
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
                className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-400 hover:shadow-lg hover:scale-110 transition transform duration-300"
            >
              <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
                <path fill="#FFC107"
                      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36 16.8 36 11 30.2 11 23S16.8 10 24 10c3.4 0 6.5 1.3 8.9 3.4l5.6-5.6C34.8 4.5 29.7 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.2-.1-2.4-.4-3.5z"/>
                <path fill="#FF3D00"
                      d="M6.3 14.7l6.6 4.8C14.6 16.1 18.9 14 24 14c3.4 0 6.5 1.3 8.9 3.4l5.6-5.6C34.8 4.5 29.7 2 24 2 16 2 9 6.2 6.3 14.7z"/>
                <path fill="#4CAF50"
                      d="M24 46c5.1 0 9.9-1.9 13.5-5.1l-5.9-4.9C29.4 37.8 26.9 39 24 39c-5.2 0-9.6-3.1-11.4-7.6l-6.5 5C9 41.8 16 46 24 46z"/>
                <path fill="#1976D2"
                      d="M43.6 20.5H42V20H24v8h11.3c-1.3 3.8-4.8 6-9.3 6-5.2 0-9.6-3.1-11.4-7.6l-6.5 5C9 41.8 16 46 24 46c11 0 21-8 21-22 0-1.2-.1-2.4-.4-3.5z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a
                href="https://www.facebook.com/profile.php?id=100090217184743
"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-lg hover:scale-110 transition transform duration-300"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#0866FF]">
                <path
                    d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.06 5.66 21.2 10.44 22v-7.02H7.9V12h2.54v-2.3c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.98h-2.34V22C18.34 21.2 22 17.06 22 12.07z"/>
              </svg>
            </a>
            {/* insta */}
            <a
                href="https://www.instagram.com/oshivimarsha?igsh=MWI3ajBtbTJ6bnNqNA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-pink-500 hover:shadow-lg hover:scale-110 transition transform duration-300"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-pink-500">
                <path
                    d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.344 3.608 1.32.975.975 1.257 2.242 1.319 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.344 2.633-1.319 3.608-.975.975-2.242 1.257-3.608 1.319-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.344-3.608-1.319-.975-.975-1.257-2.242-1.319-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.344-2.633 1.319-3.608.975-.975 2.242-1.257 3.608-1.319C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.631.398 3.68 1.349c-.951.951-1.218 2.095-1.277 3.372C2.013 5.668 2 6.077 2 9.337v5.326c0 3.26.013 3.669.072 4.948.059 1.277.326 2.421 1.277 3.372.951.951 2.095 1.218 3.372 1.277 1.279.059 1.688.072 4.948.072s3.669-.013 4.948-.072c1.277-.059 2.421-.326 3.372-1.277.951-.951 1.218-2.095 1.277-3.372.059-1.279.072-1.688.072-4.948V9.337c0-3.26-.013-3.669-.072-4.948-.059-1.277-.326-2.421-1.277-3.372-.951-.951-2.095-1.218-3.372-1.277C15.669.013 15.26 0 12 0z"/>
                <path
                    d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/oshadhi-vimarsha-liyanage-0102a2383"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-sky-600 hover:shadow-lg hover:scale-110 transition transform duration-300"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#0A66C2]">
                <path
                    d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-.9 1.7-2.2 3.6-2.2 3.9 0 4.6 2.6 4.6 6V24h-4v-7.2c0-1.7 0-3.8-2.3-3.8s-2.6 1.8-2.6 3.7V24h-4V8.5z"/>
              </svg>
            </a>
            {/* GitHub */}
            <a
                href="https://github.com/OshadhiVimarsha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-600 hover:shadow-lg hover:scale-110 transition transform duration-300"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"
                   className="text-gray-800 dark:text-gray-200">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.85 3.15 8.97 7.51 10.42.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.7-1.3-3.7-1.3-.5-1.26-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.14 1.68 1.14.97 1.66 2.54 1.18 3.16.9.1-.7.38-1.18.69-1.45-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.14-2.95-.11-.28-.49-1.42.11-2.96 0 0 .93-.3 3.05 1.13.88-.24 1.82-.36 2.76-.36.94 0 1.88.12 2.76.36 2.12-1.43 3.05-1.13 3.05-1.13.6 1.54.22 2.68.11 2.96.71.77 1.14 1.75 1.14 2.95 0 4.22-2.57 5.15-5.02 5.42.39.33.73.99.73 2 0 1.44-.01 2.6-.01 2.95 0 .29.2.63.76.52A10.99 10.99 0 0 0 23 11.5C23 5.24 18.27.5 12 .5z"/>
              </svg>
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
