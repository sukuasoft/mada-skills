"use client";
import ContentLocked from "@/components/features/content-locked";
import ModuleContent from "@/components/layout/module-content";
import ModulesSidebar from "@/components/layout/module-sidebar";
import Navbar from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { useContent } from "@/providers/content-provider";
import { getExercisesByModule } from "@/repositories/exercise";
import { getTutorialsByModule } from "@/repositories/tutorial";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type ExercicioContentProps = {
  slug: string;
};

export default function ExercicioContent({ slug }: ExercicioContentProps) {
  const { modules } = useContent();

  const [module, setModule] = useState<Module | null>(null);
  const router = useRouter();

  async function fetchDetails() {
    if (modules.length == 0) return;
    const _module = modules.find((module) => module.slug == slug);
    if (_module) {
      const _tutoriais = await getTutorialsByModule(_module.id);
      const _exercises = await getExercisesByModule(_module.id);

      setModule({
        ..._module,
        tutorials: _tutoriais,
        exercises: _exercises,
      });
    } else {
      router.push("/");
    }
  }

  useEffect(() => {
    fetchDetails();
  }, [modules, slug]);

  return (
    <div>
      {module && ( <ContentLocked module={module}/>)}
      <Navbar currentPage="exercicios" />
      <div className="h-screen w-full flex flex-col ">
        <div className="mt-[70px] flex-1 flex gap-4">
          <ModulesSidebar currentSection="exercicios" module={module} />

          <ModuleContent currentSection="exercicios" module={module}>
            {module && (
                       <div className="flex-1 flex flex-col items-center justify-center">
              <div className="w-[450px] max-w-full  mx-auto text-center">
                <p className="font-bold text-2xl mb-4">Exercícios</p>

                <img
                  src={module.icon}
                  width={100}
                  className="mx-auto mb-4"
                  alt=""
                />
                <p>Pratique o que aprendeu com exercícios. Cada exercício é pensado para reforçar os conceitos estudados nos tutoriais, ajudando você a aplicar o conhecimento de forma prática. Teste suas habilidades em tempo real.</p>
                {
                    module.exercises.length > 0 && (
                        <Link href={`/exercicios/${module.slug}/${module.exercises[0].slug}`} >
                        <Button className="mt-4" >Começar praticar</Button>
                        </Link>
                    )
                }
              </div>
              </div>
            )}
          </ModuleContent>
        </div>
      </div>
    </div>
  );
}
