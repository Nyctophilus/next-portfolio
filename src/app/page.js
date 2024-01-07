"use client";
import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("./components/HeroSection"));
const ProjectsSection = dynamic(() =>
  import("./components/Projects/ProjectsSection")
);
const AboutSection = dynamic(() => import("./components/AboutSection"));

const AchievementsSection = dynamic(() =>
  import("./components/AchievementsSection")
);
const EmailSection = dynamic(() => import("./components/EmailSection"));
const Footer = dynamic(() => import("./components/Footer"));

import Navbar from "./components/Navbar/Navbar";
import StarsBg from "./components/StarsBg/StarsBg";

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
