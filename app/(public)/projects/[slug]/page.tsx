import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projet",
  description: "Fiche d’un projet présenté sur le site DemoWeb.",
};

export default async function ProjectDetailPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  await params;

  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight">Projet</h1>
      <p className="mt-4 text-muted-foreground">
        Squelette de page — le contenu est prévu en S3.
      </p>
    </section>
  );
}
