import dynamic from "next/dynamic";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import ProjectsSection from "./components/Projects/ProjectsSection";
import StarsBg from "./components/StarsBg/StarsBg";

const AchievementsSection = dynamic(
  () => import("./components/AchievementsSection"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      <StarsBg />
      <Navbar />
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
