"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { User, UserUpdates } from "../models/user";

import {
  loginWithGithub,
  loginWithGoogle,
  login,
  register,
  logout,
  getCurrentUser,
  updateCurrentUser,
  forgotPassword,
  changePassword,
} from "@/services/auth";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

type AppContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  updateUser(updates: UserUpdates): Promise<boolean>;
  changePasswordUser: (currentPassword: string, newPassword: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<void>;
  loginWithGithub: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<void>;
  loaded:boolean;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp deve ser usado dentro do AppProvider");
  }
  return context;
}

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
 const [loaded, setLoaded] = useState<boolean>(false);

  const router = useRouter();

  async function initApp() {
 
    const user = await getCurrentUser();
    setUser(user);
    setLoaded(true);
  }

  useEffect(() => {
    if (loaded) return;
    initApp();
  }, []);

  async function _loginWithGoogle() {
    try {
      const _user = await loginWithGoogle();

      setUser(_user);
      toast.success("Login com Google realizado com sucesso");
    router.push("/");

    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  async function _loginWithGithub() {
    try {
      const _user = await loginWithGithub();
      setUser(_user);
      toast.success("Login com Github realizado com sucesso");
    router.push("/");

    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  async function _login(email: string, password: string) {
    try {
      const _user = await login(email, password);

      setUser(_user);
      toast.success("Login realizado com sucesso");
    router.push("/");

    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  async function _logout() {
    try {
      setUser(null);
      await logout();
      toast.success("Logout realizado com sucesso");
    router.push("/");

    } catch (error) {
      toast.error((error as Error).message);
    }

  }
  async function _register(email: string, password: string, name: string) {
    try {
      const _user = await register(email, password, name);

      setUser(_user);
      toast.success("Registo realizado com sucesso");
    router.push("/");

    } catch (error) {
      toast.error((error as Error).message);
    }
  }
  async function _forgotPassword(email: string) :Promise<boolean>{
    try {
      await forgotPassword(email);
      toast.success("Email de recuperação enviado com sucesso");
      return true;
    } catch (error) {
      toast.error((error as Error).message);
    }
    return false;
  }

  async function updateUser (updates:UserUpdates):Promise<boolean>{
    try {
        await updateCurrentUser(updates);
        setUser({
            ...user, 
            ...updates
        } as User);
   
        toast.success("Dados atualizados com sucesso");
        return true;
      } catch (error) {
        toast.error((error as Error).message);
      }
      return false;

  }

  async function changePasswordUser (currentPassword:string, newPassword:string):Promise<boolean>{
    try {
        await changePassword(currentPassword, newPassword);
      toast.success("Senha alterada com sucesso");
      return true;
    } catch (error) {
      toast.error((error as Error).message);
    }
    return false;
  }

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        loginWithGoogle: _loginWithGoogle,
        loginWithGithub: _loginWithGithub,
        login: _login,
        logout: _logout,
        register: _register,
        forgotPassword: _forgotPassword,
        loaded, 
        loading, setLoading,
        updateUser,
        changePasswordUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
