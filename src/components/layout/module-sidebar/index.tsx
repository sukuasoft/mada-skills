import ModuleSidebarSection from "./section";

type ModuleSidebarProps = {
  module: Module | null;
  currentSection?: string;
  currentSlug?: string;
};

export default function ModuleSidebar({ module, currentSection, currentSlug }: ModuleSidebarProps) {
  return (
    <aside className="bg-[#fafafa] h-full  overflow-y-auto px-6 py-6 w-[200px] border-r border-[#eaeaea]">
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
    </aside>
  );
}
