import { createDoc, findDoc } from "@/services/firestore";

export async function getUserData(userId: string): Promise<UserData> {
  let userDoc = await findDoc("users", userId);
  if (userDoc) {
    return userDoc;
  }
  const userDocData: UserData = {
    modulesCompleted: [],
  };

  await createDoc("users", userDocData, userId);

  return userDocData;
}
