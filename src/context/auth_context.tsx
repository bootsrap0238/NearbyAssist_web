import { ReactNode, createContext, useState } from "react";

type TUser = {
    username: string
    role: string
}

interface IAuthContext {
    getUser: () => TUser | null
    login: (username: string, password: string) => Promise<void>
    logout: () => Promise<void>
    refreshToken: () => Promise<void>
}

export const AuthContext = createContext({} as IAuthContext)

export default function AuthContextProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<TUser | null>(null)

    function getUser(): TUser | null {
        return user
    }

    async function login(username: string, password: string) {
        setUser(null)
        console.log({ username, password })
        // implement login
    }

    async function logout() {
        console.log('logout')
        // implement logout
    }

    async function refreshToken() {
        console.log('refreshToken')
        // TODO: implement refresh token
    }

    return (
        <AuthContext.Provider value={{ getUser, login, logout, refreshToken }}>
            {children}
        </AuthContext.Provider>
    )
}
