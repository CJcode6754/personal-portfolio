import React, { useEffect, useState } from "react";
import {
  MapPin,
  Globe,
  Download,
  Github,
  Mail,
  ChevronDown,
  Sparkles,
  Code,
  Zap,
} from "lucide-react";
import myPic from '../../assets/formal pic.png';
import Resume from '../../assets/resume.pdf';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ["Full Stack Developer", "UI/UX Designer"];

  useEffect(() => {
    setIsVisible(true);

    // Enhanced typewriter effect with multiple titles
    const typeText = () => {
      const fullText = titles[currentIndex];
      let i = 0;
      setTypedText("");

      const typeInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % titles.length);
          }, 2000);
        }
      }, 80);

      return () => clearInterval(typeInterval);
    };

    const cleanup = typeText();
    return cleanup;
  }, [currentIndex]);

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative z-10 max-w-7xl">
        {/* LEFT SIDE - Text Content */}
        <div
          className={`flex-1 text-center lg:text-left transition-all duration-1000 order-2 lg:order-1 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Enhanced Status */}
          <div
            className={`inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2 text-green-400 text-sm mb-8 transition-all duration-700 hover:scale-105 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full absolute top-0 left-0"></div>
            </div>
            <Sparkles className="w-4 h-4" />
            Available for work
          </div>

          {/* Enhanced Main Content */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ceejay Ibabiosa
            </span>
          </h1>

          <div className="text-slate-300 text-xl sm:text-2xl lg:text-3xl mb-8 font-light h-10 flex items-center justify-center lg:justify-start">
            <Code className="w-6 h-6 mr-3 text-cyan-400" />
            <span className="bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent">
              {typedText}
            </span>
            <span className="animate-pulse text-cyan-400 ml-1">|</span>
          </div>

          {/* <p className="text-slate-400 leading-relaxed max-w-2xl mb-10 text-lg sm:text-xl font-light">
            I craft exceptional digital experiences through clean code and thoughtful design. 
            Passionate about building modern web applications that solve real-world problems 
            and create meaningful user connections.
          </p> */}

          {/* Enhanced Quick Info */}
          <div className="flex flex-row justify-center lg:justify-start gap-6 sm:gap-8 mb-10 text-sm text-slate-400">
            <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors duration-300 cursor-pointer group">
              <div className="p-2 bg-slate-800/50 rounded-full group-hover:bg-cyan-500/20 transition-colors duration-300">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-medium">Philippines</span>
            </div>
            <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors duration-300 cursor-pointer group">
              <div className="p-2 bg-slate-800/50 rounded-full group-hover:bg-cyan-500/20 transition-colors duration-300">
                <Zap className="w-4 h-4" />
              </div>
              <span className="font-medium">6+ Months Experience</span>
            </div>
          </div>

          {/* Enhanced Actions */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="https://www.linkedin.com/in/ceejay-ibabiosa-206052292/"
              target="_blank"
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Get in touch
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>

            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group border-2 border-slate-700 text-slate-300 px-8 py-4 rounded-full hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 hover:bg-slate-800/50"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </a>

            <a
              href="https://github.com/CJcode6754"
              target="_blank"
              className="group flex justify-center border-2 border-slate-700 text-slate-300 p-4 rounded-full hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 hover:bg-slate-800/50"
            >
              <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - Enhanced Image Section */}
        <div className="hidden flex-1 sm:flex justify-center items-center order-1 lg:order-2">
          <div className="relative group">
            {/* Main image container - significantly larger */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]">
              
              {/* Inner container */}
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-1 shadow-2xl">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm">
                  {/* Image */}
                  <img 
                    src={myPic} 
                    alt="Ceejay Ibabiosa" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: "0.5s" }}>
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate-400 animate-bounce">
        <span className="text-sm mb-2">Scroll down</span>
        <ChevronDown className="w-5 h-5" />
      </div>


    </section>
  );
};

export default Home;