import Image from "next/image";
import youngWomen from "@/assets/young-women.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import icon from "@/assets/icon.png";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="px-10 py-10 min-h-screen flex flex-col">
      <Link href="/">
        <Image src={icon} width={100} alt="" />
      </Link>

      <div className="flex-1  flex gap-6 items-center justify-center">
        <div className="w-[300px]">
          <p className="font-bold text-2xl text-center">Esqueceu a senha?</p>
          <p className="text-zinc-500 text-sm mt-2 text-center mb-6">
            Digite seu e-mail para recuperar sua senha
          </p>

          <Input placeholder="Seu email" />

          <Button className="mt-4 w-full mb-4">Continuar</Button>

          <Link href="/login">
            <Button
              variant={"link"}
              className="mx-auto w-fit block  hover:no-underline"
            >
              Voltar para Entrar
            </Button>
          </Link>
        </div>

        <Image src={youngWomen} width={200} alt="" />
      </div>
    </div>
  );
}
