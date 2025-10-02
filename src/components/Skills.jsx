import { useState } from "react";
import { content } from "../Content";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};

Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  const openModal = (skill) => {
    setSelectSkill(skill);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  // Duplicate icons to make seamless loop
  const scrollSkills = [...skills.skills_content, ...skills.skills_content];

  return (
    <section className="min-h-fit bg-white py-12" id="skills">
      {/* Section Title */}
      <div className="md:container px-5">
        <h2 className="title text-center">{skills.title}</h2>
        <h4 className="subtitle text-center mb-10">{skills.subtitle}</h4>
      </div>

      {/* Continuous scroll from right to left */}
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee gap-6 whitespace-nowrap">
          {scrollSkills.map((skill, i) => (
            <div
              key={i}
              onClick={() => openModal(skill)}
              className="inline-flex flex-shrink-0 bg-white w-20 h-20 items-center justify-center rounded-md shadow-md cursor-pointer border-2 border-slate-200 
                         hover:scale-110 hover:shadow-xl transition-transform duration-300"
            >
              <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
            </div>
          ))}
        </div>
      </div>

      {/* CSS for right-to-left continuous scroll */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
