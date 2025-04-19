import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitialsName(name: string) {
  const names = name.split(" ");

  if (names.length == 1) {
    if (names[0].length == 1) {
      return names[0].charAt(0).toUpperCase();
    } else {
      return (
        names[0].charAt(0).toUpperCase() + names[0].charAt(1).toUpperCase()
      );
    }
  } else {
    return (
      names[0].charAt(0).toUpperCase() +
      names[names.length - 1].charAt(0).toUpperCase()
    );
  }
}

export function getShortName(name: string) {
  const names = name.split(" ");

  if (names.length == 1) {
    return names[0];
  } else {
    return names[0].charAt(0).toUpperCase() + ". " + names[names.length - 1];
  }
}

export async function delayInSeconds(seconds: number) {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}


export function generateSlug(name: string) {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return slug;
}