import React from "react";
import "./App.css";
// Assets Import
import Avatar from "./assets/Photo.png";
import AvatarBg from "../public/small.png";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <Banner avatar={Avatar} avatarbg={AvatarBg} />
      <Projects />
    </>
  );
}

export default App;
