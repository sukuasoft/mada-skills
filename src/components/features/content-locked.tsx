"use client";

import { useApp } from "@/providers/app-provider";
import { useMemo } from "react";
import { motion } from "motion/react";
import {  Lock } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

type ContentLockedProps = {
  module: Module;
};
export default function ContentLocked({ module }: ContentLockedProps) {
  const { user, loaded } = useApp();

  const showLocked = useMemo(() => {
    if (loaded && !user) {
      if (
        module.slug != "html" &&
        module.slug != "css" &&
        module.slug != "javascript"
      )
        return true;
    }

    return false;
  }, [user, loaded, module]);

  return showLocked ? (
    <div className="fixed top-0 left-0 w-full z-[300000000] bg-[#000000e3]  h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center mx-3 
            w-[350px] max-w-full"
      >
        <div className={`bg-red-100 mb-2 px-4 py-4 rounded-full w-fit mx-auto`}>
          <Lock className="text-red-500" size={30} />
        </div>

        <h1 className="text-2xl font-bold text-center">Conteúdo bloqueado</h1>
        <p className="text-gray-600 text-center mt-2">
            Você precisa ser um usuário registrado para acessar este conteúdo.
        </p>
        <Link className="mt-6" href='registro'>
        <Button>Inscreva-se agora</Button>
        </Link>
    
        <div className="flex items-center gap-1 mt-4 border-t border-solid border-[#eee] text-sm w-full 
        justify-center px-2 pt-2">
            Ou acesse:
           <div className="flex items-center gap-1 text-[#eee]">
           <Link className="text-primary" href='/tutoriais/html'>HTML</Link> |
            <Link className="text-primary" href='/tutoriais/css'>CSS</Link> |
            <Link className="text-primary" href='/tutoriais/javascript'>Javascript</Link>
           </div>
        </div>
    
      </motion.div>
    </div>
  ) : (
    <></>
  );
}
