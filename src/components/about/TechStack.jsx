import React from "react";
import { Code, Users, ExternalLink, GitBranchIcon } from "lucide-react";
import LaravelIcon from '../../assets/icons/laravel.svg';
import ReactIcon from '../../assets/react.svg';
import JavaScriptIcon from '../../assets/icons/javascript.svg';
import PHPIcon from '../../assets/icons/php.svg';
import NodeJSIcon from '../../assets/icons/nodejs.svg';
import TailwindIcon from '../../assets/icons/tailwind.svg';
import BootstrapIcon from '../../assets/icons/bootstrap.svg';
import MySQLIcon from '../../assets/icons/mysql.svg';
import PostgreSQLIcon from '../../assets/icons/postgresql.svg';
import figmaIcon from '../../assets/icons/figma.svg';
import gitIcon from '../../assets/icons/git.svg';
import chartjsIcon from '../../assets/icons/chartjs.png';

const TechStack = () => {
  const technologies = [
    { name: "Laravel", icon: LaravelIcon },
    { name: "React", icon: ReactIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "PHP", icon: PHPIcon },
    { name: "Node.js", icon: NodeJSIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "Bootstrap", icon: BootstrapIcon },
    { name: "MySQL", icon: MySQLIcon },
    { name: "PostgreSQL", icon: PostgreSQLIcon },
    { name: "Figma", icon: figmaIcon },
    { name: "Git", icon: gitIcon },
    { name: "ChartJs", icon: chartjsIcon },
  ];

  const stats = [
    { number: "19+", label: "Projects" },
    { number: "9+", label: "Clients" },
    { number: "4+", label: "Years" },
    { number: "100%", label: "Satisfaction" },
  ];

  const services = [
    "Web Development",
    "UI/UX Design",
    "Performance Optimization",
  ];

  return (
    <section className="min-h-screen py-24 bg-slate-950 ml-24">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-white mb-4">
            Tech Stack & Services
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            The technologies I work with and the results I deliver
          </p>
        </div>

        {/* <div className="grid lg:grid-cols-2 gap-16"> */}

        {/* Left Column - Technologies & Stats */}
        <div className="space-y-12">
          {/* Technologies */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-5 h-5 text-slate-400" />
              <h3 className="text-xl font-light text-white">Technologies</h3>
            </div>

            <div className="overflow-hidden py-8 relative">
              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute left-0 top-0 w-45 h-full bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 w-45 h-full bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

              <div className="flex gap-6 animate-scroll whitespace-nowrap">
                {/* First set of technologies */}
                {technologies.map((tech, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 w-[100px] hover:bg-white/20 transition-all duration-300"
                  >
                    <img src={tech.icon} alt={tech.name} className="w-16 h-16 object-contain" />
                    <span className="text-white text-sm font-medium">
                      {tech.name}
                    </span>
                  </div>
                ))}

                {/* Duplicate set for infinite scroll */}
                {technologies.map((tech, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 min-w-[120px] hover:bg-white/20 transition-all duration-300"
                  >
                    <img src={tech.icon} alt={tech.name} className="w-16 h-16 object-cover" />

                    <span className="text-white text-sm font-medium">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 py-8">
          <div className="space-y-12">
            {/* Services */}
            <div>
              <h3 className="text-xl font-light text-white mb-8">Services</h3>
              <div className="grid gap-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-slate-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 text-center mt-15">
            <h3 className="text-xl font-light text-white mb-4">
              Ready to work together?
            </h3>
            <p className="text-slate-500 mb-6">
              Let's discuss your project and bring your ideas to life.
            </p>
            <button className="bg-white text-slate-950 px-6 py-2 rounded-md font-medium hover:bg-slate-100 transition-colors">
              Start a conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
