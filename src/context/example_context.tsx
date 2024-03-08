import { ReactNode, createContext, useState } from "react";

interface ExampleContextType {
    value: string
    update: (newValue: string) => void,
}

export const ExampleContext = createContext({} as ExampleContextType);

export default function ExampleContextProvider({ children }: { children: ReactNode }) {
    const [foo, setFoo] = useState("foo");

    function updateFoo(newValue: string) {
        setFoo(newValue);
    }

    return (
        <ExampleContext.Provider value={{ value: foo, update: updateFoo }}>
            {children}
        </ExampleContext.Provider>
    )
}
