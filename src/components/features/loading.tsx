
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";

type LoadingProps = {
    size?:number;
    className?:string;
}
export default function Loading ({size=20, className=''}:LoadingProps){
return (
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
    }} className={className}>
      <Loader2    size={size}/>
      </motion.div>
)
}