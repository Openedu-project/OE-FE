import { AffiliateSection } from "../_components/section/AffiliateSection";
import { AIAgentSection } from "../_components/section/AIAgentSection";
import { BusinessPartnersSection } from "../_components/section/BusinessPartnersSection";
import { CertificateSection } from "../_components/section/CertificateSection";
import { CTASection } from "../_components/section/CTASection";
import { FeaturedCoursesSection } from "../_components/section/FeaturedCoursesSection";
import { HackathonSection } from "../_components/section/HackathonSection";
import { HeroSection } from "../_components/section/HeroSection";
import { InstructorsSection } from "../_components/section/InstructorsSection";
import { MobileExploreSection } from "../_components/section/MobileExploreSection";
import { NewsSection } from "../_components/section/NewsSection";
import { PartnersSection } from "../_components/section/PartnersSection";

export default function Home() {
  return (
    <>
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
    </>
  );
}
