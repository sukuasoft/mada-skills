"use client";
import RichContent from "@/components/features/rich-content";
import ModuleContent from "@/components/layout/module-content";
import ModulesSidebar from "@/components/layout/module-sidebar";
import Navbar from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { useContent } from "@/providers/content-provider";
import { getExercisesByModule } from "@/repositories/exercise";
import { getTutorialBySlug, getTutorialsByModule } from "@/repositories/tutorial";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type TutorialContentProps = {
  slug: string;
  tutorialSlug: string;
};

export default function TutorialContent({ slug, tutorialSlug }: TutorialContentProps) {
  const { modules } = useContent();

  const [module, setModule] = useState<Module | null>(null);
  const [tutorial, setTutorial] = useState<Tutorial | null>(null);

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

      const _tutorial = _tutoriais.find((tutorial) => tutorial.slug == tutorialSlug);
      if (_tutorial) {
        const _tutorialDetails = await getTutorialBySlug(_tutorial.slug);
        setTutorial(_tutorialDetails);
      }
      else {
        router.push(`/tutoriais/${slug}`);
      }

    } else {
      router.push("/");
    }
  }

  useEffect(() => {
    fetchDetails();
  }, [modules, slug, tutorialSlug]);

  return (
    <div>
      <Navbar currentPage="tutoriais" />
      <div className="h-screen w-full flex flex-col ">
        <div className="mt-[70px] flex-1 flex gap-4">
          <ModulesSidebar currentSection="tutoriais" currentSlug={tutorial?.slug} module={module} />

          <ModuleContent currentSection="tutoriais" currentSlug={tutorial?.slug} module={module}>
            {tutorial && (
             <div className='w-full'>
             <h1 className="text-3xl font-bold mb-3">{tutorial.title}</h1>
              <RichContent content={tutorial.content}/>
             </div>
            )}
          </ModuleContent>
        </div>
      </div>
    </div>
  );
}
