'use client'


import { createContext, useContext, useState } from "react";


type ModuleContextType = {

    showSidebar: boolean;
    setShowSidebar: (showSidebar:boolean)=>void;

}

const ModuleContext = createContext<ModuleContextType | undefined>(undefined);

export function useModule (){
    const context = useContext(ModuleContext);
    if (!context) {
        throw new Error("useModule deve ser usado dentro do ModuleProvider");
    }
    return context;
}

type ModuleProviderProps = {
    children: React.ReactNode;
}
export function ModuleProvider({ children }: ModuleProviderProps) {
    const [showSidebar, setShowSidebar] = useState(false);

 
  

    return (
        <ModuleContext.Provider value={{showSidebar, setShowSidebar}}>
            {children}
        </ModuleContext.Provider>
    )
}