import { Client, Storage } from 'appwrite';

const appwriteClient = new Client();
appwriteClient
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68016f89000cbc568df3');


export const storage = new Storage(appwriteClient);