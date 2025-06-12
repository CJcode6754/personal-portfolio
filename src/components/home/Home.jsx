import React from 'react'
import { MapPin, Globe, Download, Github, Mail } from 'lucide-react';

const Home = () => {
  return (
    <section id='home' className="min-h-screen bg-slate-950 flex items-center justify-center ml-24">
      <div className="max-w-2xl mx-auto px-8 text-center">
        {/* Avatar */}
        <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 text-2xl font-medium mx-auto mb-8 border border-slate-800">
          CJ
        </div>
        
        {/* Status */}
        <div className="inline-flex items-center gap-2 text-green-400 text-sm mb-6">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          Available for work
        </div>
        
        {/* Main Content */}
        <h1 className="text-4xl font-light text-white mb-4">
          Ceejay Ibabiosa
        </h1>
        <p className="text-slate-400 text-lg mb-8 font-light">
          Full Stack Developer
        </p>
        <p className="text-slate-500 leading-relaxed max-w-lg mx-auto mb-12">
          I build modern web applications with clean code and thoughtful design. 
          Focused on creating exceptional digital experiences.
        </p>

        {/* Quick Info */}
        <div className="flex justify-center gap-8 mb-12 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Philippines
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            4+ Years
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <button className="bg-white text-slate-950 px-6 py-2 rounded-md font-medium hover:bg-slate-100 transition-colors cursor-pointer">
            Get in touch
          </button>
          <button className="border border-slate-700 text-slate-300 px-6 py-2 rounded-md hover:border-slate-600 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Resume
          </button>
          <button className="border border-slate-700 text-slate-300 p-2 rounded-md hover:border-slate-600 transition-colors">
            <Github className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home