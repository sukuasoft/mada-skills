
import { firestore } from "./firebase";
import {
  addDoc,
  collection,
  setDoc,
  getDocs,
  getDoc,
  updateDoc as updateDocFirestore, 
  deleteDoc,
  doc,
  DocumentReference,
} from "firebase/firestore";

export async function createDoc(
  col: string,
  data: any,
  id?: string
): Promise<any | null> {
  try {
    const docResult = id
      ? await setDoc(doc(firestore, col, id), data)
      : await addDoc(collection(firestore, col), data);

    return {
      id: id ? id : (docResult as DocumentReference).id,
      ...data,
    };
  } catch (ex) {
    console.log(ex);
  }
  return null;

}

export async function findDocs(col: string): Promise<any[] | null> {
  try {
    const docsResult = await getDocs(collection(firestore, col));
    return docsResult.docs.map((docResult) => {
      return {
        id: docResult.id,
        ...docResult.data(),
      };
    });
  } catch (ex) {
    console.log(ex);
  }
  return null;

}


export async function findDoc (col:string, id:string):Promise<any|null>{
    try{
        const docResult = await getDoc(doc(firestore, col, id));
        if (docResult.exists()){
            return {
                id: docResult.id,
                ...docResult.data()
            }
        }
    }
    catch(ex){
        console.log(ex);
    }
    return null;

}


export async function updateDoc (col:string, id:string, data:any):Promise<boolean>{
    try {
       await updateDocFirestore(doc(firestore, col, id), data);
       return true;
    }catch (ex){
        console.log(ex);
    }
    return false;

}

export async function destroyDoc (col:string, id:string):Promise<boolean>{
    try{
        await deleteDoc(doc(firestore, col, id));
        return true;
    }catch(ex){
        console.log(ex);
    }
    return false;

}