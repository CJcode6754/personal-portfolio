import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import Project from "./components/project/Project";
import TechStack from "./components/about/TechStack";

function App() {
  return (
      <div>
        <Sidebar />
      <main>
        <Home />
        <TechStack />
        <Project />
      </main>
      </div>
  );
}

export default App;
