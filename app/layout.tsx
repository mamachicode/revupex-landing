import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revupex",
  description: "Revupex landing site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
