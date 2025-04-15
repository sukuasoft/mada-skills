import CodeBlock from "@/components/features/code-block";
import ModuleContent from "@/components/layout/module-content";
import ModulesSidebar from "@/components/layout/modules-sidebar";
import Navbar from "@/components/layout/navbar";


type TutoriaisProps = {
    params: Promise<{slug:string}>
}

export default async function Tutoriais({params}:TutoriaisProps) {

    const slug = (await params).slug;


  return (
    <div>
      <Navbar currentPage="tutoriais" />
      <div className="h-screen w-full flex flex-col ">
        <div className="mt-[70px] flex-1 flex gap-4">
          <ModulesSidebar />
         
            <ModuleContent>
              {
                slug == '1' ? (<>
                <img src='/images/tutoriais/html.png' width={200} className="mx-auto mb-4"  alt=''/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                
                </>):
                (
                    <>
                      <h1 className="font-bold text-2xl mb-2">Tags Basicas</h1>
                <p className="text-zinc-500 text-sm  mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting,
                   remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                   sheets containing Lorem Ipsum passages,
                 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <CodeBlock>//Este comentario</CodeBlock></>
                )
              }
            </ModuleContent>

    
        </div>
      </div>
    </div>
  );
}
