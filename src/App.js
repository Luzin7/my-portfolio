import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
function App() {
  return (
    <div id="home" className="App">
      <Header />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
