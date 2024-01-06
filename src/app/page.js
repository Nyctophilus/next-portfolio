"use client";
import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("./components/HeroSection"), {
  ssr: false,
});
const ProjectsSection = dynamic(
  () => import("./components/Projects/ProjectsSection"),
  {
    ssr: false,
  }
);
const AboutSection = dynamic(() => import("./components/AboutSection"), {
  ssr: false,
});

const AchievementsSection = dynamic(
  () => import("./components/AchievementsSection"),
  {
    ssr: false,
  }
);
const EmailSection = dynamic(() => import("./components/EmailSection"), {
  ssr: false,
});
const Footer = dynamic(() => import("./components/Footer"), {
  ssr: false,
});

import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
