import { useState, useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects, techStackCategory } from "../assets";
import { motion } from "motion/react";

const Project = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [techStackId, setTechStackId] = useState(null);
  const [projectsData, setProjectsData] = useState([]);
  const [menu, setMenu] = useState("All");

  const fetchProjects = async () => {
    setProjectsData(projects);
  };

  const filteredProjectsData =
    menu === "All"
      ? projectsData
      : projectsData.filter((project) => project.technologies.includes(menu));

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("project-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const toggleTechStack = (id) => {
    setTechStackId(techStackId === id ? null : id);
  };

  return (
    <section
      id="project-section"
      className="min-h-screen py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Personal
            </span>{" "}
            Projects
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Explore my projects showcasing modern web technologies, creative
            problem-solving, and attention to detail.
          </p>
        </div>

        <div className="relative flex justify-center gap-4 my-10 sm:gap-6">
          {techStackCategory.map((category) => (
            <div key={category} className="relative">
              <button
                onClick={() => setMenu(category)}
                className={`text-gray-500 cursor-pointer ${
                  menu == category && "text-white px-4 pt-0.5"
                }`}
              >
                {category}
                {menu == category && (
                  <motion.div
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute top-0 left-0 right-0 bg-blue-500 rounded-full h-7 -z-1"
                  ></motion.div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredProjectsData.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-slate-800/30 backdrop-blur-lg rounded-3xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-4 hover:scale-105 cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              {/* Project Header */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <img
                    src={project.image}
                    className="w-full h-full object-fill"
                    alt={project.title}
                  ></img>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-slate-800/70 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-600/30 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h4>

                <p
                  onClick={() => toggleDescription(project.id)}
                  className="text-slate-400 text-sm mb-4 leading-relaxed cursor-pointer hover:text-slate-300 transition-colors duration-300"
                >
                  {expandedId === project.id
                    ? project.description
                    : `${project.description.slice(0, 120)}${
                        project.description.length > 120 ? "..." : ""
                      }`}
                </p>

                {/* Technologies */}
                <div
                  onClick={() => toggleTechStack(project.id)}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {techStackId === project.id ? (
                    project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-700/50 text-slate-400 px-3 py-1 rounded-full text-xs border border-slate-600/30 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <>
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-slate-700/50 text-slate-400 px-3 py-1 rounded-full text-xs border border-slate-600/30 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}

                      {project.technologies.length > 3 && (
                        <span className="text-slate-500 text-xs px-3 py-1 hover:text-slate-400 transition-colors duration-300">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group/btn inline-flex items-center justify-center border border-slate-700 bg-slate-800/50 hover:bg-slate-700 hover:border-cyan-500/50 text-xs py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Github className="text-white w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span className="text-white">Code</span>
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-xs py-3 px-4 rounded-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 inline-flex items-center justify-center bg-gray-300 text-gray-500 text-xs py-3 px-4 rounded-xl cursor-not-allowed"
                    >
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
