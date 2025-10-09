// import images
import Hero_person from "./assets/images/Hero/Hero_person.png";

import figma from "./assets/images/Skills/figma.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import python from "./assets/images/Skills/python.png";
import java from "./assets/images/Skills/java.png";
import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import js from "./assets/images/Skills/js.png";
import mysql from "./assets/images/Skills/mysql.png";
import postman from "./assets/images/Skills/postman.png";
import tailwind from "./assets/images/Skills/tailwind.png"
import bootstrap from "./assets/images/Skills/bootstrap.png"
import ts from "./assets/images/Skills/ts.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import firebase from "./assets/images/Skills/firebase.png";


import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import orm from "./assets/images/Projects/ORM.png"
import paramee from "./assets/images/Projects/paramee.png";
import html_portfolio from "./assets/images/projects/html_portfolio.png";
import react_portfolio from "./assets/images/projects/react_portfolio.png";
import ecommerce from "./assets/images/projects/ecommerce.png";
import person_project from "./assets/images/projects/person.png";
import dream_nest from "./assets/images/projects/deream_nest.png";

import parameeVideo from "./assets/images/Projects/video/ParameeCompany.mp4"
import studentSystem from "./assets/images/Projects/video/StudentSyatem.mp4"
import dreamNest from "./assets/images/Projects/video/DreamNestHotel.mp4"
import FloraVideo from "./assets/images/Projects/video/FloraWebsite.mp4"
import portfolio_html from "./assets/images/Projects/video/Portfolio-HTML.mp4"

import vta from "./assets/images/Education/vtaLogo.png";
import Ijse from "./assets/images/Education/Ijse.png";
import Gnanodaya from "./assets/images/Education/Gnanodaya.png";
import Dharmapala from "./assets/images/Education/Dharmapala.png";


// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiBookAlt, BiCodeAlt, BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { desc } from "framer-motion/client";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#about",
      icon: BiUser,
    },
    {
      link: "#skills",
      icon: BiCodeAlt,
    },
    {
      link: "#education",
      icon: BiBookAlt,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Trainee Software Engineer",
    subtitle: "Hello! I'm",
    name: "Oshadhi Vimarsha",
    btnText: "Hire Me",
    link: "#contact",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  about: {
    title: "About Me",
    subtitle: "Full-Stack Developer",
    description_1: "I am a highly enthusiastic individual deeply interested in the world of Web Development. My primary goal is to craft elegant and efficient digital experiences.",
    description_2: "I am constantly committed to learning the latest technologies and best practices in the Web Development field. Through my portfolio, you can view my smaller projects and experiences, which clearly demonstrate my knowledge and dedication to web development.",
    name: "Oshadhi Vimarsha",
    email: "oshivimarsha1221@gmail.com",
    Contact: "075 2164302",
    btnText: "Download CV",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        logo: reactjs,
      },
      {
        name: "Python",
        logo: python,
      },
      {
        name: "Python",
        logo: java,
      },
      {
        name: "Python",
        logo: html,
      },
      {
        name: "Python",
        logo: css,
      },
      {
        name: "Python",
        logo: js,
      },
      {
        name: "Python",
        logo: ts,
      },
      {
        name: "Python",
        logo: tailwind,
      },
      {
        name: "Python",
        logo: postman,
      },
      {
        name: "Python",
        logo: mongodb,
      },
      {
        name: "Python",
        logo: firebase,
      },
      {
        name: "Python",
        logo: mysql,
      },
      {
        name: "Python",
        logo: bootstrap,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Adobe Photoshop",
        logo: ps,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Paramee Management System",
        description: "I developed a standalone JavaFX desktop application for Paramee Ice Cream." +
            " The user interface was designed using SceneBuilder, following a layered architecture " +
            "(UI — Service — DAO — Database). The system uses a MySQL database for data storage and management," +
            " and includes key features such as inventory management, customer management, order processing, " +
            "and report generation. It was built with a focus on maintainability, testability, and production-ready" +
            " design principles.\n",
        image: paramee,
        demoVideo: parameeVideo,
        githubLink: "https://github.com/OshadhiVimarsha/Paramee_Final_Layered_Architecture.git",
      },
      {
        title: "Student Management System",
        image: orm,
        description: "I developed a standalone Student Management System using JavaFX and SceneBuilder, " +
            "integrated with a MySQL database. The system follows a layered architecture and uses Hibernate ORM " +
            "for efficient database management. It allows for managing student records, courses, and performance " +
            "details with a user-friendly interface and maintainable design.\n",
        demoVideo: studentSystem,
        githubLink: "https://github.com/OshadhiVimarsha/Student_Management_System.git",
      },
      {
        title: "HTML, CSS Portfolio",
        image: html_portfolio,
        description: "I developed a personal portfolio website using HTML, CSS, and JavaScript to showcase my projects," +
            " skills, and experience. The site features a clean, responsive design and interactive elements to provide " +
            "an engaging user experience across all devices.\n",
        demoVideo: portfolio_html,
        githubLink: "https://github.com/OshadhiVimarsha/My_Portfolio.git",

      },
      {
        title: "Flora Ecommerce Web Application",
        image: ecommerce,
        description: "Flora website is a website that sells flowers. You can buy flowers here and bring them home." +
            " There are administer features and customer features. Product, category, user add, update, delete, view etc. " +
            "are under admin features. User login, logout, product view is under customer features. This includes database, " +
            "tomcat, JavaEE, jsp, boostrap use.",
        demoVideo: FloraVideo,
        githubLink: "https://github.com/OshadhiVimarsha/Flora_Ecommerce_Web_Application.git",
      },
      {
        title: "Dream Nest Hotel Website",
        image: dream_nest,
        description: "I developed the Dream Nest Hotel Management System using Spring Boot, " +
            "HTML, and CSS, following a layered architecture for clean separation of concerns." +
            " The system includes features for room reservations, customer management, and billing," +
            " along with an admin dashboard for efficient hotel operations and data management.",
        demoVideo: dreamNest,
        githubLink: "https://github.com/OshadhiVimarsha/Dream_Nest_Final_Project.git",
      },
      {
        title: "React Portfolio",
        image: react_portfolio,
      },
    ],
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "oshivimarsha1221@gmail.com",
        icon: GrMail,
        link: "mailto:oshivimarsha1221@gmail.com",
      },
      {
        text: "075 2164302",
        icon: MdCall,
        link: "https://wa.me/0752164302",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },

  education: {
  title: "Education",
  subtitle: "My academic journey",
  timeline: [
    {
      degree: "BSc.Computer Science",
      institution: "Institute of Software Engineering",
      period: "2023 - Present",
      description: "Focused on software engineering, web development, and algorithms.",
      logo: Ijse
    },
    {
      degree: "Diploma in English Certificated Course",
      institution: "VTA Horana",
      period: "2023",
      logo: vta
    },
    {
      degree: "Advanced Level",
      institution: "K/Gnanodaya Maha Vidyalaya",
      period: "2020-2022",
      description: "Specialized in Accounting, Business Studies, and Economics.",
      logo: Gnanodaya
    },
    {
      degree: "Ordinary Level",
      institution: "K/Dharmapala Maha Vidyalaya",
      period: "2019",
      logo: Dharmapala
    },
  ],
},
};
