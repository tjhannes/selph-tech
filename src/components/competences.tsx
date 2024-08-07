export function Competences() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center">Kompetenzen</h2>

      <div className="mt-8 grid grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-white hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors cursor-pointer">
          <CodeIcon className="h-12 w-12" />
          <div className="my-3 text-xl text-center">Software Entwicklung</div>
          <p className="text-center">
            Unser Team entwickelt Apps, Web Apps und normale Webseiten. Dabei
            nutzen wir aktuellste Technologien, wie React, NextJs, TypeScript,
            TailwindCSS, Serverless Backends und NestJs, oder entwickeln auch
            gerne mit Frameworks unserer Kunden.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-white hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors cursor-pointer">
          <TypeIcon className="h-12 w-12" />
          <div className="my-3 text-xl text-center">Regulatorik</div>
          <p className="text-center">
            Wir kennen uns mit regulatorischen Anforderungen aus und können
            Ihnen helfen, Ihre Software so zu gestalten, dass sie den
            Anforderungen entspricht. Wir haben Erfahrung mit ISO 27001, ISO
            13485, DSGVO, Medizinprodukterecht nach MDR sowie anderen Normen und
            Gesetzen.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-white hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors cursor-pointer">
          <WindIcon className="h-12 w-12" />
          <div className="my-3 text-xl text-center">Design</div>
          <p className="text-center">
            Wir designen Anwendungen, die einfach zu bedienen sind und gut
            aussehen. Dabei achten wir auf die Usability, User Experience und
            das Design.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-white hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors cursor-pointer">
          <CodepenIcon className="h-12 w-12" />
          <div className="my-3 text-xl text-center">Agilität</div>
          <p className="text-center">
            Wir arbeiten agil und setzen auf Scrum, Kanban oder andere agile
            Methoden. Damit entwicklen wir Lösungen, die tatsächlich einen
            Mehrwert für unsere Kunden bringen.
          </p>
        </div>
      </div>
    </div>
  );
}

function CitrusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" />
      <path d="M19.65 15.66A8 8 0 0 1 8.35 4.34" />
      <path d="m14 10-5.5 5.5" />
      <path d="M14 17.85V10H6.15" />
    </svg>
  );
}

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function CodepenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function TypeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  );
}

function WindIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}
