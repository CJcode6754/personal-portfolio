import { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import TrendoraPic from '../../assets/projects/Trendora.png';
import FinanceFlow from '../../assets/projects/FinanceFlow.png';
import BeeMo from '../../assets/projects/Parameter Monitoring.png';
import ProjectManagement from '../../assets/projects/ProjectManagement.png';
import AutoCaller from '../../assets/projects/autoCaller.png';
import CineSearch from '../../assets/projects/CineSearch.png';
import OdinDashboard from '../../assets/projects/OdinProject.png';
import JobPortal from '../../assets/projects/JobPortal.png';
const Project = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('project-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "FinanceFlow",
      description: "FinanceFlow is a modern and user-friendly personal finance tracker built with Laravel, Tailwind CSS, JavaScript, Chart.js, and MySQL. It features comprehensive expense tracking, budget management, and detailed financial analytics.",
      technologies: ["Laravel", "Blade", "Tailwind CSS", "MySQL", "Chart.js"],
      image: FinanceFlow,
      github: "https://github.com/CJcode6754/FinanceFlow",
      live: "",
      category: "Full Stack",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      title: "AutoCaller",
      description: "A modern Laravel-based platform where users can post cars for sale and receive direct calls from potential buyers. Features advanced search filters, real-time messaging, and integrated payment processing.",
      technologies: ["Laravel", "Blade", "Alpine.js", "Tailwind CSS", "JavaScript", "MySQL"],
      image: AutoCaller,
      github: "https://github.com/CJcode6754/AutoCaller",
      live: "",
      category: "Full Stack",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "BeeMo: IoT Beehive Monitor",
      description: "BeeMo is an IoT-based, web-enabled monitoring system for Tetragonula biroi, a stingless bee species native to the Philippines. Features environmental monitoring, automated alerts, and comprehensive analytics dashboard.",
      technologies: ["PHP", "HTML", "CSS", "Bootstrap", "JavaScript", "Chart.js", "PHPMailer", "Infobip API"],
      image: BeeMo,
      github: "https://github.com/CJcode6754/BeeMo",
      live: "",
      category: "IoT + Backend",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 4,
      title: "Trendora",
      description: "E-Commerce platform for buying and selling trending products.",
      technologies: ["Laravel", "React", "TypeScript", "Shadcn", "Tailwind", "Postgres"],
      image: TrendoraPic,
      github: "https://github.com/CJcode6754/Trendora",
      live: "",
      category: "Full Stack",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      id: 5,
      title: "Job Portal",
      description: "A modern job portal application that connects job seekers with employers, featuring job listings, CRUD for jobs and user profiles. Built with React for a seamless user experience.",
      technologies: ["React", "React Router", "Tailwind", "JSON Server"],
      image: JobPortal,
      github: "https://github.com/CJcode6754/JobPortal",
      live: "",
      category: "Full Stack",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      id: 6,
      title: "Project Management System",
      description: "A comprehensive project management CRUD application with role-based access control, advanced search capabilities, task assignment, and progress tracking. Built with modern React and Laravel stack.",
      technologies: ["React", "Inertia.js", "Laravel", "Tailwind CSS", "MySQL"],
      image: ProjectManagement,
      github: 'https://github.com/CJcode6754/Project_Management',
      live: "",
      category: "Full Stack",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 7,
      title: "CineSearch",
      description: "A modern and responsive movie browsing application that allows users to search for movies, view trending content, and access detailed movie information with beautiful UI animations.",
      technologies: ["React", "Tailwind CSS", "Appwrite", "TMDB API"],
      image: CineSearch,
      github: "https://github.com/CJcode6754/CineSearch",
      live: "https://cine-search-delta.vercel.app",
      category: "Frontend",
      gradient: "from-red-500 to-pink-500"
    },
    {
      id: 8,
      title: "Odin Dashboard",
      description: "A sleek and modern responsive dashboard built with pure HTML and CSS, featuring clean design principles and smooth animations for data visualization.",
      technologies: ["HTML", "CSS"],
      image: OdinDashboard,
      github: "https://github.com/CJcode6754/OdinDashboard",
      live: "https://odin-dashboard-alpha.vercel.app",
      category: "Frontend",
      gradient: "from-indigo-500 to-purple-500"
    },
  ];

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="project-section" className="min-h-screen py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 lg:ml-24 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Personal
            </span> Projects
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Explore my projects showcasing modern web technologies, creative problem-solving, and attention to detail.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-slate-800/30 backdrop-blur-lg rounded-3xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-4 hover:scale-105 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <img src={project.image} className='w-full object-cover' alt={project.title}></img>
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
                    : `${project.description.slice(0, 120)}${project.description.length > 120 ? "..." : ""}`}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
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
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group/btn inline-flex items-center justify-center border border-slate-700 bg-slate-800/50 hover:bg-slate-700 hover:border-cyan-500/50 text-xs py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-xs py-3 px-4 rounded-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
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