"use client";

import { useApp } from "@/providers/app-provider";
import LoadingScreen from "@/components/layout/loading-screen";

type AuthLayoutProps = {
  children: React.ReactNode;
};
export default function AuthLayout({ children }: AuthLayoutProps) {
  const { loading } = useApp();

  return (
    <>
    {loading && <LoadingScreen />}
    {children}
    </>
  )
}
