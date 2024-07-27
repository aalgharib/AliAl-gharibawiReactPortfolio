// import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div
      className=" overflow-x-hidden text-neutral-300 antialiased
     selection:bg-cyan-300 selection:text-cyan-900 "
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* <div
          className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950
         bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),
         rgba(255,255,255,0))]"
        ></div> */}

        {/* <div className="absolute inset-0 -z-10 h-full w-full items-center
         px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}

        {/* <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 
          bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
          linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] 
          w-[1000px] rounded-full 
          bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div> */}

        {/* <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 
          bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        </div> */}

        {/* <div className="relative h-full w-full bg-neutral-900">
          <div className="absolute inset-0 bg-fuchsia-400 
          bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        </div> */}
    
        <div className="relative h-full w-full bg-black ">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
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
