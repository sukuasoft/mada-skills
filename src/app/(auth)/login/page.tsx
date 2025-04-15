import Image from 'next/image';
import youngWomen from '@/assets/young-women.png';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

import googleIcon from '@/assets/google.png';
import icon from '@/assets/icon.png';
import Link from 'next/link';

export default function Login (){
    return (
        <div className="px-10 py-10 min-h-screen flex flex-col">
           <Link href='/'>
           <Image src={icon} width={100} alt=''/></Link>
           
            <div className='flex-1  flex gap-6 items-center justify-center'>

            <div className='w-[300px]'>
                    <p className='font-bold text-2xl text-center'>Seja bem vindo de volta</p>
 
                    <div className='flex flex-col gap-2 mt-6'>
                        <Label>E-mail</Label>
                        <Input placeholder='Seu email'/>
                    </div>

                    <div className='flex flex-col gap-2 mt-4'>
                        <Label>Senha</Label>
                        <Input placeholder='Sua senha'/>
                    </div>

                   <Link href='/forgot-password'>
                   <Button variant={'link'} className='mt-2 ml-auto w-fit block'>Esqueci a senha</Button>
                   </Link>

                   <div className='flex flex-col gap-2 mt-4'>
                   <Button>Entrar</Button>
                    <Button variant={'outline'} className='border-zinc-300 hover:bg-zinc-100 hover:text-black'>
                        <Image src={googleIcon} width={20} alt=''/>

                        Continuar com google

                    </Button>
                   </div>
                   <p className='text-zinc-500 text-sm mt-6 text-center'>Ainda não tem conta? <Link href='/register' className='text-primary'>Crie</Link></p>
                  
                </div>

                <Image  src={youngWomen} width={200} alt=''/>

            </div>

                

 
        </div>
    )
}