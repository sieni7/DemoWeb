import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil",
  description: "Page d’accueil du site vitrine DemoWeb.",
};

export default function HomePage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight">Accueil</h1>
      <p className="mt-4 text-muted-foreground">
        Squelette de page — le contenu est prévu en S3.
      </p>
    </section>
  );
}
