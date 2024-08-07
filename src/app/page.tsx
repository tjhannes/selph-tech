import SectionFooter from "@/components/SectionFooter";
import SectionHero from "@/components/SectionHero";
import SectionPortfolio from "@/components/SectionPortfolio";
import { Competences } from "@/components/competences";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <main>
      <SectionHero />
      <SectionPortfolio />
      <Competences />
      <ContactForm />
      <SectionFooter />
    </main>
  );
}
