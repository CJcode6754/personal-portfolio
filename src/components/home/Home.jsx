import React, { useEffect, useState } from 'react'
import { MapPin, Globe, Download, Github, Mail, ChevronDown } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    setIsVisible(true);
    
    // Typewriter effect
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center lg:ml-24 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className={`max-w-2xl mx-auto px-4 sm:px-8 text-center relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Avatar */}
        <div className="relative mb-8 group">
          <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto shadow-2xl shadow-cyan-500/25 transition-all duration-500 hover:scale-110 hover:shadow-cyan-500/40">
            <div className="w-28 h-28 bg-slate-900 rounded-full flex items-center justify-center">
              CJ
            </div>
          </div>
        </div>
        
        {/* Status */}
        <div className={`inline-flex items-center gap-2 text-green-400 text-sm mb-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '0.2s' }}>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full absolute animate-pulse"></div>
          Available for work
        </div>
        
        {/* Main Content */}
        <h1 className={`text-5xl lg:text-6xl font-light text-white mb-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '0.4s' }}>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ceejay Ibabiosa
          </span>
        </h1>
        
        <div className={`text-slate-400 text-xl mb-8 font-light h-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '0.6s' }}>
          {typedText}
          <span className="animate-pulse">|</span>
        </div>
        
        <p className={`text-slate-500 leading-relaxed max-w-lg mx-auto mb-12 text-lg transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '0.8s' }}>
          I build modern web applications with clean code and thoughtful design. 
          Focused on creating exceptional digital experiences that make a difference.
        </p>

        {/* Quick Info */}
        <div className={`flex flex-row justify-center gap-6 sm:gap-8 mb-12 text-sm text-slate-400 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '1s' }}>
          <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
            <MapPin className="w-4 h-4 animate-bounce" style={{ animationDelay: '0.5s' }} />
            Philippines
          </div>
          <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
            <Globe className="w-4 h-4 animate-bounce" style={{ animationDelay: '0.7s' }} />
            1+ Years
          </div>
        </div>

        {/* Actions */}
        <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '1.2s' }}>
          <a href='https://www.facebook.com/ceejay.ibabiosa.1/' className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden">
            <span className="relative z-10">Get in touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </a>
          
          <button className="group border border-slate-700 text-slate-300 px-8 py-3 rounded-full hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
            <Download className="w-4 h-4 group-hover:animate-bounce" />
            Resume
          </button>
          
          <a href='https://github.com/CJcode6754' className="group flex justify-center border border-slate-700 text-slate-300 p-3 rounded-full hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-70px] left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-500" />
        </div>
      </div>
    </section>
  );
};

export default Home