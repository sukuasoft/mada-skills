import {motion} from 'motion/react';
import { Loader2 } from "lucide-react";
import Image from 'next/image';
import icon from '@/assets/icon.png';


export default function LoadingScreen (){

return (
    <div className="fixed top-0 left-0 w-full z-[100000] h-screen bg-primary  text-black flex justify-center
    items-center flex-col">
        <Image className=' brightness-0 invert' src={icon} width={150} alt="" />
           <motion.div 
                    initial={{
                        rotate: 0,
                    }}
                    animate={{
                        rotate: 360,
                    }} transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                    }} className="mt-4">
                      <Loader2  className='text-white'   size={20}/>
                      </motion.div>

    </div>
)

}