import AboutSection from "../components/landing/AboutSection";
import TimelineSection from "../components/landing/TimelineSection";
import TechSection from "../components/landing/TechSection";
import FeaturedPostsSection from "../components/landing/FeaturedPostsSection";

export default function Landing() {
  return (
    <main>
      <AboutSection />
      <TimelineSection />
      <TechSection />
      <FeaturedPostsSection />
    </main>
  );
}
