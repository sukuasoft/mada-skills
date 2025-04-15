import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

type ModuleProgresCardProps ={
    icon:string;
    title:string;

}

export default  function ModuleProgresCard ({title, icon}:ModuleProgresCardProps){
    return (
        <div className="flex gap-1 items-center">
            <div className="flex w-[200px] gap-1 shadow-md rounded-lg bg-white px-4 py-2 text-xs items-center">

                  <img src={icon} width={25} height={25} className="object-cover saturate-0 " alt={title}/>
                            <h2 >{title}</h2>

                            <div className="ml-auto flex gap-2 items-center">
                                <p className="text-green-500">80%</p>
                                <div className='group-hover:bg-primary px-1 py-1 rounded-md text-primary group-hover:text-white '>
                                    <ArrowUpRight size={18} />
                                </div>

                            </div>
                           


            </div>
            <Button variant={'link'} >Baixar certificado</Button>
        </div>
    );
}