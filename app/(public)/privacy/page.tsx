import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confidentialité",
  description: "Politique de confidentialité du site DemoWeb.",
};

export default function PrivacyPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight">Confidentialité</h1>
      <p className="mt-4 text-muted-foreground">
        Squelette de page — la politique est prévue en S7.
      </p>
    </section>
  );
}
