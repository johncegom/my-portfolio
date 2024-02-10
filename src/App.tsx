import "./App.css";
// Assets Import
import Avatar from "./assets/Photo.webp";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import { projects, skills } from "./types";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./data/Firebase";

function App() {
  const [projects, setProjects] = useState<projects>([]);
  const [skills, setSkills] = useState<skills>([]);

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
            link: DATA.link,
          };
        })
      );
    });

    PROJECT_DATA;
  }, []);

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

  return (
    <>
      <Header />
      <Banner avatar={Avatar} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <AboutMe />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
