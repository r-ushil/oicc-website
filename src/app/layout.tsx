import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imperial Cricket Honours Board",
  description: "Honours board for Old Imperials CC and Imperial College Union CC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
