import "./App.css";

// Assets
import Avatar from "./assets/Photo.webp";

// React and Hooks
import { useState } from "react";
import { useProjects, useSkills } from "./hooks/useFirebase";

// Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Banner from "./components/sections/Banner";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import AboutMe from "./components/sections/AboutMe";
import Contact from "./components/sections/Contact";

// Analytics
import { Analytics } from "@vercel/analytics/react";
import { SupportedLanguage } from "./translations/translation";

function App() {
  const [language, setLanguage] = useState<SupportedLanguage>("English");

  const { projects } = useProjects();
  const { skills } = useSkills();

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
