'use client'

import Image from "next/image";
import youngWomen from "@/assets/young-women.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import icon from "@/assets/icon.png";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useApp } from "@/providers/app-provider";
import {motion, AnimatePresence} from 'motion/react';
import { useRouter } from "next/navigation";
import Loading from "@/components/features/loading";
import { Check } from "lucide-react";

type FormData = {
  email: string;
};

export default function ForgotPassword() {

   const formRef = useRef<HTMLFormElement | null>(null);
    const [isFetch, setIsFetch] = useState(false);
    const [emailSended, setEmailSended] = useState(false);
  
    const {  forgotPassword, user, loaded, setLoading} = useApp();
      const router= useRouter();

      useEffect(()=>{
        if(!loaded) return;
    
        if(user){
            router.push("/");
        }
        else{
            setLoading(false);
        }
    
      }, [user, loaded]);
  
    const [formData, setFormData] = useState<FormData>({
      email: "",
    });

   
  
    async function handleAction(action: () => Promise<void>) {
      if (isFetch) return;
      setIsFetch(true);
      await action();
  
      setIsFetch(false);
    }

  return (
      <AnimatePresence mode="wait">
    
    <motion.div 
    initial={{
        opacity: 0,
    }}
    animate={{
        opacity: 1,
    }}
    exit={{
        opacity: 0,
    }}
    transition={{
        duration: 0.5,
        ease: "easeInOut",
    }}
    key="forgot-password" className="px-10 py-10 min-h-screen flex flex-col">
      <Link href="/" className="w-fit">
        <Image src={icon} width={100} alt="" />
      </Link>

      <div className="flex-1  flex gap-6 items-center justify-center">
        {
          emailSended ? (
            <div className="w-[300px] flex flex-col gap-2 items-center">
              <div className='bg-green-100 mt-2 px-4 py-4 rounded-full' >
                <Check className="text-green-500" size={30}/>
                
              </div>
              <p className="font-bold text-2xl text-center">E-mail enviado!</p>
              <p className="text-zinc-500 text-sm text-center mb-6">
                Verifique sua caixa de entrada para redefinir sua senha.
              </p>
              <Link href="/login">
                <Button
                  type="button"
                  variant={"link"}
                  className="mx-auto w-fit block  hover:no-underline"
                >
                  Voltar para Entrar
                </Button>
              </Link>
            </div>
          ) :
        <form ref={formRef}
          onSubmit={(ev) => {
            ev.stopPropagation();
            if (formRef.current && formRef.current.reportValidity()) {
              ev.preventDefault();
                handleAction(async ()=>{
                  setEmailSended(await  forgotPassword(formData.email));
                  
                
                })
            }
          }}
          className={`w-[300px] ${isFetch ? " opacity-50 relative pointer-events-none" : ""}`}
        >
        {isFetch && (
  
         <Loading className="absolute top-1/2 left-1/2  -translate-x-1/2  -translate-y-1/2" size={30} />
       
      )}
          <p className="font-bold text-2xl text-center">Esqueceu a senha?</p>
          <p className="text-zinc-500 text-sm mt-2 text-center mb-6">
            Digite seu e-mail para recuperar sua senha
          </p>

          <Input
          required onChange={(ev) => {
            setFormData({
              ...formData,
              email: ev.target.value,
            });
          }}
          type="email" name="email" placeholder="Seu email" />

          <Button className="mt-4 w-full mb-4">Continuar</Button>

          <Link href="/login">
            <Button
            type="button"
              variant={"link"}
              className="mx-auto w-fit block  hover:no-underline"
            >
              Voltar para Entrar
            </Button>
          </Link>
        </form>
}

        <Image className="max-sm:hidden" src={youngWomen} width={200} alt="" />
      </div>
    </motion.div>
    </AnimatePresence>
  );
}
