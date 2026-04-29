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
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const isScrollingRef = useRef(false);

  // Handle scrolling when the URL changes (e.g., clicking a link)
  useEffect(() => {
    // If this update came from the scroll spy, don't trigger another scroll
    if (location.state?.fromScrollSpy) return;
    
    // If we're already animating a scroll, don't interrupt
    if (isScrollingRef.current) return;

    const sectionId = pathMap[pathname];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        // Optimization: only scroll if the element isn't already roughly in view
        const rect = element.getBoundingClientRect();
        const isInView = rect.top >= -50 && rect.top <= 150;
        
        if (!isInView) {
          isScrollingRef.current = true;
          element.scrollIntoView({ behavior: "smooth" });
          
          const handleScrollEnd = () => {
            isScrollingRef.current = false;
            window.removeEventListener("scrollend", handleScrollEnd);
          };
          window.addEventListener("scrollend", handleScrollEnd);
          
          // Fallback for browsers without scrollend or if it fails to fire
          setTimeout(() => {
            isScrollingRef.current = false;
            window.removeEventListener("scrollend", handleScrollEnd);
          }, 1500);
        }
      }
    } else if (pathname === "/") {
      if (window.scrollY > 10) {
        isScrollingRef.current = true;
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1000);
      }
    }
  }, [pathname, location.state]);

  // Handle URL updates when scrolling (Scroll-Spy)
  useEffect(() => {
    const options = { threshold: 0.6 };

    const callback = (entries) => {
      // If we are currently performing an intentional scroll (from a click), 
      // don't let the observer trigger navigation updates which might fight the scroll.
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const path = Object.keys(pathMap).find((key) => pathMap[key] === sectionId);
          if (path && window.location.pathname !== path) {
            // Pass state: { fromScrollSpy: true } so the scroll-to-section effect knows to skip
            navigate(path, { replace: true, state: { fromScrollSpy: true } });
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
