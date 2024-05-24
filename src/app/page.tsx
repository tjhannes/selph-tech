import SectionContact from "@/components/SectionContact";
import SectionFooter from "@/components/SectionFooter";
import SectionHero from "@/components/SectionHero";
import SectionPortfolio from "@/components/SectionPortfolio";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <SectionHero />
      <SectionPortfolio />
      <SectionContact />
      <SectionFooter />
    </main>
  );
}
