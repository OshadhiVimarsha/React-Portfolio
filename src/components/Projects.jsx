import { useState } from "react";
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Projects = () => {
  const { Projects } = content;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showVideo, setShowVideo] = useState(false); // for demo video toggle

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setShowVideo(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setShowVideo(false);
  };

  return (
      <section className="bg-bg_light_primary" id="projects">
        <div className="md:container px-5 pt-24 pb-24 min-h-screen flex flex-col justify-between">
          <div>
            <h2 className="title text-center" data-aos="fade-down">
              {Projects?.title || "Projects"}
            </h2>
            <h4 className="subtitle text-center mb-12" data-aos="fade-down">
              {Projects?.subtitle || "Our latest work"}
            </h4>
            <p className="description text-center mb-12" data-aos="fade-down">
              {Projects?.description || ""}
            </p>
          </div>

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
              {Projects?.project_content?.length > 0 ? (
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

                  {/* Project Image */}
                  {!showVideo && (
                      <img
                          src={selectedProject.image || "/placeholder.jpg"}
                          alt={selectedProject.title || "Project"}
                          className="w-full h-48 object-cover rounded-xl mb-4"
                      />
                  )}

                  {/* Demo Video */}
                  {showVideo && selectedProject.demoVideo && (
                      <div className="w-full h-64 mb-4">
                        <video
                            controls
                            className="w-full h-full rounded-xl"
                            src={selectedProject.demoVideo}
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                  )}

                  {/* Title + Description */}
                  <h3 className="text-2xl font-bold font-Poppins text-gray-800 mb-2">
                    {selectedProject.title || "Untitled Project"}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {selectedProject.description ||
                        "No detailed description available."}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {selectedProject.demoVideo && (
                        <button
                            onClick={() => setShowVideo(!showVideo)}
                            className="flex-1 font-semibold text-white bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                          {showVideo ? "Hide Video" : "Watch Demo"}
                        </button>
                    )}
                    {selectedProject.githubLink && (
                        <a
                            href={selectedProject.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center font-semibold text-white bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                          View on GitHub
                        </a>
                    )}
                  </div>

                  <button
                      onClick={closeModal}
                      className="bg-red-500 text-white w-full mt-5 font-semibold text-gray-700 border border-gray-300 hover:bg-red-600 px-4 py-2 rounded-full transition-all duration-200"
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
