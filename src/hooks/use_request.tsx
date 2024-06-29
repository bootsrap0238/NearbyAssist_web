import { useContext, useState } from "react";
import { StorageContext, TUserData } from "../context/storage_context";

type TResponse<T> = {
    success: true,
    data: T
} | {
    success: false,
    code?: number,
    error: string
}

export default function useRequest() {
    const [isLoading, setIsLoading] = useState(false);

    const { updateSavedUser, getSavedUser } = useContext(StorageContext);

    async function unauthenticatedRequest(url: string, method: string, body?: BodyInit): Promise<Response | null> {
        try {
            switch (method) {
                case "GET":
                    return await fetch(url);
                case "POST":
                    return await fetch(url, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: body,
                    });
                default:
                    throw new Error(`Method ${method} not supported`);
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async function send<T>(accessToken: string, url: string, method: string, body?: BodyInit): Promise<TResponse<T>> {
        setIsLoading(true);
        let response = await request(accessToken, url, method, body);

        if (response === null) {
            setIsLoading(false);
            return { success: false, error: "Request failed" };
        }

        if (response.status === 401) {
            const newData = await refreshToken(accessToken);
            if (newData === null) {
                setIsLoading(false);
                return { success: false, code: response.status, error: "Failed to refresh token" };
            }

            response = await request(newData.accessToken, url, method, body);
            if (response === null) {
                setIsLoading(false);
                return { success: false, error: "Request failed" };
            }
        }

        if (response.status === 404) {
            setIsLoading(false);
            return { success: false, code: response.status, error: response.statusText };
        }

        if (response.status >= 300) {
            setIsLoading(false);
            return { success: false, code: response.status, error: response.statusText };
        }

        setIsLoading(false);
        return { success: true, data: await response.json() };
    }

    async function request(accessToken: string, url: string, method: string, body?: BodyInit): Promise<Response | null> {
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
        }

        try {
            switch (method) {
                case "GET":
                    return await fetch(url, {
                        headers: headers,
                    })
                case "POST":
                    return await fetch(url, {
                        method: "POST",
                        headers: headers,
                        body: body,
                    })
                default:
                    throw new Error(`Method ${method} not supported`);
            }
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    async function refreshToken(accessToken: string): Promise<TUserData | null> {
        const serverAddr = import.meta.env.VITE_BACKEND_URL;
        const url = `${serverAddr}/auth/refresh`;
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
        }

        try {
            const user = getSavedUser();
            if (user === null) {
                throw new Error("No user data found");
            }

            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify({ token: user.refreshToken }),
            })

            if (response.status !== 200) {
                throw new Error(`Failed to refresh token: ${response.status}`);
            }

            const data = await response.json();

            const newData = {
                accessToken: data.accessToken,
                refreshToken: user.refreshToken,
                adminId: user.adminId,
                role: data.role,
            }
            updateSavedUser(newData);

            return newData;
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    return {
        isLoading,
        unauthenticatedRequest,
        send
    }
}
