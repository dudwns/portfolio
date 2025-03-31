import About from "@/components/page/About";
import Skills from "@/components/page/Skills";
import Profile from "@/components/page/Profile";
import Project from "@/components/page/Project";

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
