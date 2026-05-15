import AboutHero from "../components/about/AboutHero";
import WhatIDo from "../components/about/WhatIDo";
import ExpandedTimeline from "../components/about/ExpandedTimeline";
import Philosophy from "../components/about/Philosophy";
import PersonalSection from "../components/about/PersonalSection";

export default function About() {
  return (
    <main className="about-page">
      <AboutHero />
      <WhatIDo />
      <ExpandedTimeline />
      <Philosophy />
      <PersonalSection />
    </main>
  );
}