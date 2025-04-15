import ModuleProgresCard from "@/components/features/module-progress-card";
import Navbar from "@/components/layout/navbar";
import UserSidebar from "@/components/layout/user-sidebar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="pt-[100px] pb-[10px] flex min-h-screen gap-6">
        <UserSidebar />

        <div>
          <p className="font-bold  text-sm">Sebastião Sukuakueche</p>
          <p className="mb-6 text-zinc-400 text-sm">sukuakueches@gmail.com</p>

            <p>Seu progresso</p>

            <div className="flex flex-col gap-2 mt-4">
                <ModuleProgresCard  title='HTML' icon='/images/tutoriais/html.png'/>
                <ModuleProgresCard  title='HTML' icon='/images/tutoriais/html.png'/>
                <ModuleProgresCard  title='HTML' icon='/images/tutoriais/html.png'/>

            </div>
        </div>
      </div>
    </div>
  );
}
