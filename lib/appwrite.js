import { Client, Account, Models,Databases } from 'react-native-appwrite';
export const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('688cc402000d743dd984')   // Your Project ID
    .setPlatform('dev.shelfie.app');

export const account = new Account(client);
export const databases = new Databases(client)