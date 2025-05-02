'use client';

import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { scoreApproved } from "@/lib/constants";
import { generateCertificateAction } from "@/actions/certificate";
import { useState } from "react";
import { useApp } from "@/providers/app-provider";
import Loading from "./loading";

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

  const [fetchCertificate, setFetchCertificate] = useState(false);
  const {user} = useApp();

  async  function downloadCertificate (){

    if (progress == undefined || progress < scoreApproved || fetchCertificate || !user) return; 

    setFetchCertificate(true);

    const imageResult = await generateCertificateAction(title,user.name, progress);

    const link = document.createElement('a');
    link.href = `${imageResult.content}`;
    link.download = `${imageResult.name}.png`;
    link.click();

    setFetchCertificate(false);

  }

  return (
    <div className="flex gap-1 items-center group flex-wrap w-full">
      <Link href={`/certificados/${module}`} className={`flex flex-1 gap-1 shadow-md rounded-lg
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
     {(progress && progress >= scoreApproved) &&  <Button disabled={fetchCertificate} 
     onClick={downloadCertificate} variant={"link"}>
      {fetchCertificate && <Loading />}
      {fetchCertificate ? "Baixando..." : "Baixar certificado"}
     </Button>}
    </div>
  );
}
