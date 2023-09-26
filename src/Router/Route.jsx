import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Details from "../Pages/Details/Details";

const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/donation',
                element: <Donation/>,
            },
            {
                path: '/statistics',
                element: <Statistics/>
            },
            {
                path: 'details/:id',
                element: <Details/>
            }
        ]
    }
])

export default myCreateRoute;