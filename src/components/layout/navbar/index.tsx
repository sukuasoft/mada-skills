import Link from "next/link";
import Image from 'next/image';
import icon from '@/assets/icon.png';
import NavbarLink from "./link";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";


type NavbarProps = {
    currentPage?:string;
}

export default function Navbar({currentPage}:NavbarProps) {
  return (
   <nav className="bg-white z-[10] fixed top-0 left-0  px-10 py-4 w-full flex justify-between items-center shadow-xs">
      <Link href='/'>
        <Image src={icon} width={100} alt='' />
      </Link>
      
      <div className="mx-auto flex gap-4 items-center">
        <NavbarLink href='/' current={currentPage == 'home'}>Início</NavbarLink>
        <NavbarLink href='/tutoriais' current={currentPage == 'tutoriais'}>Tutoriais
        </NavbarLink>
        <NavbarLink href='/exercicios' current={currentPage == 'exercicios'}>Exercícios
        
        </NavbarLink>
        <NavbarLink href='/certificados' current={currentPage == 'certificados'}>Certificados
        
        </NavbarLink>

      </div>
      
    <div className="flex gap-4 items-center">
        <Button variant={'outline'}>
            <User/>
            Entrar</Button>
        <Button>Inscreve-se</Button>
    </div>

   </nav>
  );
}
