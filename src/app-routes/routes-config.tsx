import type { RouteObject } from "react-router-dom";
import MainLayout from "../main-layout/MainLayout";
import Overview from "../features/overview/Overview";
import Login from "../features/auth/Login";
import Signup from "../features/auth/Signup";

const AppRoutes: RouteObject[] = [
    {
        path: '/',
        Component: MainLayout,
        children: [
            {   
                index: true,
                path: 'overview',
                Component: Overview
            },
            {
                path: 'login',
                Component: Login,
            },
            {
                path: 'signup',
                Component: Signup
            }
        ]
    }
]

export default AppRoutes;