import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import TechStack from "./components/about/TechStack";
import ExperienceTimeline from "./components/experience/Experience";
import ProjectSection from "./components/project/Project";
import Services from "./components/Services/Services";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh", transition: "background-color 0.4s ease" }}>
        <Sidebar />
        <main>
          <Home />
          <TechStack />
          <ExperienceTimeline />
          <ProjectSection />
          <Services />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
