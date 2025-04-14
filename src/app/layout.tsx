import type { Metadata } from "next";
import './main.css';

export const metadata: Metadata = {
  title: "MadaSkills",
  description: 'Construa o amanhã com habilidades de hoje'
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