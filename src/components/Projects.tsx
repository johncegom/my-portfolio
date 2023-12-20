// Assets Import
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";

import Project from "./Project";

const Projects = () => {
  return (
    <section>
      <div className="container m-auto px-4 no-v">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="flex gap-10 mt-10">
          <Project
            image={Project1}
            title="Furniture Store Landing Page"
            text="Responsive HTML/CSS layout for online funiture store. HTML5, CSS3
          (SCSS)"
          />
          <Project
            image={Project2}
            title="Designer Furniture Store Landing Page"
            text="Responsive HTML/CSS layout for online store of designer furniture. HTML5, CSS3
          (SCSS)"
          />
          <Project
            image={Project3}
            title="Landing page for front-end developer"
            text="Responsive HTML/CSS layout for landing page for front-end developer. HTML5, CSS3 (SCSS)"
          />
          <Project
            image={Project4}
            title="Website redesign for The Venus project"
            text="Responsive HTML/CSS layout for The Venus project. HTML5, CSS3 (SCSS)"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
