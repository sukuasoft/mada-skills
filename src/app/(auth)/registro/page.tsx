"use client";

import Image from "next/image";
import youngWomen from "@/assets/young-women.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import googleIcon from "@/assets/google.png";
import githubIcon from "@/assets/github.png";
import icon from "@/assets/icon.png";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {AnimatePresence, motion } from 'motion/react';
import { useApp } from "@/providers/app-provider";
import { useRouter } from "next/navigation";
import Loading from "@/components/features/loading";


type FormData = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isFetch, setIsFetch] = useState(false);

    const {register, loginWithGoogle, loginWithGithub, user, loaded,setLoading} = useApp();
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
    name: "",
    email: "",
    password: "",
  });

   
  

  async function handleAction(action:()=>Promise<void>) {
    if(isFetch) return;
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
    key="register"
     className="px-10 py-10 min-h-screen flex flex-col">
      <Link href="/" className="w-fit">
        <Image src={icon} width={100} alt="" />
      </Link>

      <div className="flex-1  flex gap-6 items-center justify-center">
        <form
          ref={formRef}
          onSubmit={(ev) => {
            ev.stopPropagation();
            if (formRef.current && formRef.current.reportValidity()) {
              ev.preventDefault();
                handleAction(async ()=>{
                  await  register(formData.email, formData.password, formData.name);
                
                })
            }
          }}
          className={`w-[300px] ${isFetch ? " opacity-50 relative pointer-events-none" : ""}`}
        >
      {isFetch && (
         <Loading className="absolute top-1/2 left-1/2  -translate-x-1/2  -translate-y-1/2" size={30} />
      
      )}
          <p className="font-bold text-2xl text-center">Crie uma conta</p>

          <div className="flex flex-col gap-2 mt-6">
            <Label>Nome Completo</Label>
            <Input
              name="name"
              onChange={(ev) => {
                setFormData({
                  ...formData,
                  name: ev.target.value,
                });
              }}
              required
              placeholder="Seu nome completo"
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <Label>E-mail</Label>
            <Input
              onChange={(ev) => {
                setFormData({
                  ...formData,
                  email: ev.target.value,
                });
              }}
              name="email"
              required
              placeholder="Seu email"
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <Label>Senha</Label>
            <Input
            minLength={6}
                maxLength={20}
              onChange={(ev) => {
                setFormData({
                  ...formData,
                  password: ev.target.value,
                });
              }}
              name="password"
              required
              type="password"
              placeholder="Sua senha"
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <Button>Criar conta</Button>
            <Button
            type="button"
            onClick={()=>{
                handleAction(async ()=>{
                    await loginWithGithub();
                })
            }}
              variant={"outline"}
              className="border-black bg-black
                    hover:text-zinc-100 text-white hover:bg-[#202020]"
            >
              <Image className="invert" src={githubIcon} width={20} alt="" />
              Continuar com Github
            </Button>
            <Button
            type="button"
            onClick={()=>{
                handleAction(async ()=>{
                    await loginWithGoogle();
                })
            }}
              variant={"outline"}
              className="border-zinc-300 hover:bg-zinc-100 hover:text-black"
            >
              <Image src={googleIcon} width={20} alt="" />
              Continuar com google
            </Button>
          </div>
          <p className="text-zinc-500 text-sm mt-6 text-center">
            Ja tens conta?{" "}
            <Link href="/login" className="text-primary">
              Entrar
            </Link>
          </p>
        </form>

        <Image src={youngWomen} width={200} alt="" />
      </div>
    </motion.div>
    </AnimatePresence>
  );
}
