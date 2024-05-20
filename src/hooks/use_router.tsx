import { Outlet, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home_page";
import NotFound from "../pages/not_found";
import LoginPage from "../pages/login_page";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/dashboard";
import Complaints from "../pages/complaints";
import ComplaintsDetails from "../pages/complaintsdetails";
import VendorApplication from "../pages/application";
import AccountRestriction from "../pages/restriction";
import AccountManagement from "../pages/management";
import ExamplePage from "../pages/example_page";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <NotFound />
    },
    {
        element: <LoginPage />,
        children: [
            {
                path: 'login',
                element: <LoginPage />
            }
        ]
    },
    {
        element: <MainLayout />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'complaints',
                element: <div> <Outlet /> </div>,
                children: [
                    {
                        path: '',
                        element: <Complaints />
                    },
                    {
                        path: ':complaintId',
                        element: <ComplaintsDetails />,
                    }
                ]
            },
            {
                path: 'application',
                element: <VendorApplication />
            },
            {
                path: 'restriction',
                element: <AccountRestriction />
            },
            {
                path: 'management',
                element: <AccountManagement />
            },
            {
                path: 'example',
                element: <ExamplePage />
            }
        ]
    }
])

export default function useRouter() {
    return router
}
