import Link from "next/link";

import { Navigation } from "@/components/public/navigation";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-2 focus:outline-offset-2 focus:outline-ring"
      >
        Aller au contenu principal
      </a>
      <header className="relative border-b border-border bg-background/80">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="rounded-md text-lg font-semibold tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            DemoWeb
          </Link>
          <Navigation />
        </div>
      </header>
      <main
        id="contenu"
        tabIndex={-1}
        className="mx-auto min-h-[60vh] w-full max-w-6xl px-4 py-10 outline-none"
      >
        {children}
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-sm text-muted-foreground">
          <p>Site de démonstration — DemoWeb.</p>
        </div>
      </footer>
    </>
  );
}
