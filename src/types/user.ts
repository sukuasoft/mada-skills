export type User = {
    id:string;
    name:string;
    email:string;
    photoUrl:string|null;
    provider:string;
}

export type UserUpdates = {
    name?:string;
    photoUrl?:string;
}