import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { content } from "../Content";
// Remove the static logo import since we're using dynamic ones now
// import logo from "../assets/images/Education/logo.png";

const Education = () => {
  const { education } = content;
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section className="min-h-fit bg-white py-14 mt-20" id="education">
      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-20">
        {/* Section Title */}
        <div className="md:container px-5">
          <h2 className="title text-center">{education.title}</h2>
          <h4 className="subtitle text-center mb-10">{education.subtitle}</h4>
        </div>

        {/* Modern Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Central Timeline Line - Hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-cyan-600 to-cyan-200 rounded-full opacity-80 hidden sm:block"></div>

            {education.timeline.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="relative mb-8 sm:mb-16 transition-all duration-700"
                onMouseEnter={() => setActiveItem(index)}
              >
                <div
                  className={`flex flex-col sm:flex-row items-center ${
                    index % 2 === 0 ? "" : "sm:flex-row-reverse"
                  } group`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full sm:w-5/12 ${
                      index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
                    } mb-4 sm:mb-0`}
                  >
                    <div
                      className={`relative bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200/50 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:border-gray-300 hover:shadow-2xl hover:shadow-purple-400/20 ${
                        activeItem === index
                          ? "scale-100 sm:scale-105 bg-white border-gray-300"
                          : ""
                      }`}
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-200/20 via-cyan-100/20 to-cyan-200/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300">
                            {/* Updated to use dynamic item.logo */}
                            <img
                              src={item.logo}
                              alt={`${item.institution} Logo`}
                              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                            />
                          </div>

                          <div className="flex-1">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors">
                              {item.degree}
                            </h3>
                            <p className="text-cyan-500 font-medium mb-1 text-sm sm:text-base">
                              {item.institution}
                            </p>
                            <p className="text-gray-500 text-xs sm:text-sm">
                              {item.period}
                            </p>
                          </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                          {item.description}
                        </p>
                      </div>

                      {/* Hover Arrow - Hidden on mobile */}
                      <div
                        className={`absolute top-1/2 ${
                          index % 2 === 0 ? "-right-6" : "-left-6"
                        } transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:block`}
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center">
                          <ChevronRight
                            className={`w-5 h-5 sm:w-6 sm:h-6 text-white ${
                              index % 2 === 0 ? "" : "rotate-180"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node - Hidden on mobile */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden sm:block">
                    <div
                      className={`w-6 h-6 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full border-4 border-white transition-all duration-300 ${
                        activeItem === index
                          ? "scale-150 shadow-lg shadow-blue-400/50"
                          : "group-hover:scale-125"
                      }`}
                    ></div>
                  </div>

                  {/* Spacer - Hidden on mobile */}
                  <div className="hidden sm:block sm:w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;