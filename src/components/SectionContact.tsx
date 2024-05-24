export default function SectionContact() {
  return (
    <section
      id="contact"
      className="h-[80vh] flex flex-col justify-center items-center gap-5"
    >
      <h2 className="text-2xl font-bold">Kontakt</h2>
      <p>
        Wir freuen uns darauf, von Ihnen zu hören. Kontaktieren Sie uns gerne.
      </p>
      <a
        href="mailto:johannes@selphspace.com"
        className="bg-slate-300 px-4 py-3 rounded-lg"
      >
        Email verfassen
      </a>
      <p className="text-sm">info@selphspace.com</p>
    </section>
  );
}
