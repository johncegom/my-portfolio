import "./App.css";
// Assets Import
import Avatar from "./assets/Photo.webp";
import Project1 from "./assets/project1.webp";
import Project2 from "./assets/project2.webp";
import Project3 from "./assets/project3.webp";
import Project4 from "./assets/project4.webp";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Projects from "./components/Projects";

import { projects, skills } from "./types";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  const ProjectData: projects = [
    {
      image: Project1,
      title: "My Portfolio",
      link: "https://minhduong.vercel.app/",
      repo: "https://github.com/johncegom/my-portfolio",
      technologies: "HTML5, Tailwind CSS, ReactJS, TypeScript",
      text: "A responsive portfolio website. It is a curated collection of my work and achievements, providing a snapshot of my skills and expertise as a Frontend Developer.",
    },
    {
      image: Project2,
      title: "Dummy Project",
      link: "https://minhduong.vercel.app/",
      repo: "",
      technologies: "HTML5, Tailwind CSS, ReactJS, TypeScript",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatem tempore odio molestiae repudiandae numquam vero nemo nostrum.",
    },
    {
      image: Project3,
      title: "Dummy Project",
      link: "https://minhduong.vercel.app/",
      repo: "",
      technologies: "HTML5, Tailwind CSS, ReactJS, TypeScript",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatem tempore odio molestiae repudiandae numquam vero nemo nostrum.",
    },
    {
      image: Project4,
      title: "Dummy Project",
      link: "https://minhduong.vercel.app/",
      repo: "",
      technologies: "HTML5, Tailwind CSS, ReactJS, TypeScript",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatem tempore odio molestiae repudiandae numquam vero nemo nostrum.",
    },
    {
      image: Project2,
      title: "Dummy Project",
      link: "https://minhduong.vercel.app/",
      repo: "",
      technologies: "HTML5, Tailwind CSS, ReactJS, TypeScript",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatem tempore odio molestiae repudiandae numquam vero nemo nostrum.",
    },
    {
      image: Project3,
      title: "Dummy Project",
      link: "https://minhduong.vercel.app/",
      repo: "",
      technologies: "HTML5, Tailwind CSS, ReactJS, TypeScript",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatem tempore odio molestiae repudiandae numquam vero nemo nostrum.",
    },
  ];
  const SkillData: skills = [
    "React",
    "TypeScript",
    "Tailwind",
    "Scrum",
    "Git",
    "Action Learning",
  ];
  return (
    <>
      <Header />
      <Banner avatar={Avatar} />
      <Projects projects={ProjectData} />
      <Skills skills={SkillData} />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
