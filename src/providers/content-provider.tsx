'use client'

import { getModules } from "@/repositories/module";
import { getTestimonies } from "@/repositories/testimony";
import { createContext, useContext, useEffect, useState } from "react";


type ContentContextType = {

    testimonies: Testimony[];
    modules:Module[];

}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function useContent (){
    const context = useContext(ContentContext);
    if (!context) {
        throw new Error("useContent deve ser usado dentro do ContentProvider");
    }
    return context;
}

type ContentProviderProps = {
    children: React.ReactNode;
}
export function ContentProvider({ children }: ContentProviderProps) {

    const [testimonies, setTestimonies] = useState<Testimony[]>([]);
    const [modules, setModules] = useState<Module[]>([]);

    async function fetchData (){
        const _testimonies =  getTestimonies();
        setTestimonies(_testimonies);

        const _modules =await getModules();
        setModules(_modules);
    }

    useEffect(() => {
        fetchData();
    }, [])
  

    return (
        <ContentContext.Provider value={{testimonies,modules}}>
            {children}
        </ContentContext.Provider>
    )
}