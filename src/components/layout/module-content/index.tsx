import { useModule } from "@/providers/module-provider";
import { ChevronRight, ChevronLeft, Menu, MenuSquare } from "lucide-react";
import Link from "next/link";
import { title } from "process";
import { useMemo } from "react";

type ModuleContentProps = {
  children: React.ReactNode;
  module: Module | null;
  currentSection: string;
  currentSlug?: string;
};


export default function ModuleContent({
  children,
  currentSection,
  module,
  currentSlug,
}: ModuleContentProps) {
  const [prev, next] = useMemo(() => {
    if (!module) return [null, null];

    if (currentSection == "tutoriais") {
        const currentIndex = module.tutorials.findIndex(
            (item) => item.slug == currentSlug
          );
          
            return [
              currentIndex - 1 >= 0
                ? {
                link:`/tutoriais/${module.slug}/${module.tutorials[currentIndex - 1].slug}`,
                title:module.tutorials[currentIndex - 1].title
                }
                : null,
              currentIndex + 1 < module.tutorials.length
                ? {
                    link:`/tutoriais/${module.slug}/${module.tutorials[currentIndex + 1].slug}`, 
                    title:module.tutorials[currentIndex + 1].title
                }
                : null,
            ];
    }
    if (currentSection == "exercicios") {
      const currentIndex = module.exercises.findIndex(
        (item) => item.slug == currentSlug
      );


      
        return [
          currentIndex - 1 >= 0
            ? {
                link:`/exercicios/${module.slug}/${module.exercises[currentIndex - 1].slug}`,
                title:module.exercises[currentIndex - 1].title
            }
            : null,
          currentIndex + 1 < module.exercises.length
            ?{
                link:`/exercicios/${module.slug}/${module.exercises[currentIndex + 1].slug}`,
                title:module.exercises[currentIndex + 1].title
            }
            : null,
        ];
    }

    if (currentSection == "certificados") {
      return [null, null];
    }
    return [null, null];
  }, [currentSection, module, currentSlug]);


  const {showSidebar, setShowSidebar} = useModule();

  return (
    <div className="flex-1 flex flex-col overflow-auto  py-6 px-6">
      <button onClick={()=>{
       setShowSidebar(true);
      }} className="flex items-center gap-2 min-sm:hidden mb-4 text-sm">
        <MenuSquare size={18}/>
        Mostrar menu 
      </button>
      <div className="mb-4 flex-1 flex flex-col">
        {children}
      </div>

      <div className="h-[1px] mt-auto mb-4 bg-[#eee]"></div>

      {module && (
        <div className="flex justify-between text-xs">
          {
            prev && (
                <Link href={prev.link} className="text-primary flex gap-1 items-center">
            <ChevronLeft />
                {prev.title}
          </Link>
            )
          }

         {
            next &&(
                <Link href={next.link} className="text-primary flex gap-1 items-center ml-auto">
               {next.title}
                <ChevronRight />
              </Link>
            )
         }
        </div>
      )}
    </div>
  );
}
