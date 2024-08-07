import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="fixed flex top-0 w-full justify-between items-center p-3 bg-slate-300 bg-opacity-90">
      <a href="#home" className="flex align-center items-center gap-2">
        <Image src="/images/logo.webp" alt="Logo" width={32} height={32} />
        <h1 className="font-bold text-xl">Selph Tech</h1>
      </a>
      <ul className="flex gap-5">
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
}
