import Link from "next/link";
import {ArrowUpRight}from'lucide-react';


type TutorialCardProps = {
    title:string;
    image:string;
    href:string;
}
export default function TutorialCard ({title, image, href}:TutorialCardProps) {

    return (
        <div className="bg-white text-black w-[150px]   px-4 pt-8 pb-3 rounded-xl shadow-md">
            <img src={image} width={50} height={50} className="object-cover mx-auto mb-8" alt={title}/>
            <h2 className="mb-2">{title}</h2>

            <div  className="bg-[#eee] h-[1px]"></div>
            <Link href={href} className='text-primary flex text-sm items-center gap-1 ml-auto w-fit mt-3'>
                Começar
                <div>
        <ArrowUpRight size={18} />
                </div>
            </Link>
        </div>
    )

}