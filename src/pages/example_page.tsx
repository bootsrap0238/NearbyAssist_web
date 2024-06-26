import { useNavigate } from "react-router-dom";
import ExampleButton from "../components/example_button";
import useAuth from "../hooks/use_auth";
import UseExampleContext from "../hooks/use_example_context";
import useRequest from "../hooks/use_request";
import EndpointTester from "../components/endpoint_tester";

export default function ExamplePage() {
    const { value } = UseExampleContext();
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
        <div className="grid gap-2 p-2">
            <h1 className="my-2">This is from example page</h1>
            <p className="my-2">context value: {value}</p>
            <div className="flex gap-2">
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
