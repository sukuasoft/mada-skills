"use client";

import { useApp } from "@/providers/app-provider";
import LoadingScreen from "@/components/layout/loading-screen";

type UserLayoutProps = {
  children: React.ReactNode;
};
export default function UserLayout({ children }: UserLayoutProps) {
  const { loading } = useApp();

  return (
    <>
    {loading && <LoadingScreen />}
    {children}
    </>
  )
}
