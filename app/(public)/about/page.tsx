import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: "Présentation du projet DemoWeb.",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight">À propos</h1>
      <p className="mt-4 text-muted-foreground">
        Squelette de page — le contenu est prévu en S3.
      </p>
    </section>
  );
}
