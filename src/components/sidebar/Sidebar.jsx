import React, { useState } from 'react';
import { Menu, X, Home, User, Folder } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = [
    { href: '#home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { href: '#techstack-section', label: 'About', icon: <User className="w-5 h-5" /> },
    { href: '#project-section', label: 'Projects', icon: <Folder className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-2xl p-3 text-white hover:bg-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <div className="relative">
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </div>
      </button>

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-24 bg-slate-900/95 backdrop-blur-xl border-r border-slate-800/50 z-40 transition-all duration-500 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } shadow-2xl`}>
        <div className="flex flex-col items-center h-full py-8">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)}
            className="group hover:scale-110 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 group-hover:rotate-6 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-900/80 rounded-xl flex items-center justify-center backdrop-blur-sm">
                CJ
              </div>
            </div>
          </a>
          
          {/* Navigation */}
          <nav className="flex flex-col space-y-8 flex-1 justify-center">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group relative p-3 rounded-2xl bg-slate-800/30 hover:bg-slate-700/50 text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 border border-slate-700/30 hover:border-cyan-500/50 shadow-lg hover:shadow-cyan-500/20"
                style={{ 
                  animation: 'fadeInUp 0.5s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                <div className="relative z-10">
                  {item.icon}
                </div>
                
                {/* Tooltip for desktop */}
                <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-slate-700 shadow-xl hidden lg:block">
                  {item.label}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-800"></div>
                </div>

                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Custom CSS for animations */}
      <style>
        {`
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default Sidebar;