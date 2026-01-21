import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between mb-16">
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/"
          className="text-base font-semibold hover:text-muted-foreground transition-colors"
        >
          Avinash Papineni
        </Link>
        <Link
          href="/about"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          About
        </Link>
        <Link
          href="/writing"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Writing
        </Link>
      </nav>
      <ThemeToggle />
    </header>
  );
}
