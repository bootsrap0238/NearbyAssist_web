import { RouterProvider } from 'react-router-dom'
import useRouter from './hooks/use_router';

export default function App() {
    const router = useRouter()

    return (
        <RouterProvider router={router} />
    );
}
