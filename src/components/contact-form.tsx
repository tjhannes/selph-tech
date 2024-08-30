"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";

export function ContactForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    if (
      formData.get("name") === "" ||
      formData.get("email") === "" ||
      formData.get("message") === ""
    ) {
      toast.error("Bitte füllen Sie alle Felder aus");
      return;
    }

    formData.append(
      "access_key",
      "6e6c846d-115e-4068-ae55-168ecf00a7a9" as string
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      toast.success("Email erfolgreich gesendet");
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-48" id="contact">
      <div className="w-full container grid items-center gap-6 px-4 md:px-6 justify-center justify-items-center">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">Kontakt</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Haben Sie eine Frage oder möchten Sie mehr über uns erfahren? Wir
            freuen uns darauf, von Ihnen zu hören.
          </p>
        </div>
        <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Geben Sie Ihren Namen ein"
                name="name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Ihre E-Mail eingeben"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              className="min-h-[100px]"
              id="message"
              placeholder="Ihre Nachricht eingeben"
              name="message"
            />
          </div>
          <Button className="w-full" type="submit">
            Senden
          </Button>
        </form>
        <p className="italic my-4">oder</p>
        <Link
          href="mailto:johannes@selphspace.com"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 h-10 px-4 py-2"
        >
          Email verfassen
        </Link>
      </div>

      <ToastContainer position="bottom-center" />
    </section>
  );
}
