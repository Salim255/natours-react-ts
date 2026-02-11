import type { RouteObject } from "react-router-dom";
import MainLayout from "../main-layout/MainLayout";

const AppRoutes: RouteObject[] = [
    {
        path: '/',
        Component: MainLayout,
        children: []
    }
]
export default AppRoutes;