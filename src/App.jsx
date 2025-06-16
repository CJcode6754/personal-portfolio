import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import Project from "./components/project/Project";
import TechStack from "./components/about/TechStack";
import Services from "./components/Services/Services";

function App() {
  return (
      <div>
        <Sidebar />
      <main>
        <Home />
        <TechStack />
        <Project />
        <Services/>
      </main>
      </div>
  );
}

export default App;
