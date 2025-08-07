import { createContext, useEffect, useState } from "react";
import { databases, client } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";
export const BooksContext = createContext();
const DATABASE_ID = '6894d80e0026c5e3709f'
const COLLECTION_ID = '6894d81f002f0f1ebf6e';
export const BooksProvider = ({ children }) => {
    const { user } = useUser()
    const [books, setbooks] = useState([])
    const fetchBooks = async () => {
        try {
            const res = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [
                    Query.equal('userid', user.$id)
                ]
            )
            setbooks(res.documents)
            console.log(res.documents);

        } catch (error) {
            console.log(error.message);
            throw new Error(error.message)
        }
    }
    const fetchBookById = async (id) => {
        try {
        } catch (error) {
            console.log(error.message);
        }
    }
    const createBook = async (data) => {
        try {
            const newBook = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                { ...data, userid: user.$id },
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),
                ]

            )
        } catch (error) {
            console.log(error.message);
            throw new Error(error.message)
        }
    }
    const deleteBook = async (id) => {
        try {
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        let unsubscribe;
        const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`
        if (user) {
            fetchBooks()
            unsubscribe = client.subscribe(channel, (res) => {
                if(!res.events[0].includes('create'))return;
                setbooks((prevBooks) => [...prevBooks, res.payload])
                console.log(res);
                

            })
        }
        else {
            setbooks([])
        }
        return () => {
            if (unsubscribe) unsubscribe()
        }
    }, [user])

    return (
        <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}>
            {children}
        </BooksContext.Provider >
    )
}