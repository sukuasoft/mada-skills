import Image from "next/image";
import saly_image from "@/assets/saly.png";
import stars from "@/assets/stars.png";
import { Button } from "../ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { useContent } from "@/providers/content-provider";
import bgDev from '@/assets/bg-dev2.jpg';

export default function HomeHeader() {
  const {modules} = useContent();

  return (
    <header className="min-h-screen w-full flex flex-col">
      <div
        className="from-primary to-primary-dark    text-white flex-1 
         mt-[70px] bg-radial flex items-center justify-center relative max-sm:flex-wrap-reverse py-10
         px-10"
      >

<Image className="top-0  mix-blend-multiply
                  select-none  pointer-events-none
                  w-full h-full   object-cover
                absolute left-0  saturate-0 brightness-[1.5]
                
                  "
                    src={bgDev} alt="" />
        <div className="w-[350px]  max-w-full relative">
        
            <Image
              src={stars}
              width={300}
              className="absolute top-0 left-0"
              alt=""
            />
          
       

          <h1 className="text-5xl font-bold relative z-1 max-sm:text-2xl max-sm:text-center">Aprenda programação Web</h1>
          <p className="text-zinc-200 mt-4 mb-6 relative z-1 max-sm:text-center max-sm:mt-2">
            Aprenda programação de forma fácil e divertida com nossos tutoriais
            e exercícios práticos.
          </p>
          <Link className="max-sm:mx-auto max-sm:block max-sm:w-fit" href={modules.length > 0 ? `/tutoriais/${modules[0].slug}`: '#'}>
            <Button>
              Comece agora
              <ArrowRight />
            </Button>
          </Link>
        </div>

        <div className="relative">
        <Image src={saly_image} className="max-sm:w-[180px]" width={400} alt="" />

        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white flex gap-2 text-zinc-800 
        items-center px-2 py-2 rounded-md shadow-md  max-sm:hidden">
              <div className="bg-primary-light p-2 rounded-md">
                <Star  fill="#0B73E1" className="text-primary" size={16} />
              </div>
              5 estrelas
            </div>
        </div>
      </div>
    </header>
  );
}
