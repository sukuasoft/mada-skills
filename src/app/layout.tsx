import type { Metadata } from "next";
import '@/styles/main.css';

export const metadata: Metadata = {
  title: "MadaSkills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  );
}