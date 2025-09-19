import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Revupex",
  description: "Revupex landing"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="border-t mt-16 py-6 text-center text-sm text-gray-500">
          <nav className="space-x-4">
            <Link href="/privacy-policy" className="underline">Privacy</Link>
            <span>•</span>
            <Link href="/terms-of-service" className="underline">Terms</Link>
          </nav>
          <div className="mt-2">© {year} Revupex</div>
        </footer>
      </body>
    </html>
  );
}
