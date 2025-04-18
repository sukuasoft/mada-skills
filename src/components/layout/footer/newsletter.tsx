'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useRef, useState } from "react";
import { createDoc } from "@/services/firestore";
import toast from "react-hot-toast";

type FormData = {
  email: string;
};
export default function Newsletter() {
    const [isFetch, setIsFetch] =useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });
  async function subscribe() {
    if (isFetch) return;
    setIsFetch(true);
   const newsletterDoc = await createDoc("newsletter", {
      email: formData.email,
    });

    if (newsletterDoc) {
      toast.success("Inscrição realizada com sucesso!");
        if (formRef.current){
            formRef.current.reset();
        }
      setFormData({
        email: "",
      });
    } else {
      toast.error("Erro ao inscrever-se na newsletter.");
    }
    
    setIsFetch(false);
  }
  return (
    <form
      ref={formRef}
      onSubmit={(ev) => {
        ev.preventDefault();
        if (formRef.current && formRef.current.reportValidity()) {
          subscribe();
        }
      }}
      className="text-sm w-[250px] ml-auto"
    >
      <p className="font-bold mb-1">Newsletter</p>
      <p className="opacity-75 text-xs mb-3">
        Receba dicas e conteúdos sobre programação web no seu e-mail. Faça parte
        da nossa comunidade!
      </p>
      <Input
      required
        name="email"
        type="email"
        onChange={(ev) => {
          setFormData({
            ...formData,
            email: ev.target.value,
          });
        }}
        placeholder="Email"
        className=" placeholder:text-[#b3b3b372] border-none mb-4 bg-[#eeeeee23]"
      />
      <Button disabled={isFetch} type="submit">Inscrever-se agora</Button>
    </form>
  );
}
