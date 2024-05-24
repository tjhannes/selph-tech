import Image from "next/image";

export default function SectionPortfolio() {
  return (
    <section
      id="portfolio"
      className="h-[80vh] flex flex-col justify-center items-center gap-5"
    >
      <h2 className="text-2xl font-bold">Portfolio</h2>
      <Image
        src="/images/portfolio-selph-tech.webp"
        width={1352}
        height={828}
        alt="Selphspace Web App"
        className="w-2/4 h-auto"
      />
    </section>
  );
}
