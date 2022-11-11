import Main from "../../Layout/Main";
import Blogs from "../Blogs/Blogs";
import Login from "../Login/Login";
import MyReview from "../MyReview/MyReview";
import PageNotFound from "../PageNotFound/PageNotFound";
import Register from "../Register/Register";
import Home from "../Shared/Home/Home";
import AllProducts from "../Shared/Home/Products/AllProducts";
import ProductDetails from "../Shared/Home/Products/ProductDetails";
import PrivateRoute from "../Shared/PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/allproducts',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/productdeetails/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:4000/product/${params.id}`)
            },
            {
                path: '/review',
                element: <MyReview></MyReview>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <PageNotFound></PageNotFound>
            },

        ]
    }
]);

export default router;

