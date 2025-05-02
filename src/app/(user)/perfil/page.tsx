"use client";

import Navbar from "@/components/layout/navbar";
import UserSidebar from "@/components/layout/user-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApp } from "@/providers/app-provider";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import googleIcon from "@/assets/google.png";
import githubIcon from "@/assets/github.png";
import Image from "next/image";
import { Upload } from "lucide-react";
import { uploadFile } from "@/services/storage";
import { UserUpdates } from "@/models/user";
import toast from "react-hot-toast";
import { getInitialsName } from "@/lib/utils";

type DadosFormData = {
  image?: File;
  name?: string;
};

type ChangePasswordFormData = {
  currentPassword: string;
  newPassword: string;
};
export default function Profile() {
  const { loaded, user, setLoading, updateUser, changePasswordUser } = useApp();

  const [dadosFormData, setDadosFormData] = useState<DadosFormData>({});
  const [dadosIsFetch, setDadosIsFetch] = useState(false);
  const dadosFormRef = useRef<HTMLFormElement | null>(null);

  const [changePasswordFormData, setChangePasswordFormData] =
    useState<ChangePasswordFormData>({
      currentPassword: "",
      newPassword: "",
    });
  const [changePasswordIsFetch, setChangePasswordIsFetch] = useState(false);
  const changePasswordFormRef = useRef<HTMLFormElement | null>(null);

  async function updateDataUser() {
    if (dadosIsFetch) return;
    setDadosIsFetch(true);

    const userUpdates: UserUpdates = {};

    if (dadosFormData.image) {
      const imageUrl = await uploadFile(dadosFormData.image, user?.id);
      if (imageUrl) {
        userUpdates.photoUrl = imageUrl;
      } else {
        toast.error("Erro ao atualizar imagem");
      }
    }
    if (dadosFormData.name) {
      userUpdates.name = dadosFormData.name;
    }
    if (await updateUser(userUpdates)) {
      if (dadosFormRef.current) {
        dadosFormRef.current.reset();
      }
      setDadosFormData({
        image: undefined,
        name: undefined,
      });
    }

    setDadosIsFetch(false);
  }

  async function changePassword() {
    if (
      changePasswordIsFetch ||
      !(
        changePasswordFormRef.current &&
        changePasswordFormRef.current.reportValidity()
      )
    )
      return;

    setChangePasswordIsFetch(true);
    if (
      await changePasswordUser(
        changePasswordFormData.currentPassword,
        changePasswordFormData.newPassword
      )
    ) {
      changePasswordFormRef.current.reset();
      setChangePasswordFormData({
        currentPassword: "",
        newPassword: "",
      });
    }

    setChangePasswordIsFetch(false);
  }

  const imageUser = useMemo(() => {
    if (dadosFormData.image) {
      return URL.createObjectURL(dadosFormData.image);
    }

    if (user && user.photoUrl) {
      return user.photoUrl;
    }
  }, [user, dadosFormData]);

  const router = useRouter();

  useEffect(() => {
    if (!loaded) return;

    if (!user) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [user, loaded]);

  return (
    <div>
      <Navbar />
      <div className="pt-[100px] pb-[20px] flex min-h-screen gap-6">
        <UserSidebar />

        {user && (
          <div className="max-sm:px-6">
            <p className="font-bold  text-sm">{user.name}</p>
            <p className="mb-6 text-zinc-400 text-sm">{user.email}</p>

            <h2 className="font-bold mb-2">Dados</h2>
            <form
              ref={dadosFormRef}
              className="pb-4 border-[#eee] border-solid border-b"
            >
              <div className="flex items-center gap-2 mb-4">
                <input
                  onChange={(ev) => {
                    const file = (ev.target as HTMLInputElement).files?.[0];
                    if (file) {
                      setDadosFormData({
                        ...dadosFormData,
                        image: file,
                      });
                    }
                  }}
                  accept="image/png, image/jpeg, image/jpg"
                  id="file-image"
                  type="file"
                  className="hidden"
                />
                {imageUser ? (
                  <img
                    src={imageUser}
                    className={`rounded-full overflow-hidden`}
                    width={30}
                    height={30}
                    alt=""
                  />
                ) : (
                  <div
                    className="bg-[#AAA] w-[30px] h-[30px] flex justify-center items-center rounded-full overflow-hidden
                              text-white"
                  >
                    {getInitialsName(user.name)}
                  </div>
                )}

                <label
                  htmlFor="file-image"
                  className="border border-[#eee] hover:bg-zinc-50 active:bg-zinc-100 shadow-xs px-4 py-1 text-xs flex gap-2
                rounded-xl items-center"
                >
                  <Upload size={10} />
                  Selecionar imagem
                </label>
              </div>
              <Input
                name="name"
                onChange={(ev) => {
                  setDadosFormData({
                    ...dadosFormData,
                    name: ev.target.value,
                  });
                }}
                placeholder="Seu nome completo"
              />

              <Button
                type="button"
                onClick={updateDataUser}
                disabled={
                  dadosIsFetch || (!dadosFormData.image && !dadosFormData.name)
                }
                variant={"ghost"}
                className="mt-4  text-primary"
              >
                Atualizar
              </Button>
            </form>

            {user.provider.includes("password") ? (
              <>
                <h2 className="font-bold mt-4 ">Trocar senha</h2>
                <form ref={changePasswordFormRef}>
                  <div className="flex flex-col gap-2 mt-4">
                    <Label>Senha atual</Label>
                    <Input
                      required
                      minLength={6}
                      maxLength={20}
                      onChange={(ev) => {
                        setChangePasswordFormData({
                          ...changePasswordFormData,
                          currentPassword: ev.target.value,
                        });
                      }}
                      name="current-password"
                      type="password"
                      placeholder="Senha atual"
                    />
                  </div>

                  <div className="flex flex-col gap-2 mt-4">
                    <Label>Nova Senha</Label>
                    <Input
                      required
                      minLength={6}
                      maxLength={20}
                      onChange={(ev) => {
                        setChangePasswordFormData({
                          ...changePasswordFormData,
                          newPassword: ev.target.value,
                        });
                      }}
                      name="new-password"
                      type="password"
                      placeholder="Nova senha"
                    />
                  </div>

                  <Button
                    disabled={
                      changePasswordIsFetch ||
                      !changePasswordFormData.currentPassword ||
                      !changePasswordFormData.newPassword
                    }
                    type="button"
                    onClick={changePassword}
                    variant={"ghost"}
                    className="mt-4 text-primary"
                  >
                    Atualizar
                  </Button>
                </form>
              </>
            ) : (
              <p className="mt-4 text-sm text-zinc-700 flex gap-2 items-center">
                <Image
                  src={
                    user.provider.includes("github") ? githubIcon : googleIcon
                  }
                  width={20}
                  alt=""
                />
                {user.provider.includes("github")
                  ? "Logado via Github"
                  : "Logado via Google"}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
