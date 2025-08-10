import { useState, useEffect } from "react";
import {
  Github,
  Users,
  User,
  Code,
  ChevronRight,
  Database,
  ExternalLinkIcon,
} from "lucide-react";
import { teamProjects, personalProjects } from "../assets";

const ProjectSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("team");

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

  const ProjectCard = ({ project, isTeam = false }) => {
    // Both team and personal projects use 'responsibilities'
    const list = project.responsibilities;

    return (
      <div className="bg-slate-800/30 backdrop-blur-lg rounded-3xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 mb-8">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left side - Project Image */}
          <div
            className={`relative h-64 md:h-full bg-gradient-to-br ${project.gradient}`}
          >
            <div className="absolute inset-0 bg-black/20">
              <img
                src={project.image}
                className="w-full h-full"
                alt={project.title}
              />
            </div>
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="bg-slate-800/80 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-600/30 backdrop-blur-sm">
                {project.category}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs border backdrop-blur-sm ${
                  project.status === "Completed"
                    ? "bg-green-800/80 text-green-300 border-green-600/30"
                    : "bg-yellow-800/80 text-yellow-300 border-yellow-600/30"
                }`}
              >
                {project.status}
              </span>
            </div>
            <div className="absolute bottom-4 left-4">
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800/80 hover:bg-slate-700/80 text-white p-2 rounded-full backdrop-blur-sm border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-600/80 hover:bg-cyan-500/80 text-white p-2 rounded-full backdrop-blur-sm border border-cyan-500/30 transition-all duration-300"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right side - Project Details */}
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              {isTeam && <Users className="w-5 h-5 text-cyan-400" />}
              {!isTeam && <User className="w-5 h-5 text-purple-400" />}
            </div>

            {isTeam && (
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-cyan-300 mb-2">
                  My Role
                </h4>
                <p className="text-slate-300 text-sm bg-slate-700/30 px-4 py-2 rounded-lg border border-slate-600/30">
                  {project.myRole}
                </p>
              </div>
            )}

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-green-400" />
                {isTeam ? "Key Responsibilities" : "What I Built"}
              </h4>

              <ul className="space-y-2">
                {list.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-400" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-600/30 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                Duration: {project.duration}
              </div>
              {isTeam && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Team: {project.teamSize}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
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
              My
            </span>{" "}
            Projects
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Explore my journey through collaborative team projects and personal
            development ventures.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-2 border border-slate-700/50">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("team")}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "team"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                    : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                <Users className="w-4 h-4" />
                Team Collaboration
              </button>
              <button
                onClick={() => setActiveTab("personal")}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "personal"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                    : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                <User className="w-4 h-4" />
                Personal Projects
              </button>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="space-y-8">
          {activeTab === "team" && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">
                  Team Collaboration Projects
                </h3>
                <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-1"></div>
              </div>
              {teamProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${0.2 * index}s` }}
                >
                  <ProjectCard project={project} isTeam={true} />
                </div>
              ))}
            </div>
          )}

          {activeTab === "personal" && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <User className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">
                  Personal Projects
                </h3>
                <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1"></div>
              </div>
              {personalProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${0.2 * index}s` }}
                >
                  <ProjectCard project={project} isTeam={false} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;