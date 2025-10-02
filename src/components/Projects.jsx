import { useState } from "react";
import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper modules
import { Pagination, Autoplay } from "swiper"; // Changed to "swiper" for compatibility

const Projects = () => {
  const { Projects } = content;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Debug content structure
  console.log("Projects content:", Projects);

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-24 pb-24 min-h-screen flex flex-col justify-between">
        {/* Section Title */}
        <div>
          <h2 className="title text-center" data-aos="fade-down">
            {Projects?.title || "Projects"}
          </h2>
          <h4 className="subtitle text-center mb-12" data-aos="fade-down">
            {Projects?.subtitle || "Our latest work"}
          </h4>
        </div>

        {/* Swiper Centered */}
        <div className="flex justify-center items-start">
          <Swiper
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={Projects?.project_content?.length > 1}
            data-aos="fade-up"
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            className="rounded-3xl max-w-7xl w-full drop-shadow-primary pt-2 pb-16"
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            centeredSlides={true}
          >
            {Projects?.project_content && Projects.project_content.length > 0 ? (
              Projects.project_content.map((content, i) => (
                <SwiperSlide
                  key={i}
                  className="bg-white rounded-2xl p-6 pt-8 pb-10 border-b-4 border-cyan-200 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl h-fit flex flex-col items-center"
                >
                  <div className="relative overflow-hidden rounded-xl mb-4 w-full">
                    <img
                      src={content.image || "/placeholder.jpg"}
                      alt={content.title || "Project"}
                      className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex flex-col gap-3 items-center text-center">
                    <h5 className="font-bold font-Poppins text-lg text-gray-800">
                      {content.title || "Untitled Project"}
                    </h5>
                    <button
                      onClick={() => openModal(content)}
                      className="font-semibold text-white bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      READ MORE
                    </button>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <p className="text-center text-gray-600">No projects available.</p>
              </SwiperSlide>
            )}
          </Swiper>
        </div>

        {/* Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4 relative shadow-2xl">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-cyan-600 text-2xl font-bold"
              >
                &times;
              </button>
              <img
                src={selectedProject.image || "/placeholder.jpg"}
                alt={selectedProject.title || "Project"}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold font-Poppins text-gray-800 mb-2">
                {selectedProject.title || "Untitled Project"}
              </h3>
              <p className="text-gray-600 mb-4">
                {selectedProject.description ||
                  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
              </p>
              <button
                onClick={closeModal}
                className="w-full font-semibold text-white bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;