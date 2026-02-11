import type { RouteObject } from "react-router-dom";
import MainLayout from "../main-layout/MainLayout";
import Overview from "../features/overview/Overview";

const AppRoutes: RouteObject[] = [
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: 'overview',
                Component: Overview
            }
        ]
    }
]
export default AppRoutes;