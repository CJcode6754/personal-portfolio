import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import TechStack from "./components/about/TechStack";
import Services from "./components/Services/Services";
import ProjectSection from "./components/project/Project";

function App() {
  return (
      <div>
        <Sidebar />
      <main>
        <Home />
        <TechStack />
        <ProjectSection />
        <Services/>
      </main>
      </div>
  );
}

export default App;
