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
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, X } from "lucide-react";
import { useGame } from "@/hooks/game";
import Loading from "@/components/features/loading";
import ContentLocked from "@/components/features/content-locked";

type ExerciseContentProps = {
  slug: string;
  exerciseSlug: string;
};

export default function ExerciseContent({
  slug,
  exerciseSlug,
}: ExerciseContentProps) {
  const { modules } = useContent();

  const [module, setModule] = useState<Module | null>(null);
  const router = useRouter();
  const {
    stateExercise,
    preparingQuiz,
    handleStartQuiz,
    maxQuestions,
    approved,
    score,
    restTime,
    questionsAnswered,
    currentQuestion,
    setStateExercise,
    optionSelected,
    onSelectOption,
    responding,
    submitResponse,
    responseAnalyzed,
    setOnFetchQuestions,
    setOnDone,
  } = useGame();

  const [exercise, setExercise] = useState<Exercise | null>(null);

  async function fetchQuestions() {
    const _questions: Question[] = [];
    if (!exercise) return _questions;

    _questions.push(...(await getQuestionsByExercise(exercise.id)));

    return _questions;
  }

  useEffect(()=>{
    if(exercise){

      setOnFetchQuestions(()=>fetchQuestions);

      // setOnDone(()=> (_score:number)=>console.log(_score))
    }

  }, [exercise])

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
        setExercise(_exercise);
     
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
       {module && ( <ContentLocked module={module}/>)}
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
                <div className="w-[450px] max-w-full  mx-auto text-center">
                  <h1 className="text-3xl font-bold mb-3">
                    Exercício: {exercise.title}
                  </h1>
                  <AnimatePresence mode="wait">
                    <motion.div
                      className="relative"
                      key={stateExercise}
                      initial={{
                        opacity: 0,
                        left: -50,
                      }}
                      animate={{
                        opacity: 1,
                        left: 0,
                      }}
                      exit={{
                        opacity: 0,
                        left: -50,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                      }}
                    >
                      {stateExercise == "" ? (
                        <>
                          <p>Vamos praticar?</p>
                          <Button
                            disabled={preparingQuiz}
                            onClick={handleStartQuiz}
                            className="mt-6 items-center gap-1 flex w-fit mx-auto"
                          >
                            {preparingQuiz && (
                                       <Loading  size={30} />
                             
                            )}
                            Começar
                          </Button>
                        </>
                      ) : stateExercise == "doing" ? (
                        <ExerciseArea
                          responseAnalyzed={responseAnalyzed}
                          restTime={restTime}
                          optionSelected={optionSelected}
                          onSelectOption={onSelectOption}
                          responding={responding}
                          submitResponse={submitResponse}
                          questionsAnswered={questionsAnswered}
                          currentQuestion={currentQuestion}
                          maxQuestions={maxQuestions}
                        />
                      ) : (
                        <div>
                          <div
                            className={`${
                              approved ? `bg-green-100` : `bg-red-100`
                            } mb-2 px-4 py-4 rounded-full w-fit mx-auto`}
                          >
                            {approved ? (
                              <Check className="text-green-500" size={30} />
                            ) : (
                              <X className="text-red-500" size={30} />
                            )}
                          </div>

                          <p className="font-bold text-2xl text-center mb-2">
                            {approved ? "Aprovado!" : "Reprovado!"}
                          </p>
                          <p className="text-zinc-700 text-center mb-4">
                            {approved
                              ? "Você conseguiu a pontuação necessária para ser aprovado."
                              : "Você não conseguiu a pontuação necessária para ser aprovado."}
                          </p>

                          <p className="text-zinc-500  text-center mb-6">
                            Sua pontuação foi de {score}%
                          </p>

                       {
                       score < 100 && (
                          <Button
                            onClick={() => {
                              setStateExercise("");
                            }}
                            className="mt-4"
                          >
                            Tentar novamente
                          </Button>)}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            )}
          </ModuleContent>
        </div>
      </div>
    </div>
  );
}
