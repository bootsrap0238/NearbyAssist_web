import { ReactNode, createContext } from "react";
import useRequest from "../hooks/use_request";
import useStorage from "../hooks/use_storage";

interface IAuthContext {
    login: (username: string, password: string) => Promise<{ success: boolean }>
    logout: () => Promise<{ success: boolean }>
}

export const AuthContext = createContext({} as IAuthContext)

export default function AuthContextProvider({ children }: { children: ReactNode }) {
    const { send } = useRequest();
    const { updateSavedUser, getSavedUser } = useStorage();

    async function login(username: string, password: string): Promise<{ success: boolean }> {
        const serverAddr = import.meta.env.VITE_BACKEND_URL;
        const url = `${serverAddr}/auth/admin/login`;

        try {
            const response = await send("", url, "POST", JSON.stringify({ username, password }));
            if (response === null) {
                throw new Error("Request failed");
            }

            const data = await response.json();
            updateSavedUser(data);

            return { success: true };
        } catch (e) {
            console.error(e);
            return { success: false };
        }
    }

    async function logout(): Promise<{ success: boolean }> {
        const serverAddr = import.meta.env.VITE_BACKEND_URL;
        const url = `${serverAddr}/auth/logout`;

        try {
            const user = getSavedUser();
            if (user === null) {
                throw new Error("User not found");
            }

            const response = await send(user.accessToken, url, "POST", JSON.stringify({ token: user.refreshToken }));
            if (response === null) {
                throw new Error("Request failed");
            }

            updateSavedUser(null);
            return { success: true };
        } catch (e) {
            console.error(e);
            return { success: false };
        }
    }

    return (
        <AuthContext.Provider value={{ login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
