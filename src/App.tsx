import "./App.css";
// Assets Import
import Avatar from "./assets/Photo.webp";
import Project1 from "./assets/project1.webp";
import ImageHolder from "./assets/placeholder.webp";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import { projects, skills } from "./types";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Contact from "./components/Contact";

function App() {
  const ProjectData: projects = [
    {
      image: Project1,
      title: "Personal Portfolio Website",
      link: "",
      repo: "https://github.com/johncegom/my-portfolio",
      technologies: "HTML5 Tailwind CSS ReactJS TypeScript",
      text: "A responsive portfolio website. It is a curated collection of my work and achievements, providing a snapshot of my skills and expertise as a Frontend Developer.",
    },
    {
      image: ImageHolder,
      title: "Streak",
      link: "",
      repo: "",
      technologies: "HTML5 Tailwind CSS ReactJS TypeScript",
      text: "Incoming project.",
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
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
