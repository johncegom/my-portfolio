import "./App.css";
// Assets Import
import Avatar from "./assets/Photo.webp";

import Header from "./components/layout/Header";
import Banner from "./components/sections/Banner";
import Projects from "./components/sections/Projects";
import { projects, skills } from "./types/types";
import Skills from "./components/sections/Skills";
import AboutMe from "./components/sections/AboutMe";
import Footer from "./components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import Contact from "./components/sections/Contact";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./services/firebase/Firebase";

function App() {
  const [projects, setProjects] = useState<projects>([]);
  const [skills, setSkills] = useState<skills>([]);
  const [language, setLanguage] = useState<string>("English");

  // Fetching all projects data.
  useEffect(() => {
    const projectsCollectionRef = collection(db, "projects");
    const queryProjectsRef = query(projectsCollectionRef, orderBy("title"));
    const PROJECT_DATA = onSnapshot(queryProjectsRef, (snapshot) => {
      setProjects(
        snapshot.docs.map((doc) => {
          const DATA = doc.data();
          return {
            id: doc.id,
            title: DATA.title,
            image: DATA.image,
            repo: DATA.repo,
            technologies: DATA.technologies,
            text: DATA.text,
            textVie: DATA.textVie,
            link: DATA.link,
            type: DATA.type,
          };
        })
      );
    });

    PROJECT_DATA;
  }, []);

  // Fetching all skills data.
  useEffect(() => {
    const skillsCollectionRef = collection(db, "skills");
    const SKILL_DATA = onSnapshot(skillsCollectionRef, (snapshot) => {
      setSkills(
        snapshot.docs.map((doc) => {
          const DATA = doc.data();
          return DATA.name;
        })
      );
    });

    SKILL_DATA;
  }, []);

  const switchLanguage = () => {
    language === "English" ? setLanguage("Vietnamese") : setLanguage("English");
  };

  return (
    <>
      <Header switchLanguage={switchLanguage} language={language} />
      <Banner avatar={Avatar} language={language} />
      <Projects projects={projects} language={language} />
      <Skills skills={skills} language={language} />
      <AboutMe language={language} />
      <Contact language={language} />
      <Footer language={language} />
      <Analytics />
    </>
  );
}

export default App;
