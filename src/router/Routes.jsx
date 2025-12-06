import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../pages/Profile";
import ServiceDetail from "../pages/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/Services",
            element: <Services></Services>
        },
        {
            path: "/Login",
            element: <Login></Login>
        },
        {
            path: "/Register",
            element: <Register></Register>
        },
        {
          path: '/Profile',
          element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
        },
        {
            path: '/details/:id',
            element: <PrivateRoutes><ServiceDetail></ServiceDetail></PrivateRoutes>
        }

    ]
  },
]);

export default router;