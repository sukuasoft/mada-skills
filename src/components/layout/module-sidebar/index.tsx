import { useState } from "react";
import ModuleSidebarSection from "./section";
import { useModule } from "@/providers/module-provider";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

type ModuleSidebarProps = {
  module: Module | null;
  currentSection?: string;
  currentSlug?: string;
};

export default function ModuleSidebar({ module, currentSection, currentSlug }: ModuleSidebarProps) {
  const {showSidebar, setShowSidebar} =useModule();

  return (
    <AnimatePresence mode="wait">
      <motion.aside
      
      key={showSidebar ? "show" : "hide"}
        initial={{
          opacity: 0,
          left: -200,
        }}
        animate={{
          opacity: 1,
          left: 0,

        }}
        exit={{
          opacity: 0,
          left: -200,
        }}
        transition={{
          duration: 0.5,
        }}
     className={`bg-[#fafafa] h-full  overflow-y-auto px-6 py-6 w-[200px]
     border-r border-[#eaeaea] 
    ${showSidebar ? 'max-sm:fixed max-sm:left-0 max-sm:top-[70px]': 'max-sm:hidden'}`} >
   <button
              onClick={() => {
                setShowSidebar(false);
              }}
              className={`${showSidebar ? ` min-sm:hidden ` : " hidden "}`}
            >
              <X />
            </button>
      <div className="flex flex-col gap-4">
        {module && (
          <>
            {module.tutorials.length > 0 && <ModuleSidebarSection items={module.tutorials.map((item)=>{
              return {
                current: currentSection == "tutoriais" && currentSlug == item.slug,
                title:item.title,
                moduleSlug:module.slug,
                slug:item.slug,
                section:"tutoriais"
              }

            })} title={`Tutoriais ${module.title}`} />}
            {module.exercises.length > 0 && <ModuleSidebarSection items={
                module.exercises.map((item)=>{
                    return {
                        current: currentSection == "exercicios" && currentSlug == item.slug,
                      title:item.title,
                      moduleSlug:module.slug,
                      slug:item.slug,
                      section:"exercicios"
                    }
      
                  })
            } title={`Exercícios ${module.title}`}  />}
            {module.exercises.length > 0 && <ModuleSidebarSection items={
               [
                {
                    current: currentSection == "certificados" ,
                
                    title:'Obter Certificação',
                    moduleSlug:module.slug,
                    slug:'',
                    section:"certificados"
                  }
               ]
            } title={`Certificação ${module.title}`} />}
          </>
        )}
      </div>
  
    </motion.aside>
    </AnimatePresence>
  );
}
