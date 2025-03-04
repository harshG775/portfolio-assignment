import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Loading from "./routes/loading";

// layouts
import RootLayout from "@/routes/root/layout";
import ErrorBoundary from "./components/appRouter/ErrorBoundary";
import RootRoute from "./routes/root";
// routes
const NotFoundRoute = lazy(() => import("@/routes/not-found"));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <RootLayout>
                <ErrorBoundary>
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </ErrorBoundary>
            </RootLayout>
        ),
        children: [
            {
                index: true,
                element: <RootRoute />,
            },
            {
                path: "*",
                element: <NotFoundRoute />,
            },
        ],
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
