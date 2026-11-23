import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets",
  description: "Liste des projets présentés sur le site DemoWeb.",
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight">Projets</h1>
      <p className="mt-4 text-muted-foreground">
        Squelette de page — le contenu est prévu en S3.
      </p>
    </section>
  );
}
