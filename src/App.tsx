import "./App.css";
// Assets Import
import Avatar from "./assets/Photo.webp";

// Data import
import ProjectData from "./data/projects.json";
import SkillData from "./data/skills.json";

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
  const PROJECT_DATA: projects = ProjectData;
  const SKILL_DATA: skills = SkillData;
  return (
    <>
      <Header />
      <Banner avatar={Avatar} />
      <Projects projects={PROJECT_DATA} />
      <Skills skills={SKILL_DATA} />
      <AboutMe />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
