"use client";
import ModuleContent from "@/components/layout/module-content";
import ModulesSidebar from "@/components/layout/module-sidebar";
import Navbar from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { useGame } from "@/hooks/game";
import { useContent } from "@/providers/content-provider";
import { getExercisesByModule } from "@/repositories/exercise";
import { getQuestionsByExercise } from "@/repositories/question";
import { getTutorialsByModule } from "@/repositories/tutorial";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Loader2, X } from "lucide-react";
import ExerciseArea from "@/components/features/exercise-area";
import { addModuleCompleted } from "@/repositories/module-completed";
import { useApp } from "@/providers/app-provider";

type CertificadoContentProps = {
  slug: string;
};

export default function CertificadoContent({ slug }: CertificadoContentProps) {
  const { modules } = useContent();

  const [module, setModule] = useState<Module | null>(null);
  const {user, setUser} =useApp();

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

  async function doneTest(_score: number) {
    if(!user || !module)return;
    const modulesCompleted = await addModuleCompleted(user.id, {
      slug: module.slug,
      score: _score,
    });

    setUser({
      ...user, 
      modulesCompleted
    })
  }

  async function fetchQuestions() {
    const _questions: Question[] = [];
    if (!module) return _questions;

    for (const _exercise of module.exercises) {
      _questions.push(...(await getQuestionsByExercise(_exercise.id)));
    }
    return _questions;
  }

  useEffect(() => {
    if (module && user) {
      setOnFetchQuestions(() => fetchQuestions);
      setOnDone(() => doneTest);
    }
  }, [module, user]);

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
      <Navbar currentPage="certificados" />
      <div className="h-screen w-full flex flex-col ">
        <div className="mt-[70px] flex-1 flex gap-4">
          <ModulesSidebar currentSection="certificados" module={module} />

          <ModuleContent currentSection="certificados" module={module}>
            {module && (
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-[450px] mx-auto text-center">
                  <h1 className="font-bold text-2xl mb-4">
                    Certificação {module.title}
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
                          <img
                            src={module.icon}
                            width={100}
                            className="mx-auto mb-4"
                            alt=""
                          />
                          <p>
                            Conquiste seu certificado digital ao concluir cada
                            módulo! Após realizar o teste final de um módulo,
                            você poderá gerar um certificado que comprova suas
                            habilidades.
                          </p>
                          <Button
                            disabled={preparingQuiz}
                            onClick={()=>{
                              if(!user) {
                                router.push('/login');
                                return;
                              }
                              handleStartQuiz();
                            }}
                            className="mt-6 items-center gap-1 flex w-fit mx-auto"
                          >
                            {preparingQuiz && (
                              <motion.div
                                initial={{
                                  rotate: 0,
                                }}
                                animate={{
                                  rotate: 360,
                                }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              >
                                <Loader2 size={30} />
                              </motion.div>
                            )}
                            Fazer teste
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
                          score < 100 &&  <Button
                          onClick={() => {
                            setStateExercise("");
                          }}
                          className="mt-4"
                        >
                          Tentar novamente
                        </Button>
                         }
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
