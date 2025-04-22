import Intro from "@/components/section/Intro";
import About from "@/components/section/About";
import Skills from "@/components/section/Skills";
import Project from "@/components/section/Project";
import SideNavigation from "@/components/Navigation/SideNavigation";

function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="sticky inset-0 z-0 mx-auto h-screen">
        <Intro />
      </div>
      <div className="relative z-10 bg-background pt-20">
        <div className="mx-auto">
          <div className="relative flex gap-20">
            <SideNavigation />
            <div>
              <About />
              <Skills />
              <Project />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
