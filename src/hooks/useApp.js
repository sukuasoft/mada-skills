import { useContext } from "react";

export  function useApp(){
    const app = useContext(AppContext);

    if (!app) {
        throw new Error("useApp deve ser usado dentro de AppProvider");
    }

    return app;
}