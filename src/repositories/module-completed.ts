import { createDoc, findDoc, updateDoc } from "@/services/firestore";

export async function addModuleCompleted(
  userId: string,
  moduleCompleted: ModuleCompleted
): Promise<boolean> {
  return false;
}

export async function getModulesCompleted(
  userId: string
): Promise<ModuleCompleted[]> {
  const userDoc = await findDoc("users", userId);
  if (userDoc && userDoc.modulesCompleted) {
    return userDoc.modulesCompleted;
  }

  return [];
}
