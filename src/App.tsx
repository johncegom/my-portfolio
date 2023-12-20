import "./App.css";
// Assets Import
import Avatar from "./assets/Photo.png";
import AvatarBg from "/small.png";

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
