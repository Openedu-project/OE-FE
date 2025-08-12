import { Header } from "./_components/layout/Header";
import { MobileExploreSection } from "./_components/section/MobileExploreSection";
import { HeroSection } from "./_components/section/HeroSection";
import { PartnersSection } from "./_components/section/PartnersSection";
import { Footer } from "./_components/layout/Footer";
import { FeaturedCoursesSection } from "./_components/section/FeaturedCoursesSection";
import { CertificateSection } from "./_components/section/CertificateSection";
import { AIAgentSection } from "./_components/section/AIAgentSection";
import { AffiliateSection } from "./_components/section/AffiliateSection";
import { InstructorsSection } from "./_components/section/InstructorsSection";
import { NewsSection } from "./_components/section/NewsSection";
import { BusinessPartnersSection } from "./_components/section/BusinessPartnersSection";
import { HackathonSection } from "./_components/section/HackathonSection";
import { CTASection } from "./_components/section/CTASection";

export default function Home() {
  return (
    <div className="text-slate-950 text-base not-italic normal-nums font-normal accent-auto bg-white box-border block tracking-[normal] leading-[26px] list-outside list-disc outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-start indent-[0px] normal-case visible border-separate font-lexend">
      <div className="absolute box-border block outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]"></div>
      <div className="box-border hidden outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]"></div>

      <Header />

      <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
        <MobileExploreSection />
        <HeroSection />
        <PartnersSection />
      </div>

      <FeaturedCoursesSection />
      <CertificateSection />
      <AIAgentSection />
      <AffiliateSection />
      <InstructorsSection />
      <NewsSection />
      <BusinessPartnersSection />
      <HackathonSection />
      <CTASection />

      <Footer />

      <section
        aria-label="Notifications alt+T"
        className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]"
      ></section>
    </div>
  );
}
