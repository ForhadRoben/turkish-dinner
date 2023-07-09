import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import ChefsRecipes from "../pages/home/chefsRecipes/ChefsRecipes";
import RecipesLayout from "../layouts/RecipesLayout";
import Blogs from "../pages/home/blogs/Blogs";
import Login from "../pages/login/login/Login";
import Register from "../pages/login/register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/shared/errorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/', element: <Home></Home>
            }
        ]
    },
    {
        path: '/chefInfo',
        element: <RecipesLayout></RecipesLayout>,

        children: [
            {
                path: '/chefInfo/:id',
                element: <PrivateRoute><ChefsRecipes></ChefsRecipes></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-turkish-dinner-forhadroben.vercel.app/chefsInfo/${params.id}`)
            },

        ]

    },
    {
        path: '/',
        element: <RecipesLayout></RecipesLayout>,

        children: [
            {
                path: '/blogs', element: <Blogs></Blogs>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            }
        ]
    }
])

export default router;