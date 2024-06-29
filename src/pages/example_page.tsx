import { Link, useNavigate } from "react-router-dom";
import ExampleButton from "../components/example_button";
import useAuth from "../hooks/use_auth";
import useRequest from "../hooks/use_request";
import EndpointTester from "../components/endpoint_tester";

export default function ExamplePage() {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const { isLoading } = useRequest();

    async function sampleLogout() {
        try {
            const response = await logout();
            if (!response.success) {
                throw new Error(response.error);
            }

            navigate("/login");
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="p-2">
            <h1 className="my-2 text-center">Example Page</h1>
            <Link to="/" className="pointer text-blue hover:underline" >Home</Link>
            <div className="my-4 flex gap-2">
                <ExampleButton
                    title={isLoading ? "loading..." : "test logout"}
                    action={sampleLogout}
                    styles="rounded bg-red-lightred p-2 text-white"
                />
            </div>

            <EndpointTester />
        </div>
    );
}
