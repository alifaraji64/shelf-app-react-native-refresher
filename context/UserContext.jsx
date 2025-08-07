import { createContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from 'react-native-appwrite'
export const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [authChecked, setauthChecked] = useState(false)
    async function login(email, password) {
        try {
            await account.createEmailPasswordSession(email, password)
            const response = await account.get();
            setUser(response)
        } catch (error) {
            throw Error(error.message)
        }
    }
    async function register(email, password) {
        try {
            await account.create(ID.unique(), email, password)
            await login(email, password)
        } catch (error) {
            throw Error(error.message)
        }
    }
    async function logout() {
        await account.deleteSession('current')
        setUser(null)
    }
    const getInitialUserValue = async () => {
        try {
            const response = await account.get();
            setUser(response)
        } catch (error) {
            setUser(null)
        }
        finally {
            setauthChecked(true)
        }

    }
    useEffect(() => {
        getInitialUserValue()
    }, [])

    return (
        <UserContext.Provider value={{
            user,
            authChecked,
            login,
            register,
            logout
        }}>
            {children}
        </UserContext.Provider>
    )
}
