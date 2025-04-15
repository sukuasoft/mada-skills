"use client";
import Link from "next/link";
import Image from "next/image";
import icon from "@/assets/icon.png";
import NavbarLink from "./link";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import SidebarModuleLink from "@/components/features/sidebar-module-link";
import { useState } from "react";

type NavbarProps = {
  currentPage?: string;
};

export default function Navbar({ currentPage }: NavbarProps) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <nav className="bg-white z-[10] fixed top-0 left-0  px-10 py-4 w-full flex justify-between items-center shadow-xs">
        <Link href="/">
          <Image src={icon} width={100} alt="" />
        </Link>

        <div className="mx-auto flex gap-4 items-center">
          <NavbarLink href="/" current={currentPage == "home"}>
            Início
          </NavbarLink>
          <button onClick={()=>{
            setShow(!show)
          }}   className={`${currentPage == "tutoriais" ? 'text-primary':  'text-zinc-600 hover:text-zinc-800'} flex gap-1 items-center`}>
          Tutoriais</button>

          <button  onClick={()=>{
            setShow(!show)}}  className={`${currentPage == "exercicios" ? 'text-primary':  'text-zinc-600 hover:text-zinc-800'} flex gap-1 items-center`}>
          Exercícios</button>

          <button   onClick={()=>{
            setShow(!show) }} className={`${currentPage == "certificados" ? 'text-primary':  'text-zinc-600 hover:text-zinc-800'} flex gap-1 items-center`}>
          Certificados</button>
        
         
        </div>

        <div className="flex gap-4 items-center">
          <Link href="/login">
            <Button variant={"outline"} className="text-primary">
              <User />
              Entrar
            </Button>
          </Link>
          <Link href="/register">
            <Button>Inscreve-se</Button>
          </Link>
        </div>
      </nav>

     {
    show && (
        <div
        className="fixed top-0 left-0 h-screen w-full flex pt-[70px] flex-col z-[2]
    "
      >
        <div className="bg-white flex-1 py-6 px-10">
          <div className=" flex flex-wrap gap-4 items-center">
            <SidebarModuleLink
              tutorial="HTML"
              module="Tags basicas"
              href="tutoriais/1"
            />
            <SidebarModuleLink
              tutorial="HTML"
              module="Tags basicas"
              href="tutoriais/1"
            />
            <SidebarModuleLink
              tutorial="HTML"
              module="Tags basicas"
              href="tutoriais/1"
            />
          </div>
        </div>
      </div>
    )
     }
    </div>
  );
}
