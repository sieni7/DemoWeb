import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Page de contact du site DemoWeb.",
};

export default function ContactPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 text-muted-foreground">
        Squelette de page — le formulaire est prévu en S7.
      </p>
    </section>
  );
}
