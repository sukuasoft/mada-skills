import Navbar from "@/components/layout/navbar";
import UserSidebar from "@/components/layout/user-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className="pt-[100px] pb-[10px] flex min-h-screen gap-6">
        <UserSidebar />

        <div>
          <p className="font-bold  text-sm">Sebastião Sukuakueche</p>
          <p className="mb-6 text-zinc-400 text-sm">sukuakueches@gmail.com</p>

          <h2 className="font-bold mb-2">Mudar nome</h2>
          <div className="pb-4 border-[#eee] border-solid border-b">
          <Input placeholder="Seu nome completo" />



            <Button variant={'ghost'} className='mt-4  text-primary'>Atualizar</Button>
          </div>


          <h2 className="font-bold mt-4 ">Trocar senha</h2>
          <div>
            <div className="flex flex-col gap-2 mt-4">
              <Label>Senha atual</Label>
              <Input placeholder="Senha atual" />
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <Label>Nova Senha</Label>
              <Input type="password" placeholder="Nova senha" />
            </div>

            <Button  variant={'ghost'} className="mt-4 text-primary">Atualizar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
