import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { scoreApproved } from "@/lib/constants";

type ModuleProgresCardProps = {
  icon: string;
  title: string;
  progress?:number;
  module:string;
};

export default function ModuleProgresCard({
  title,
  icon,
  module,
  progress
}: ModuleProgresCardProps) {
  return (
    <div className="flex gap-1 items-center group">
      <Link href={`/certificados/${module}`} className={`flex w-[250px] gap-1 shadow-md rounded-lg
       bg-white px-4 py-2 text-xs items-center ${progress == 100 && 'pointer-events-none'}`}>
        <img
          src={icon}
          width={25}
          height={25}
          className="object-cover  "
          alt={title}
        />
        <h2>{title}</h2>

        <div className="ml-auto flex gap-2 items-center">
        <p className={`${progress == undefined ? "text-zinc-500" : (
          progress >= scoreApproved ? "text-green-500" : "text-red-500"
        )} text-xs`}>{
            progress== undefined ? "Não iniciado" : `${progress}%`
            }</p>
            {
                (progress == undefined || progress < scoreApproved) &&  <div className="group-hover:bg-primary px-1 py-1 rounded-md text-primary group-hover:text-white duration-200">
                <ArrowUpRight size={18} />
              </div>
            }
        </div>
      </Link>
     {(progress && progress >= scoreApproved) &&  <Button variant={"link"}>Baixar certificado</Button>}
    </div>
  );
}
