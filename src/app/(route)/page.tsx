import Intro from "@/components/section/Intro";
import About from "@/components/section/About";
import Skills from "@/components/section/Skills";
import Project from "@/components/section/Project";

function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="sticky inset-0 z-0 mx-auto h-screen">
        <Intro />
      </div>
      <div className="relative z-10 bg-background pt-20">
        <div className="mx-auto">
          <About />
          <Skills />
          <Project />
        </div>
      </div>
    </div>
  );
}

export default Home;
