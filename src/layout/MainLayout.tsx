import { Outlet, redirect } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

export default function MainLayout() {
    redirect('/login')

    return (
        <div className="grid h-screen grid-cols-[16rem_1fr]">
            <Sidebar />

            <div className="overflow-scroll">
                <Header />
                <Outlet />
            </div>
        </div>
    );
}
