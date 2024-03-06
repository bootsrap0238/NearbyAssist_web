interface buttonProps {
    title?: string;
    action?: () => void;
    styles?: string;
}

export default function ExampleButton({ title, action, styles }: buttonProps) {
    return (
        <button onClick={action} className={styles ? styles : "rounded bg-blue-400 px-3 py-1"}>
            {title ? title : "example button"}
        </button>
    );
}
