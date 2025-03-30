import About from "@/components/page/About";
import Skills from "@/components/page/Skills";
import Profile from "@/components/page/Profile";
function Home() {
  return (
    <div className="max-w-400 mx-auto">
      <About />
      <Profile />
      <Skills />
    </div>
  );
}

export default Home;
