import ExampleContextProvider from "./context/example_context";
import ExamplePage from "./pages/example_page";

export default function App() {
    return (
        <ExampleContextProvider>
            <div>
                <ExamplePage />
            </div>
        </ExampleContextProvider>
    );
}
