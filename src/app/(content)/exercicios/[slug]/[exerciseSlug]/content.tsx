"use client";
import ExerciseArea from "@/components/features/exercise-area";
import ModuleContent from "@/components/layout/module-content";
import ModulesSidebar from "@/components/layout/module-sidebar";
import Navbar from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { useContent } from "@/providers/content-provider";
import { getExercisesByModule } from "@/repositories/exercise";
import { getQuestionsByExercise } from "@/repositories/question";
import { getTutorialsByModule } from "@/repositories/tutorial";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type ExerciseContentProps = {
  slug: string;
  exerciseSlug: string;
};

type StateExercise = '' | 'doing' | 'solved';

export default function ExerciseContent({
  slug,
  exerciseSlug,
}: ExerciseContentProps) {
  const { modules } = useContent();

  const [module, setModule] = useState<Module | null>(null);
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [stateExercise, setStateExercise] = useState<StateExercise>(""); // "", "doing","solved"

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

      const _exercise = _exercises.find(
        (exercise) => exercise.slug == exerciseSlug
      );

      if (_exercise) {
        const _questions = await getQuestionsByExercise(_exercise.slug);
        setExercise({
          ..._exercise,
          questions: _questions,
        });
      } else {
        router.push(`/tutoriais/${slug}`);
      }
    } else {
      router.push("/");
    }
  }

  useEffect(() => {
    fetchDetails();
  }, [modules, slug, exerciseSlug]);

  return (
    <div>
      <Navbar currentPage="exercicios" />
      <div className="h-screen w-full flex flex-col ">
        <div className="mt-[70px] flex-1 flex gap-4">
          <ModulesSidebar
            currentSection="exercicios"
            currentSlug={exercise?.slug}
            module={module}
          />

          <ModuleContent
            currentSection="exercicios"
            currentSlug={exercise?.slug}
            module={module}
          >
            {exercise && (
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-[450px] mx-auto text-center">
                  <h1 className="text-3xl font-bold mb-3">Exercício: {exercise.title}</h1>
                  {
                    stateExercise == '' ? (
                      <>
                        <p>Vamos praticar?</p>
                        <Button onClick={()=>{
                          setStateExercise('doing');
                        }} className="mt-6" >Começar</Button>

                      </>
                    ):(
                      stateExercise == 'doing' ? (
                      <>
                      <ExerciseArea />
                      </>
                    ):(
                      <div>Resolvido</div>
                    ))
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
