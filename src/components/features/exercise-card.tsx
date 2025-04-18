import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type ExerciseCardProps = {
    title:string;
    href:string;
    icon:string;
}

export default function ExerciseCard ({title, href, icon}:ExerciseCardProps){
    
    return (
        <Link href={href} className="shadow-xl w-[200px] bg-white px-4 py-2 rounded-xl flex group items-center gap-2
        hover:outline hover:outline-solid hover:outline-primary duration-200">
            <img src={icon} width={25} height={25} className="object-cover 
            opacity-50
            saturate-0 group-hover:saturate-100 group-hover:opacity-100 duration-200" alt={title}/>
            <h2 >{title}</h2>
            <div className='group-hover:bg-primary px-1 py-1 duration-200 rounded-md text-primary group-hover:text-white ml-auto'>
                <ArrowUpRight size={18} />
            </div>
         
        </Link>
    )
    
}