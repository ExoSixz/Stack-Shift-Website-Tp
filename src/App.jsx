import { useEffect, useState } from "react";
import DynamicIslandMenu from "./DynamicIslandMenu";

export default function App() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white font-sans">
      <DynamicIslandMenu shrink={shrink} />

      <section id="hero" className="h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold">ExoSixz</h1>
        <p className="mt-4 text-lg text-gray-300">Modern Minimal Portfolio</p>
      </section>

      <section id="about" className="h-screen flex items-center justify-center">
        <h2 className="text-4xl">About Me</h2>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center">
        <h2 className="text-4xl">Projects</h2>
      </section>

      <section id="resume" className="h-screen flex items-center justify-center">
        <h2 className="text-4xl">Resume</h2>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center">
        <h2 className="text-4xl">Contact</h2>
      </section>
    </div>
  );
}