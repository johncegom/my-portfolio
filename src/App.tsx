import "./App.css";
// Assets Import
import Avatar from "./assets/Photo.jpg";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <Banner avatar={Avatar} />
      <Projects />
    </>
  );
}

export default App;
