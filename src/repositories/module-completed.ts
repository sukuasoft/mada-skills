import { createDoc, findDoc, updateDoc } from "@/services/firestore";

export async function addModuleCompleted(
  userId: string,
  moduleCompleted: ModuleCompleted
): Promise<ModuleCompleted[]> {
  const modulesCompleted = await getModulesCompleted(userId);

  const _moduleCompleted = modulesCompleted.find(
    (module) => module.slug === moduleCompleted.slug
  );

  if (_moduleCompleted) {
    if (_moduleCompleted.score < moduleCompleted.score) {
      _moduleCompleted.score = moduleCompleted.score;
    }
  } else {
    modulesCompleted.push(moduleCompleted);
  }

  await updateDoc("users", userId, {
    modulesCompleted: modulesCompleted,
  });

  return modulesCompleted;
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
