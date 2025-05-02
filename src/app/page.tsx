'use client'
import ExerciseCard from "@/components/features/exercise-card";
import TutorialCard from "@/components/features/tutorial-card";
import HomeHeader from "@/components/layout/home-header";
import HomeSection from "@/components/layout/home-section";
import Navbar from "@/components/layout/navbar";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

import youngWomen from "@/assets/young-women.png";
import youngGroup from "@/assets/young-group.png";
import Conquista from "@/components/features/conquista";

import { GraduationCap, Dumbbell, BookOpen, FileBadge } from "lucide-react";
import TestemunhoCard from "@/components/features/testemunho-card";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import Footer from "@/components/layout/footer";
import { useContent } from "@/providers/content-provider";


export default function Home() {
  const {testimonies, modules}=useContent();
  return (
    <div>
      <Navbar currentPage="home" />
      <HomeHeader />

      <div className="flex flex-col gap-4 px-10 py-10 bg-[#e9f3ff] 
      w-screen ">
        <div className="flex gap-1 flex-col max-sm:w-fit  w-fit
         ">
          <p className="text-primary-dark font-bold text-3xl">Melhores</p>
          <div className="bg-primary-dark h-[1px]"></div>
          <p className="text-primary  font-bold text-3xl">Tutoriais</p>
        </div>

        <div className="px-15">
        <Carousel className="w-full ">
          <CarouselContent className=" ">
            {modules.map((module) => {
              return (
                <CarouselItem key={module.id} className="basis-0 flex-none">
                  <TutorialCard
                    title={module.title}
                    href={`/tutoriais/${module.slug}`}
                    image={module.icon}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext/>
        </Carousel>
        </div>
      </div>

      <HomeSection
        title="Mais Exercícios"
        description="Várias versões evoluíram ao longo dos anos, não por acidente, 
mas como resultado da prática contínua e da busca intencional por aprimoramento."
      >
        <div className="flex gap-4 flex-wrap items-center max-sm:items-center max-sm:justify-center">
          {modules.map((module) => {
            return (
              <ExerciseCard
                key={module.id}
                title={module.title}
                icon={module.icon}
                href={`/exercicios/${module.slug}`}
              />
            );
          })}
        </div>
      </HomeSection>
      <HomeSection
        title="Nossas conquistas"
        description='Formamos novos talentos em programação web, conectando alunos ao mercado com projetos práticos e reais."'
      >
        <div className="flex gap-4 items-center justify-between max-sm:justify-start">
          <div className="grid grid-cols-2 max-[400px]:flex max-[400px]:flex-wrap gap-6
          max-sm:w-full max-[400px]:justify-center">
            <Conquista title="Tutoriais" value={30} icon={<BookOpen />} />
            <Conquista title="Exercícios" value={50} icon={<Dumbbell />} />
            <Conquista
              title="Estudantes"
              value={25}
              icon={<GraduationCap />}
            />
            <Conquista title="Certificações" value={10} icon={<FileBadge />} />
          </div>

          <Image className="max-sm:hidden" width={250} src={youngWomen} alt="" />
        </div>
      </HomeSection>

      <HomeSection
        title="Nossas testemunhos"
        description="Veja o que os nossos alunos têm a dizer! Suas histórias refletem o impacto real da nossa plataforma"
      >
        
        <div className="px-5">
        <Carousel className="w-full ">
          <CarouselContent className=" flex gap-4 px-10 py-6 ">
            {testimonies.map((item, index) => {
              return (
                <CarouselItem key={index} className="basis-0 flex-none">
                  <TestemunhoCard
                    name={item.name}
                    position={item.position}
                    content={item.content}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </div>
      </HomeSection>

      <div className="flex gap-4 px-10 py-10 max-sm:flex-wrap max-sm:text-center bg-[#e9f3ff] items-center text-black justify-center">
        <Image width={250} src={youngGroup} alt="" />

        <div className="w-[300px] max-w-full">
          <p className="mb-2 font-bold">
            Junte-se à <span className="text-primary">maior plataforma </span>
            aprendizagem do mundo hoje mesmo
          </p>
          <p className="text-sm mb-4">Comece a aprender</p>
          <Link href="/registro">
            <Button>Inscreve-se</Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
