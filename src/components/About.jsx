import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { content } from "../Content";

const About = () => {
    const { about } = content;
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-bg_white min-h-screen flex items-center justify-center" id="about">
      <div className="md:container px-5 py-10">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:h-[37rem] h-96">
            <img
                src={about.image}
                data-aos="fade-up"
                alt="Portrait"
                className="h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
            <h2 className="title text-center">
                {about.title}
            </h2>
            <h4 className="subtitle text-center">
              {about.subtitle}
            </h4>
            <p className="text-gray-600 leading-relaxed mt-8">
              {about.description_1}
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              {about.description_2}
            </p>
            <h5 className=" mt-6">
                <span className="font-bold">Name:</span> {about.name}
            </h5>
            <h5 className=" mt-2">
                <span className="font-bold">Email:</span> {about.email}
            </h5>
            <h5 className=" mt-2">
                <span className="font-bold">Contact:</span> {about.Contact}
            </h5>
            <button
              onClick={() => {
                window.open("/dist/files/My_CV.pdf", "_blank");
                const link = document.createElement("a");
                link.href = "/dist/files/My_CV.pdf";
                link.download = "My_CV.pdf";
                link.click();
              }}
              className="mt-6 font-semibold text-white bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              View & Download CV
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;