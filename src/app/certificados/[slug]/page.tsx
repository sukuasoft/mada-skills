import CodeBlock from "@/components/features/code-block";
import ModuleContent from "@/components/layout/module-content";
import ModulesSidebar from "@/components/layout/modules-sidebar";
import Navbar from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";


type CertificadosProps = {
    params: Promise<{slug:string}>
}

export default async function Certificados({params}:CertificadosProps) {

    const slug = (await params).slug;


  return (
    <div>
      <Navbar currentPage="certificados" />
      <div className="h-screen w-full flex flex-col ">
        <div className="mt-[70px] flex-1 flex gap-4">
          <ModulesSidebar />
         
            <ModuleContent>

                <div className="w-[450px] mx-auto text-center">
                <h1 className="font-bold text-2xl mb-2">Faça um teste para obter certificado</h1>
                <p className="text-zinc-500 text-sm  mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                 <Button>Começar</Button>
                </div>
            </ModuleContent>

    
        </div>
      </div>
    </div>
  );
}
