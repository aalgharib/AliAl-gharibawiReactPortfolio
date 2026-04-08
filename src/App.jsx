import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-blue-500 selection:text-white">
      {/* Background */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-[#060608]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:28px_28px]"></div>
          <div className="absolute left-0 right-0 top-[-15%] mx-auto h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle_500px_at_50%_350px,rgba(37,99,235,0.12),transparent)]"></div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
