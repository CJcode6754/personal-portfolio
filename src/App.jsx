import { BrowserRouter as Router, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import TechStack from "./components/about/TechStack";
import ExperienceTimeline from "./components/experience/Experience";
import ProjectSection from "./components/project/Project";
import Services from "./components/Services/Services";
import { ThemeProvider } from "./context/ThemeContext";

// Mapping of paths to section IDs
const pathMap = {
  "/": "home",
  "/skills": "techstack-section",
  "/experience": "experience-section",
  "/projects": "project-section",
  "/services": "services",
};

const ScrollManager = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isScrollingRef = useRef(false);

  // Handle scrolling when the URL changes (e.g., clicking a link)
  useEffect(() => {
    if (isScrollingRef.current) return;

    const sectionId = pathMap[pathname];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        isScrollingRef.current = true;
        element.scrollIntoView({ behavior: "smooth" });
        
        // Reset the flag after scroll finishes (rough estimate)
        const checkScroll = () => {
          isScrollingRef.current = false;
          window.removeEventListener("scrollend", checkScroll);
        };
        window.addEventListener("scrollend", checkScroll);
      }
    } else if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  // Handle URL updates when scrolling (Scroll-Spy)
  useEffect(() => {
    const options = { threshold: 0.6 };

    const callback = (entries) => {
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const path = Object.keys(pathMap).find((key) => pathMap[key] === sectionId);
          if (path && window.location.pathname !== path) {
            navigate(path, { replace: true });
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    Object.values(pathMap).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navigate]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollManager />
        <div style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh", transition: "background-color 0.4s ease" }}>
          <Sidebar />
          <main>
            <div id="home"><Home /></div>
            <div id="techstack-section"><TechStack /></div>
            <div id="experience-section"><ExperienceTimeline /></div>
            <div id="project-section"><ProjectSection /></div>
            <div id="services"><Services /></div>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
