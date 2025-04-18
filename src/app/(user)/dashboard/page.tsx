'use client'

import ModuleProgresCard from "@/components/features/module-progress-card";
import Navbar from "@/components/layout/navbar";
import UserSidebar from "@/components/layout/user-sidebar";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/providers/app-provider";


export default function Dashboard() {
   const { loaded, user, setLoading } = useApp();
  
    const router = useRouter();
  
    useEffect(() => {
      if (!loaded) return;
  
      if (!user) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    }, [user, loaded]);

  return (
    <div>
      <Navbar />
      <div className="pt-[100px] pb-[10px] flex min-h-screen gap-6">
        <UserSidebar />

       {user&& <div>
          <p className="font-bold  text-sm">{user.name}</p>
          <p className="mb-6 text-zinc-400 text-sm">{user.email}</p>

            <p>Seu progresso</p>

            <div className="flex flex-col gap-2 mt-4">
                <ModuleProgresCard  title='HTML' icon='/images/tutoriais/html.png'/>
                <ModuleProgresCard  title='HTML' icon='/images/tutoriais/html.png'/>
                <ModuleProgresCard  title='HTML' icon='/images/tutoriais/html.png'/>

            </div>
        </div>}
      </div>
    </div>
  );
}
