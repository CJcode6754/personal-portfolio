import React, { useEffect, useState } from "react";
import { Code, Zap, Palette, Rocket } from "lucide-react";

export default function Services() {
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

    const element = document.getElementById("techstack-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const services = [
    {
      name: "Full-Stack Development",
      icon: Code,
      description: "End-to-end web applications with modern frameworks",
      color: "from-blue-500 to-purple-500",
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      description: "Beautiful, intuitive interfaces that users love",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Performance Optimization",
      icon: Zap,
      description: "Lightning-fast applications with optimal user experience",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section
      id="techstack-section"
      className="min-h-screen py-24  bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 lg:ml-24 px-6 md:px-24 relative overflow-hidden"
    >
      {/* Services Section */}
      <div
        className={`mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "0.6s" }}
      >
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          What I Offer
        </h3>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.name}
                className="group bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.name}
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced CTA */}
      <div
        className={`text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "0.8s" }}
      >
        <div className="bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30 max-w-4xl mx-auto relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-3xl"></div>

          <div className="relative z-10">
            <div className="text-6xl mb-6 animate-bounce">🚀</div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Build Something
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Amazing?
              </span>
            </h3>
            <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
              Let's collaborate and turn your vision into reality. I'm
              passionate about creating digital experiences that make a
              difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Let's Work Together
              </button>
              <a href="https://github.com/CJcode6754" className="inline-flex items-center justify-center border-2 border-slate-600 bg-slate-800/30 hover:bg-slate-700/50 hover:border-purple-500/50 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
