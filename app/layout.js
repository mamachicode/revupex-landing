import "./globals.css";

export const metadata = {
  title: "Revupex — Stop chasing reviews",
  description: "Automated EN/FR review requests + reminders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      {/* Body gradient = no more flat white */}
      <body className="min-h-screen antialiased bg-gradient-to-b from-indigo-100 via-sky-100 to-emerald-100">
        {children}
      </body>
    </html>
  );
}
