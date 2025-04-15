import Image from "next/image";
import Link from "next/link";
import icon from "@/assets/icon.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white px-10 py-6">
      <div className="  flex gap-10">
        <div className="text-sm">
          <Image
            src={icon}
            className="saturate-0 brightness-0 invert"
            width={100}
            alt=""
          />
          <p className="opacity-75 mb-2">
            Construa o amanhã com habilidades de hoje
          </p>
          <p>Email: ninafaustino@mail.com</p>
          <p>Telefone: +244 944 875 873</p>

          <div className="flex gap-2 mt-4">
            <Link href="/" className="text-white bg-[#0077ff41] p-2 rounded-md">
        <Facebook  className="opacity-75"  size={14} />
            </Link>
            
            <Link href="/" className="text-white bg-[#0077ff41] p-2 rounded-md">
            <Instagram  className="opacity-75" size={14} />

            </Link>

          </div>
        </div>

        <div className="text-sm">
          <p className="font-bold">Explorar</p>
          <div className="opacity-75 flex flex-col gap-1 mt-1">
            <Link href="/#">Início</Link>
            <Link href="/tutoriais">Tutoriais</Link>
            <Link href="/exercicios">Exercícios</Link>
            <Link href="/certificados">Certificados</Link>
          </div>
        </div>

        <div className="text-sm w-[200px] ml-auto">
            <p className="font-bold">Newsletter</p>
            <p className="opacity-75 text-xs mb-2">Receba dicas e conteúdos sobre programação web no seu e-mail. Faça parte da nossa comunidade!</p>
            <Input placeholder="Email"  className=" placeholder:text-[#b3b3b372] border-none mb-4 bg-[#eeeeee23]"/>
            <Button>Inscrever-se agora</Button>
        </div>
      </div>

      <hr className="mt-4 opacity-15" />
      <p className="opacity-75 text-xs text-center mt-4 ">
        Feito por Nina Faustino
      </p>
    </footer>
  );
}
