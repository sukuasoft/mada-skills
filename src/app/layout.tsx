import type { Metadata } from "next";
import './main.css';
import { Toaster } from "react-hot-toast";
import { AppProvider } from "@/providers/app-provider";
import { ContentProvider } from "@/providers/content-provider";
import { baseUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "MadaSkills",
  description: 'Construa o amanhã com habilidades de hoje',
  openGraph: {
    title: "MadaSkills",
    description: "Construa o amanhã com habilidades de hoje",
    url: baseUrl,
    siteName: "MadaSkills",
    images: [
      {
        url: `${baseUrl}/madaskills.jpg`,
      },
    ],
    type: "website",
  },
  twitter: {
    title: "MadaSkills",
    description: "Construa o amanhã com habilidades de hoje",
    images: [ `${baseUrl}/madaskills.jpg`,],
  },
 
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
          <ContentProvider>
            {children}
          </ContentProvider>
        </AppProvider>
        <Toaster />
      </body>
    </html>
  );
}