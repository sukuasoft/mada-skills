"use client";
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

type CertificadoContentProps = {
  slug: string;
};

export default function CertificadoContent({ slug }: CertificadoContentProps) {
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
      <Navbar currentPage="certificados" />
      <div className="h-screen w-full flex flex-col ">
        <div className="mt-[70px] flex-1 flex gap-4">
          <ModulesSidebar currentSection="certificados" module={module} />

          <ModuleContent currentSection="certificados" module={module}>
            {module && (
                   <div className="flex-1 flex flex-col items-center justify-center">
              <div className="w-[450px] mx-auto text-center">
                <p className="font-bold text-2xl mb-4">Certificados</p>

                <img
                  src={module.icon}
                  width={100}
                  className="mx-auto mb-4"
                  alt=""
                />
                <p>
                Conquiste seu certificado digital ao concluir cada módulo! Após realizar o teste final de um módulo, você poderá gerar um certificado que comprova suas habilidades. Mostre seu progresso e compartilhe suas conquistas com o mundo!
                </p>
                <Button className="mt-4" >Começar</Button>
              </div>
              </div>
            )}
          </ModuleContent>
        </div>
      </div>
    </div>
  );
}
