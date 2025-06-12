import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import FinanceFlowLogo from "../../assets/projectIcon/financeFlow.png";
import BeeMoLogo from "../../assets/projectIcon/BeeMo Logo.png";
import autoCallerLogo from "../../assets/projectIcon/autoCaller.png";
import PMLogo from "../../assets/projectIcon/PM.png";
import DashboardLogo from "../../assets/projectIcon/odindashboard.png";
import CineSearchLogo from "../../assets/projectIcon/cinesearchlogo.png";
const Project = () => {
  const projects = [
    {
      id: 1,
      title: "FinanceFlow",
      description:
        "FinanceFlow is a modern and user-friendly personal finance tracker built with Laravel, Tailwind CSS, JavaScript, Chart.js, and MySQL.",
      image: FinanceFlowLogo,
      technologies: ["Laravel", "Blade", "Tailwind CSS", "MySQL", "ChartJS"],
      github: "#",
      live: "#",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "AutoCaller",
      description:
        "A modern Laravel-based platform where users can post cars for sale and receive direct calls from potential buyers.",
      image: autoCallerLogo,
      technologies: [
        "Laravel",
        "Blade",
        "AlpineJs",
        "Tailwind CSS",
        "JavaScript",
        "MySQL",
      ],
      github: "#",
      live: "#",
      category: "Full Stack",
    },
    {
      id: 3,
      title: "BeeMo: IoT-Enabled Stingless Beehive Monitoring System",
      description:
        "BeeMo is an IoT-based, web-enabled monitoring and management system designed specifically for Tetragonula biroi, a stingless bee species native to the Philippines. It aims to modernize beekeeping by enhancing honey production, automating environmental monitoring, and providing real-time data access through a user-friendly web interface.",
      image: BeeMoLogo,
      technologies: [
        "PHP",
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "ChartJs",
        "PHPMAILER",
        "Infobip API",
        "PHPPest",
      ],
      github: "#",
      live: "#",
      category: "Backend Dev",
    },
    {
      id: 4,
      title: "Project Management CRUD Application",
      description:
        "A full-featured Project Management CRUD application, this system provides excellent management of projects, tasks, and users with role-based access control, advanced search, and filtering capabilities.",
      image: PMLogo,
      technologies: [
        "ReactJS",
        "InertiaJS",
        "Laravel",
        "Tailwind CSS",
        "MySQL",
      ],
      github: "#",
      live: "#",
      category: "Full Stack",
    },
    {
      id: 5,
      title: "CineSearch",
      description:
        "A modern and responsive movie browsing web application, users can search for movies, view trending movies based on searches, and fetch detailed movie data.",
      image: CineSearchLogo,
      technologies: ["ReactJS", "Tailwind CSS", "Appwrite", "TMDB API"],
      github: "#",
      live: "#",
      category: "Full Stack",
    },
    {
      id: 6,
      title: "Odin Dashboard",
      description: "A modern and responsive dashboard.",
      image: DashboardLogo,
      technologies: ["HTML", "CSS"],
      github: "#",
      live: "#",
      category: "Front End",
    },
  ];

  const [expandedId, setexpandedId] = useState(null);

  const toggleDescription = (id) => {
    setexpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="project-section"
      className="min-h-screen py-24 bg-slate-950 ml-24 space-y-8"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-light text-white mb-4">
          Personal Projects
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Explore my projects showcasing modern web technologies, creative
          problem-solving, and attention to detail.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-slate-800/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 w-auto"
          >
            <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-700/50 flex items-center justify-center group-hover:bg-slate-700/30 transition-colors">
                <img src={project.image} className="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-300">
                  
                </img>
              </div>
              <div className="absolute top-3 right-3">
                <span className="bg-slate-800/50 text-slate-300 px-2 py-1 rounded text-xs border border-slate-600/30 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h4>
              <p
                onClick={() => toggleDescription(project.id)}
                className="text-slate-400 text-sm mb-4 leading-relaxed"
              >
                {expandedId === project.id
                  ? project.description
                  : `${project.description.slice(0, 100)}${
                      project.description.length > 100 ? "..." : ""
                    }`}
              </p>

              <div className="flex flex-wrap gap-1 mb-6">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="bg-slate-700/50 text-slate-400 px-2 py-1 rounded text-xs border border-slate-600/30"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-slate-500 text-xs px-2 py-1">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center border border-slate-700 bg-slate-800/50 hover:bg-slate-700 text-xs py-2 px-3 rounded"
                >
                  <Github className="w-3 h-3 mr-1" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-xs py-2 px-3 rounded text-white"
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Call to Action Card */}
      <div className="text-center">
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-3xl p-12 border border-slate-700/50 max-w-xl mx-auto">
          <div className="text-5xl mb-6">🎯</div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-slate-400 text-lg mb-8">
            Let's discuss how we can bring your vision to life with cutting-edge
            technology and exceptional design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-8 py-3 text-lg rounded text-white">
              Start a Project
            </button>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-slate-700 bg-slate-800/50 hover:bg-slate-700 px-8 py-3 text-lg rounded text-white"
            >
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
