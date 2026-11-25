import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import SignUpPage from "../pages/auth/signup/SignUpPage.tsx";
import SignInPage from "../pages/auth/signin/SignInPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "auth",
                children: [
                    { path: "signin", element: <SignInPage /> },
                    { path: "signup", element: <SignUpPage /> },
                ],
            },
        ],
    },
]);

export default router;
