import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitialsName (name:string){
  const names =  name.split(' ');

  if (names.length == 1){
    if(names[0].length == 1){
      return names[0].charAt(0).toUpperCase();
    }
    else {
      return names[0].charAt(0).toUpperCase() + names[0].charAt(1).toUpperCase();
    }
  }
  else {
    return names[0].charAt(0).toUpperCase() + names[names.length - 1].charAt(0).toUpperCase();
  }
}

export function getShortName(name:string){
  const names =  name.split(' ');

  if (names.length == 1){
   return names[0];
  }
  else {
    return names[0].charAt(0).toUpperCase() + ". " + names[names.length - 1];
  }
}