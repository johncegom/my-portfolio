// Assets Import
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";

import Project from "./Project";

const Projects = () => {
  return (
    <div className="container m-auto px-4">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="flex gap-10 mt-10 flex-wrap">
        <Project
          image={Project1}
          title="My Portfolio"
          text="A responsive portfolio website. It  is a curated collection of my work and achievements,
                  providing a snapshot of my skills and expertise as a Frontend Developer."
          technologies="HTML5, Tailwind CSS, ReactJS, TypeScript"
          link="https://minh-duong-saiko.vercel.app/"
          repo=""
        />
        <Project
          image={Project2}
          title="Dummy Project"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
        voluptatem tempore odio molestiae repudiandae numquam vero nemo nostrum.
        Repellat laboriosam debitis voluptatem quas dolores odio asperiores,
        ullam praesentium adipisci eius."
          technologies="HTML5, Tailwind CSS, ReactJS, TypeScript"
          link=""
          repo=""
        />
        <Project
          image={Project3}
          title="Dummy Project"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
        voluptatem tempore odio molestiae repudiandae numquam vero nemo nostrum.
        Repellat laboriosam debitis voluptatem quas dolores odio asperiores,
        ullam praesentium adipisci eius."
          technologies="HTML5, Tailwind CSS, ReactJS, TypeScript"
          link=""
          repo=""
        />
        <Project
          image={Project4}
          title="Dummy Project"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
        voluptatem tempore odio molestiae repudiandae numquam vero nemo nostrum.
        Repellat laboriosam debitis voluptatem quas dolores odio asperiores,
        ullam praesentium adipisci eius."
          technologies="HTML5, Tailwind CSS, ReactJS, TypeScript"
          link=""
          repo=""
        />
        <Project
          image={Project4}
          title="Dummy Project"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
        voluptatem tempore odio molestiae repudiandae numquam vero nemo nostrum.
        Repellat laboriosam debitis voluptatem quas dolores odio asperiores,
        ullam praesentium adipisci eius."
          technologies="HTML5, Tailwind CSS, ReactJS, TypeScript"
          link=""
          repo=""
        />
        <Project
          image={Project4}
          title="Dummy Project"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
        voluptatem tempore odio molestiae repudiandae numquam vero nemo nostrum.
        Repellat laboriosam debitis voluptatem quas dolores odio asperiores,
        ullam praesentium adipisci eius."
          technologies="HTML5, Tailwind CSS, ReactJS, TypeScript"
          link=""
          repo=""
        />
        <Project
          image={Project4}
          title="Dummy Project"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
        voluptatem tempore odio molestiae repudiandae numquam vero nemo nostrum.
        Repellat laboriosam debitis voluptatem quas dolores odio asperiores,
        ullam praesentium adipisci eius."
          technologies="HTML5, Tailwind CSS, ReactJS, TypeScript"
          link=""
          repo=""
        />
      </div>
    </div>
  );
};

export default Projects;
