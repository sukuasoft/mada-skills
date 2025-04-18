import { ID } from "appwrite";
import { storage } from "./appwrite";

const bucketAvatars = "6801707b00294433127e";

export async function uploadFile(file: File, id?:string):Promise<string | null> {
  try {
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
