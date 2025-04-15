import QuizArea from "@/components/features/quiz-area";
import ModuleContent from "@/components/layout/module-content";
import ModulesSidebar from "@/components/layout/modules-sidebar";
import Navbar from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight } from "lucide-react";


type ExerciciosProps = {
    params: Promise<{slug:string}>
}

export default async function Exercicio({params}:ExerciciosProps) {

    const slug = (await params).slug;


  return (
    <div>
      <Navbar currentPage="exercicios" />
      <div className="h-screen w-full flex flex-col ">
        <div className="mt-[70px] flex-1 flex gap-4">
          <ModulesSidebar />
         
            <ModuleContent>

                <div className="w-[450px] mx-auto text-center">
                <h1 className="font-bold text-2xl mb-6">Exercicio Tags Basicas</h1>
                <Progress value={55} className="mb-4"/>
                <QuizArea />
                <Button className="mt-2">Submeter 
                  <ChevronRight />

                </Button>

                </div>
            </ModuleContent>

    
        </div>
      </div>
    </div>
  );
}
