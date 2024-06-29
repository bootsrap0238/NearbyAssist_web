import { useRef, useState } from "react";
import useRequest from "../hooks/use_request";
import useStorage from "../hooks/use_storage";

export default function EndpointTester() {
    const endpointRef = useRef<HTMLInputElement>(null);
    const [result, setResult] = useState("test result goes here...");

    const { send, isLoading } = useRequest();
    const { getSavedUser } = useStorage();

    async function testEndpoint() {
        if (!endpointRef.current) {
            setResult("endpoint input is undefined");
            return;
        }

        if (endpointRef.current.value === "") {
            setResult("url cannot be empty");
            return;
        }

        const url = `${import.meta.env.VITE_BACKEND_URL}${endpointRef.current.value}`;

        const user = getSavedUser();
        if (user === null) {
            setResult("no user data found");
            return;
        }

        try {
            const response = await send(user.accessToken, url, "GET");
            console.log(response);
            if (!response.success) {
                setResult(response.error);
                return;
            }

            setResult(JSON.stringify(response.data, null, "\t"));
        } catch (e) {
            setResult(JSON.stringify(e, null, "\t"));
        }
    }

    return (
        <div className="grid gap-2 rounded p-2 outline outline-1 outline-gray-lightgray">
            <h2>Endpoint Tester</h2>
            <form onSubmit={(e) => {
                e.preventDefault();

                if (isLoading) {
                    console.error("request is still loading");
                    return;
                }

                testEndpoint();
            }}
                className="grid gap-2"
            >
                <input
                    type="text"
                    placeholder="endpoint"
                    ref={endpointRef}
                    className="rounded p-1 outline outline-1 outline-gray-lightgray"
                />
                <div className="flex justify-start">
                    <button
                        type="submit"
                        className="cursor rounded bg-primary p-2"
                    >{isLoading ? "loading..." : "send request"}</button>
                </div>
            </form>
            <div className="p-1 outline outline-1 outline-gray-lightgray">
                <pre>{result}</pre>
            </div>
        </div>
    )
}
