import { User, UserUpdates } from "@/models/user";
import { auth } from "./firebase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential,
  updateProfile,
  sendPasswordResetEmail,
  AuthError,
  User as FirebaseUser
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function handleFirebaseError(error: AuthError): string {
  switch (error.code) {
    case "auth/email-already-in-use":
      return "Este e-mail já está em uso.";
    case "auth/invalid-email":
      return "O e-mail fornecido é inválido.";
    case "auth/user-not-found":
      return "Usuário não encontrado.";
    case "auth/wrong-password":
      return "Senha incorreta.";
    case "auth/weak-password":
      return "A senha é muito fraca.";
    case "auth/popup-closed-by-user":
      return "O popup foi fechado antes da autenticação.";
    default:
      console.log(error.code);
      return "Ocorreu um erro inesperado. Tente novamente.";
  }
}

export async function login(email: string, password: string): Promise<User> {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return {
      id: userCredential.user.uid,
      name: userCredential.user.displayName || "",
      email: userCredential.user.email || "",
      photoUrl: userCredential.user.photoURL,
      provider: userCredential.user.providerData[0].providerId,
    };
  } catch (ex) {
    const message = handleFirebaseError(ex as AuthError);
    console.log(message);
    throw new Error(message);
  }
}

export async function register(
  email: string,
  password: string,
  name: string
): Promise<User> {
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(userCredential.user, {
      displayName: name,
    });

    return {
      id: userCredential.user.uid,
      name: userCredential.user.displayName || "",
      email: userCredential.user.email || "",
      photoUrl: userCredential.user.photoURL,
      provider: userCredential.user.providerData[0].providerId,
    };
  } catch (ex) {
    const message = handleFirebaseError(ex as AuthError);
    console.log(message);
    throw new Error(message);
  }
}

export async function loginWithGoogle(): Promise<User> {
  try {
    const userCredential: UserCredential = await signInWithPopup(
      auth,
      googleProvider
    );
    return {
      id: userCredential.user.uid,
      name: userCredential.user.displayName || "",
      email: userCredential.user.email || "",
      photoUrl: userCredential.user.photoURL,
      provider: userCredential.user.providerData[0].providerId,
   
    };
  } catch (ex) {
    const message = handleFirebaseError(ex as AuthError);
    console.log(message);
    throw new Error(message);
  }
}

export async function loginWithGithub(): Promise<User> {
  try {
    const userCredential: UserCredential = await signInWithPopup(
      auth,
      githubProvider
    );
    return {
      id: userCredential.user.uid,
      name: userCredential.user.displayName || "",
      email: userCredential.user.email || "",
      photoUrl: userCredential.user.photoURL,
      provider: userCredential.user.providerData[0].providerId,
    };
  } catch (ex) {
    const message = handleFirebaseError(ex as AuthError);
    console.log(message);
    throw new Error(message);
  }
}

export async function logout(): Promise<void> {
  try {
    await signOut(auth);
  } catch (ex) {
    const message = handleFirebaseError(ex as AuthError);
    console.log(message);
    throw new Error(message);
  }
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    return await new Promise((resolve) => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          resolve({
            id: user.uid,
            name: user.displayName || "",
            email: user.email || "",
            photoUrl: user.photoURL,
            provider: user.providerData[0].providerId,
          });
        }
        resolve(null);
      });
    });
  } catch (ex) {
    console.log(handleFirebaseError(ex as AuthError));
  }

  return null;
}


export async function getCurrentFirebaseUser(): Promise<FirebaseUser | null> {
    try {
      return await new Promise((resolve) => {
        auth.onAuthStateChanged((user) => {
         resolve(user)
        });
      });
    } catch (ex) {
      console.log(handleFirebaseError(ex as AuthError));
    }
  
    return null;
  }

  
export async function forgotPassword(email: string): Promise<void> {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (ex) {
    const message = handleFirebaseError(ex as AuthError);
    console.log(message);
    throw new Error(message);
  }
}

export async function changePassword(
  currentPassword: string,
  newPassword: string
): Promise<void> {
  try {
    const user = auth.currentUser;
    if (user) {
      const credential = EmailAuthProvider.credential(user.email || "", currentPassword);
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
    }
  } catch (ex) {
    const message = handleFirebaseError(ex as AuthError);
    console.log(message);
    throw new Error(message);
  }
}



export async function updateCurrentUser(updates:UserUpdates):Promise<void>{
  try{
    const user = await getCurrentFirebaseUser();
    if(user){
      await updateProfile(user, {
        displayName:updates.name,
        photoURL:updates.photoUrl
      });
    }
  }
  catch(ex){
    console.log(handleFirebaseError(ex as AuthError));
  }
}