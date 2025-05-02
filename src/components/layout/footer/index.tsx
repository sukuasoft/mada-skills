'use client'

import Image from "next/image";
import Link from "next/link";
import icon from "@/assets/icon.png";


//import { Facebook, Instagram } from "lucide-react";
import { AtSign, Phone} from 'lucide-react'
import Newsletter from "./newsletter";
import { useContent } from "@/providers/content-provider";


export default function Footer() {
  const {modules}=useContent();

  
  return (
    <footer className="bg-[#0a294e] text-white px-10 py-6">
      <div className="  flex gap-10 flex-wrap">
        <div className="text-sm w-[220px]">
          <Image
            src={icon}
            className="saturate-0 brightness-0 invert"
            width={100}
            alt=""
          />
          <p className="opacity-50 mb-2">
            Construa o amanhã com habilidades de hoje
          </p>
          <p className='flex items-center opacity-75 gap-2'><AtSign size={15}/> madaskillsao@mail.com</p>
          <p className='flex items-center opacity-75 gap-2'><Phone   size={15}/> +244 944 875 873</p>

          {/*<div className="flex gap-2 mt-4">
            <Link href="/" className="text-white bg-[#0077ff41] p-2 rounded-md">
        <Facebook  className="opacity-75"  size={14} />
            </Link>
            
            <Link href="/" className="text-white bg-[#0077ff41] p-2 rounded-md">
            <Instagram  className="opacity-75" size={14} />

            </Link>

          </div>*/}
        </div>

        <div className="text-sm ">
          <p className="font-bold">Explorar</p>
          <div className=" flex flex-col gap-1 mt-1">
            <Link href={`/#`} className="opacity-75 hover:opacity-100 w-fit">Início</Link>
            <Link  href={modules.length > 0 ? `/tutoriais/${modules[0].slug}` :`#`}  className="opacity-75 hover:opacity-100 w-fit">Tutoriais</Link>
            <Link href={modules.length > 0 ? `/exercicios/${modules[0].slug}` :`#`}  className="opacity-75 hover:opacity-100 w-fit">Exercícios</Link>
            <Link  href={modules.length > 0 ? `/certificados/${modules[0].slug}` :`#`} className="opacity-75 hover:opacity-100 w-fit">Certificados</Link>
          </div>
        </div>

       <Newsletter />
      </div>

      <hr className="mt-4 opacity-15" />
      <p className="opacity-75 text-xs text-center mt-4 ">
        Feito por Madalena Faustino
      </p>
    </footer>
  );
}
