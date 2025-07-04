import React, { useState } from 'react';
import {
  Menu,
  X,
  Home,
  User,
  Folder,
  BriefcaseBusinessIcon,
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '#home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { href: '#techstack-section', label: 'About', icon: <User className="w-5 h-5" /> },
    { href: '#project-section', label: 'Projects', icon: <Folder className="w-5 h-5" /> },
    { href: '#services', label: 'Services', icon: <BriefcaseBusinessIcon className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Top Bar Container */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900/95 border border-slate-800/40 backdrop-blur-lg rounded-full px-4 py-2 shadow-xl flex items-center space-x-4 lg:space-x-6">
        {/* Logo or Short Name */}
        <a
          href="#home"
          className="hidden sm:flex items-center justify-center ml-3 w-10 h-10 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-xl shadow-md hover:scale-110 transition-transform"
        >
          <div className="w-8 h-8 bg-slate-900/90 rounded-md flex items-center justify-center text-white font-bold text-sm">
            CJ
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="flex items-center space-x-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative p-2 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-all duration-300"
            >
              {item.icon}
              <span className="absolute bottom-[-1.8rem] left-1/2 -translate-x-1/2 text-xs bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
