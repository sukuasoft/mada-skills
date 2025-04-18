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

export default function Home() {
  return (
    <div>
      <Navbar currentPage="home" />
      <HomeHeader />

      <div className="flex gap-4 px-10 py-10 bg-[#e9f3ff] items-center">
        <div className="flex gap-1 flex-col">
          <p className="text-primary-dark font-bold text-3xl">Melhores</p>
          <div className="bg-primary-dark h-[1px]"></div>
          <p className="text-primary  font-bold text-3xl">Tutoriais</p>
        </div>

        <Carousel className="mx-20 w-[500px]">
          <CarouselContent className=" flex gap-4 px-10 py-6">
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <CarouselItem key={index} className="basis-1/3">
                  <TutorialCard
                    title="HTML"
                    href="/tutoriais"
                    image="/images/tutoriais/html.png"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <HomeSection
        title="Mais Exercícios"
        description="Várias versões evoluíram ao longo dos anos, não por acidente, 
mas como resultado da prática contínua e da busca intencional por aprimoramento."
      >
        <div className="flex gap-4 flex-wrap items-center">
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <ExerciseCard
                key={index}
                title="HTML"
                icon="/images/tutoriais/html.png"
                href="/tutoriais"
              />
            );
          })}
        </div>
      </HomeSection>
      <HomeSection
        title="Nossas conquistas"
        description='Formamos novos talentos em programação web, conectando alunos ao mercado com projetos práticos e reais."'
      >
        <div className="flex gap-4 items-center justify-between">
          <div className="grid grid-cols-2 gap-6">
            <Conquista title="Tutoriais" value={10} icon={<BookOpen />} />
            <Conquista title="Exercícios" value={200} icon={<Dumbbell />} />
            <Conquista
              title="Estudantes"
              value={100}
              icon={<GraduationCap />}
            />
            <Conquista title="Certificações" value={15} icon={<FileBadge />} />
          </div>

          <Image width={250} src={youngWomen} alt="" />
        </div>
      </HomeSection>

      <HomeSection
        title="Nossas testemunhos"
        description="Veja o que os nossos alunos têm a dizer! Suas histórias refletem o impacto real da nossa plataforma"
      >
        <Carousel className="mx-20 ">
          <CarouselContent className=" flex gap-4 px-10 py-6">
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <CarouselItem key={index} className="basis-1/2">
                  <TestemunhoCard
                    name="João Silva"
                    position="Desenvolver Frontend"
                    content="Comecei sem saber nada de programação. Com os cursos da Madaskills, aprendi HTML, CSS e já estou criando meus próprios sites. O conteúdo é direto ao ponto e os exercícios me ajudaram muito!"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </HomeSection>

      <div className="flex gap-4 px-10 py-10 bg-[#e9f3ff] items-center text-black justify-center">
        <Image width={250} src={youngGroup} alt="" />

        <div className="w-[300px]">
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
