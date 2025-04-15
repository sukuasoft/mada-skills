import { ChevronRight, ChevronLeft } from "lucide-react"

type ModuleContentProps =   {
    children:React.ReactNode;
}

export default function ModuleContent ({children}:ModuleContentProps){
    return (
        <div className="flex-1 flex flex-col overflow-y-auto py-6 px-6">
            <div className="mb-4 flex-1">
                {children}
            </div>
         
            

            <div className="h-[1px] mt-auto mb-4 bg-[#eee]"></div>

            <div className="flex justify-between text-xs">
                <div className="text-primary flex gap-1 items-center">
                    <ChevronLeft />
                    Tag Básicas
                </div>


                <div className="text-primary flex gap-1 items-center">
                    Tag Básicas
                    <ChevronRight />

                </div>
            </div>
        </div>
    )
}