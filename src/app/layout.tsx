import type { Metadata } from "next";
import './main.css';
import { Toaster } from "react-hot-toast";
import { AppProvider } from "@/providers/app-provider";

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
        <AppProvider>
        {children}
        </AppProvider>
        <Toaster />
      </body>
    </html>
  );
}