import React from "react";
import { Home, User, Folder } from "lucide-react";
import Logo from "../../assets/logo.png";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 bg-slate-900 border-r-2 border-slate-900 p-8 w-24 min-h-screen flex flex-col justify-start gap-40 items-center">
      <a href="#home">
        <img
          src={Logo}
          alt="My Logo"
          className="w-[100px] h-[100px] object-contain"
        />
      </a>

      <nav className="flex flex-col gap-8 text-white space-y-4">
        <a href="#home" className="flex items-center gap-2">
          <Home className="w-5 h-5" />
        </a>
        <a href="#techstack-section" className="flex items-center gap-2">
          <User className="w-5 h-5" />
        </a>
        <a href="#project-section" className="flex items-center gap-2">
          <Folder className="w-5 h-5" />
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
