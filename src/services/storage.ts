import { ID } from "appwrite";
import { storage } from "./appwrite";

const bucketAvatars = "6801707b00294433127e";

export async function uploadFile(file: File, id?:string):Promise<string | null> {


  try {

    if(id && await existsFile(id)){
       await deleteFile(id);
    }

    const fileResult = await storage.createFile(
      bucketAvatars,
      id ? id: ID.unique(),
      file
    );
    const fileUrl = storage.getFileView(bucketAvatars, fileResult.$id);
    return fileUrl;
  } catch (ex) {
    console.log(ex);
  }
  return null
}

export async function existsFile (id:string):Promise<boolean>{
  try{
    const fileResult = await storage.getFile(bucketAvatars, id);
    return true;
  }
  catch(ex){
    return false;
  }
}

export async function deleteFile (id:string):Promise<boolean>{
  try{
    await storage.deleteFile(bucketAvatars, id);
    return true;
  }
  catch(ex){
    console.log(ex);
  }
  return false;
}