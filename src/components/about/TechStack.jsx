import React, { useEffect, useState } from "react";
import { Code, Users, ExternalLink, GitBranchIcon } from "lucide-react";

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('techstack-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const technologies = [
    { name: "Laravel", color: "from-red-500 to-orange-500" },
    { name: "React", color: "from-blue-400 to-cyan-400" },
    { name: "JavaScript", color: "from-yellow-400 to-orange-400" },
    { name: "PHP", color: "from-purple-500 to-indigo-500" },
    { name: "Node.js", color: "from-green-500 to-emerald-500" },
    { name: "Tailwind CSS", color: "from-cyan-400 to-blue-500" },
    { name: "Bootstrap", color: "from-purple-600 to-blue-600" },
    { name: "MySQL", color: "from-blue-600 to-indigo-600" },
    { name: "PostgreSQL", color: "from-blue-500 to-slate-600" },
    { name: "Figma", color: "from-pink-500 to-purple-500" },
    { name: "Git", color: "from-orange-500 to-red-500" },
    { name: "Chart.js", color: "from-green-400 to-cyan-400" },
  ];

  const stats = [
    { number: "19+", label: "Projects" },
    { number: "9+", label: "Clients" },
    { number: "4+", label: "Years" },
    { number: "100%", label: "Satisfaction" },
  ];

  const services = [
    { name: "Web Development", icon: "🚀" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Performance Optimization", icon: "⚡" },
  ];

  return (
    <section id="techstack-section" className="min-h-screen py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 lg:ml-24 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 left-1/4 w-48 h-48 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Tech Stack
            </span> & Services
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            The technologies I work with and the results I deliver
          </p>
        </div>

        {/* Technologies */}
        <div className={`mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '0.2s' }}>
          <div className="flex items-center justify-center gap-3 mb-12">
            <Code className="w-6 h-6 text-cyan-400" />
            <h3 className="text-2xl font-light text-white">Technologies</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`group p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${0.1 * index}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6`}>
                  {tech.name.charAt(0)}
                </div>
                <h4 className="text-white text-center font-medium group-hover:text-cyan-300 transition-colors duration-300">
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Stats and Services */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Stats */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`} style={{ transitionDelay: '0.4s' }}>
            <h3 className="text-2xl font-light text-white mb-8 text-center">Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`} style={{ transitionDelay: '0.6s' }}>
            <h3 className="text-2xl font-light text-white mb-8 text-center">Services</h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={service.name}
                  className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl group-hover:scale-125 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <span className="text-slate-300 group-hover:text-cyan-300 transition-colors duration-300">
                      {service.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-8 text-center mt-8">
              <h3 className="text-xl font-light text-white mb-4">
                Ready to work together?
              </h3>
              <p className="text-slate-400 mb-6">
                Let's discuss your project and bring your ideas to life.
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Start a conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
