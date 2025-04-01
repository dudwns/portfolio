import About from "@/components/section/About";
import Skills from "@/components/section/Skills";
import Profile from "@/components/section/Profile";
import Project from "@/components/section/Project";

function Home() {
  return (
    <div className="max-w-400 mx-auto">
      <About />
      <Profile />
      <Skills />
      <Project />
    </div>
  );
}

export default Home;
