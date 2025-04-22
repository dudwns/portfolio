import Intro from "@/components/section/Intro";
import About from "@/components/section/About";
import Skills from "@/components/section/Skills";
import Project from "@/components/section/Project";

function Home() {
  return (
    <div className="max-w-400 mx-auto">
      <Intro />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default Home;
