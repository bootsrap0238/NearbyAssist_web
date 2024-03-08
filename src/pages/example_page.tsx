import ExampleButton from "../components/example_button";
import UseExampleContext from "../hooks/use_example_context";
import { Logger } from "../utils/example_logger";

export default function ExamplePage() {
    const { value } = UseExampleContext();

    return (
        <div>
            <h1 className="my-2">This is from example page</h1>
            <p className="my-2">context value: {value}</p>
            <ExampleButton action={Logger} />
        </div>
    );
}
