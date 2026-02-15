import HomeBanner from "@/components/home-banner";
import IntroSection from "@/components/intro-section";
import WeeklyOffers from "@/components/weekly-offers";
import SignatureDishes from "@/components/signature-dishes";
import KhimExperience from "@/components/khim-experience";
import InstagramFeed from "@/components/instagram-feed";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <IntroSection />
      <WeeklyOffers />
      <SignatureDishes />
      <KhimExperience />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
