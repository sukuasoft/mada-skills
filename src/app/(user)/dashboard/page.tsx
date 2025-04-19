'use client'

import ModuleProgresCard from "@/components/features/module-progress-card";
import Navbar from "@/components/layout/navbar";
import UserSidebar from "@/components/layout/user-sidebar";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/providers/app-provider";
import { useContent } from "@/providers/content-provider";
import { LayoutDashboard } from "lucide-react";


export default function Dashboard() {
   const { loaded, user, setLoading } = useApp();
   const {modules}=useContent();
  
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


            <p className="font-bold flex items-center gap-2">
            <LayoutDashboard fill="#000" size={20} />
              Seu progresso</p>

            <div className="flex flex-col gap-2 mt-6">
            {
              
                modules.map((module:Module) => (
                  <ModuleProgresCard
                    key={module.id}
                    module={module.slug}
                    progress={module.order % 3 == 0 ? 100 : (
                      module.order % 2 == 1 ? 50 : undefined
                    )}
                    title={module.title}
                    icon={module.icon}
                  />
                ))
            }
               
            </div>
        </div>}
      </div>
    </div>
  );
}
