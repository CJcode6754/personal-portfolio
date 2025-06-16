import React, { useEffect, useState } from "react";
import { Rocket, Star, Trophy, Target, Users } from "lucide-react";

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
    { name: "Laravel", icon: "🔥", color: "from-red-500 to-orange-500" },
    { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-orange-400" },
    { name: "PHP", icon: "🐘", color: "from-purple-500 to-indigo-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500" },
    { name: "Tailwind", icon: "💨", color: "from-cyan-400 to-blue-500" },
    { name: "Bootstrap", icon: "🅱️", color: "from-purple-600 to-blue-600" },
    { name: "MySQL", icon: "🗄️", color: "from-blue-600 to-indigo-600" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-500 to-slate-600" },
    { name: "Figma", icon: "🎨", color: "from-pink-500 to-purple-500" },
    { name: "Git", icon: "🌿", color: "from-orange-500 to-red-500" },
    { name: "Chart.js", icon: "📊", color: "from-green-400 to-cyan-400" },
  ];

  const stats = [
    { number: "8+", label: "Projects Completed", icon: Rocket, color: "from-purple-500 to-pink-500" },
    { number: "2+", label: "Happy Clients", icon: Users, color: "from-green-500 to-emerald-500" },
    { number: "1+", label: "Years Experience", icon: Trophy, color: "from-yellow-500 to-orange-500" },
    { number: "100%", label: "Success Rate", icon: Target, color: "from-cyan-500 to-blue-500" },
  ];

  return (
    <section id="techstack-section" className="min-h-screen py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 lg:ml-24 px-4 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-full px-6 py-3 border border-purple-500/30 mb-8">
            <Star className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Skills & Expertise</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-xl leading-relaxed">
            Crafting digital experiences with cutting-edge technologies and creative problem-solving
          </p>
        </div>

        {/* Technologies Compact Grid */}
        <div className={`mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '0.2s' }}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Technologies I Love
          </h3>
          
          {/* Floating Tech Pills */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`group relative inline-flex items-center gap-3 bg-gradient-to-r from-slate-800/70 to-slate-900/70 backdrop-blur-lg rounded-full px-6 py-3 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${0.05 * index}s` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300 relative z-10">
                  {tech.icon}
                </span>
                
                {/* Name */}
                <span className="text-white font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300 relative z-10">
                  {tech.name}
                </span>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>
              </div>
            ))}
          </div>

          {/* Tech Categories Showcase */}
          {/* <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">Frontend</h4>
              <p className="text-slate-400 text-sm">React, JavaScript, Tailwind CSS</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="text-3xl mb-3">🔧</div>
              <h4 className="text-lg font-bold text-white mb-2">Backend</h4>
              <p className="text-slate-400 text-sm">Laravel, PHP, Node.js</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="text-3xl mb-3">🛠️</div>
              <h4 className="text-lg font-bold text-white mb-2">Tools</h4>
              <p className="text-slate-400 text-sm">Git, Figma, Chart.js</p>
            </div>
          </div> */}
        </div>

        {/* Stats Section */}
        <div className={`mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '0.4s' }}>
          <div className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.label} className="text-center group">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;