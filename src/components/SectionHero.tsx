"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import NavBar from "./NavBar";

export default function SectionHero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col gap-10 justify-center items-center"
    >
      <NavBar />
      <ReactTyped
        className="text-2xl md:text-4xl font-bold text-center"
        strings={[
          "Wir entwickeln Apps",
          "Wir entwickeln Web Anwendungen",
          "Wir entwickeln Webseiten",
          "Wir entwickeln Software",
        ]}
        typeSpeed={40}
        backSpeed={50}
      />
      <div className="flex gap-10 w-full justify-center">
        <Image
          src="/images/portfolio-webapp-selphspace.webp"
          width={1352}
          height={828}
          alt="Selphspace Web App"
          className="w-1/4 h-auto"
        />
        <Image
          src="/images/portfolio-app-selphspace.webp"
          width={1246}
          height={830}
          alt="Selphspace App"
          className="w-1/4 h-auto"
        />
      </div>
      <Link
        href="#contact"
        className="bg-slate-300 px-4 py-3 rounded-lg text-xl"
      >
        <div>Kontaktieren Sie uns</div>
      </Link>
    </section>
  );
}
