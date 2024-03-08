import { useContext } from "react";
import { ExampleContext } from "../context/example_context";

export default function UseExampleContext() {
    return useContext(ExampleContext);
}
