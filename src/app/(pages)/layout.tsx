import { Footer } from "../_components/layout/Footer";
import { Header } from "../_components/layout/Header";

export default function LandingPageLayout({ children }: {children: React.ReactNode}) {
  return (
    <div className="text-slate-950 text-base not-italic normal-nums font-normal accent-auto bg-white box-border block tracking-[normal] leading-[26px] list-outside list-disc outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-start indent-[0px] normal-case visible border-separate font-lexend">
      <div className="absolute box-border block outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]"></div>
      <div className="box-border hidden outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]"></div>

      <Header />

      { children }

      <Footer />

      <section
        aria-label="Notifications alt+T"
        className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]"
      ></section>
    </div>
  );
}
