"use client";
import Link from "next/link";
import Image from "next/image";
import icon from "@/assets/icon.png";
import NavbarLink from "./link";
import { Button } from "@/components/ui/button";
import { Menu, User, X } from "lucide-react";
import SidebarModuleLink from "@/components/features/sidebar-module-link";
//import { useState } from "react";
import { useApp } from "@/providers/app-provider";
import { getInitialsName, getShortName } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContent } from "@/providers/content-provider";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type NavbarProps = {
  currentPage?: string;
};

const navbarSections = [
  {
    title: "Tutoriais",
    baseUrl: "/tutoriais",
    page: "tutoriais",
  },
  {
    title: "Exercícios",
    baseUrl: "/exercicios",
    page: "exercicios",
  },
  {
    title: "Certificados",
    baseUrl: "/certificados",
    page: "certificados",
  },
];

export default function Navbar({ currentPage }: NavbarProps) {
  const { user, loaded, logout } = useApp();
  const { modules } = useContent();
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  return (
    <div>
      <nav className="bg-white z-[10] fixed top-0 left-0  px-10 max-sm:px-4 py-4 w-full flex items-center shadow-xs">
        <Link href="/">
          <Image src={icon} width={100} alt="" />
        </Link>

        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            key={showNavbar ? "show" : "hide"}
            className={`relative mx-auto flex gap-4 items-center ${
              showNavbar
                ? `max-sm:mx-0 max-sm:fixed 
        max-sm:top-0 max-sm:right-0 max-sm:w-fit  max-sm:bg-white max-sm:flex-col
        max-sm:px-6 max-sm:py-2  max-sm:h-full max-sm:shadow-xl`
                : "max-sm:hidden"
            }`}
          >
            <button
              onClick={() => {
                setShowNavbar(false);
              }}
              className={`${showNavbar ? ` min-sm:hidden ` : " hidden "}`}
            >
              <X />
            </button>
            <NavbarLink href="/" current={currentPage == "home"}>
              Início
            </NavbarLink>

            {navbarSections.map((section) => {
              return (
                <DropdownMenu key={section.page}>
                  <DropdownMenuTrigger className=" outline-none ring-0 border-none">
                    <div
                      key={section.page}
                      className={`${
                        currentPage == section.page
                          ? "text-primary"
                          : "text-zinc-600 hover:text-zinc-800"
                      } flex gap-1 items-center`}
                    >
                      {section.title}
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="border-none"
                    side="bottom"
                    align="center"
                  >
                    <DropdownMenuLabel className="  font-normal text-zinc-400">
                      {section.title}
                    </DropdownMenuLabel>
                    <hr className="border-[#eee]" />
                    <div className="flex flex-col gap-2 text-xs px-2 py-2">
                      {modules.map((module) => {
                        return (
                          <Link
                            className="hover:opacity-75"
                            href={`${section.baseUrl}/${module.slug}`}
                            key={module.id}
                          >
                            {module.title}
                          </Link>
                        );
                      })}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {loaded ? (
          user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className=" outline-none ring-0 border-none max-sm:ml-auto">
                <div className="border-primary  border-2 rounded-full overflow-hidden select-none">
                  {user.photoUrl ? (
                    <img src={user.photoUrl} width={30} height={30} alt="" />
                  ) : (
                    <div
                      className="bg-[#AAA] w-[30px] h-[30px] flex justify-center items-center
            text-white"
                    >
                      {getInitialsName(user.name)}
                    </div>
                  )}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="border-none"
                side="bottom"
                align="end"
              >
                <DropdownMenuLabel className="text-xs font-bold">
                  {getShortName(user.name)}
                </DropdownMenuLabel>
                <hr className="border-[#eee] mb-2" />
                <div className="flex flex-col gap-2 text-xs px-2">
                  <Link className="hover:opacity-75" href="/dashboard">
                    Dashboard
                  </Link>
                  <Link className="hover:opacity-75" href="/perfil">
                    Perfil
                  </Link>
                  <button
                    className="hover:opacity-75 cursor-pointer text-red-500 block w-fit"
                    onClick={logout}
                  >
                    Sair
                  </button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex gap-4 items-center max-sm:ml-auto ">
              <Link href="/login">
                <Button variant={"outline"} className="text-primary max-sm:text-xs  max-sm:px-2 max-sm:py-1">
                  <User />
                  Entrar
                </Button>
              </Link>
              <Link href="/registro">
                <Button className="max-sm:text-xs max-sm:px-2 max-sm:py-1 ">Inscreve-se</Button>
              </Link>
            </div>
          )
        ) : (
          <></>
        )}

        <button
          onClick={() => {
            setShowNavbar(true);
          }}
          className="ml-2 min-sm:hidden"
        >
          <Menu />
        </button>
      </nav>

      {/*show && (
        <div
          className="fixed top-0 left-0 h-screen w-full flex pt-[70px] flex-col z-[2]
    "
        >
          <div className="bg-white flex-1 py-6 px-10">
            <div className=" flex flex-wrap gap-4 items-center">
              <SidebarModuleLink
                tutorial="HTML"
                module="Tags basicas"
                href="tutoriais/1"
              />
              <SidebarModuleLink
                tutorial="HTML"
                module="Tags basicas"
                href="tutoriais/1"
              />
              <SidebarModuleLink
                tutorial="HTML"
                module="Tags basicas"
                href="tutoriais/1"
              />
            </div>
          </div>
        </div>
      )*/}
    </div>
  );
}
