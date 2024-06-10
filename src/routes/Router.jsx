import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ManageItem from "../pages/Dashbroad/ManageItem/ManageItem";
import UpdateItem from "../pages/Dashbroad/UpdateItem/UpdateItem";
import Payment from "../pages/Dashbroad/PayMent/PayMent";
import Userhome from "../pages/Dashbroad/UserHome/Userhome";
import Dashboard from "../Layout/Dashbroad";
import Cart from "../pages/Dashbroad/Cart/Cart";
import AllUser from "../pages/Dashbroad/AllUser/AllUser";
import AddItem from "../pages/Dashbroad/AddItem/AddItem";

import Useradmin from "../pages/Dashbroad/UserAdmin/Useradmin";
import AddminRoute from "./PrivateRoute/AddminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "userHome",
        element: <Userhome />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "secret",
        element: <PrivateRoute><Secret /></PrivateRoute>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "userHome",
        element: <Userhome />,
      },
      {
        path: "cart",
        element:<Cart></Cart>
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "adminHome",
        element:<AddminRoute><Useradmin></Useradmin></AddminRoute> ,
      },
      {
        path: "addItem",
        element: <AddminRoute> <AddItem></AddItem></AddminRoute> 
      },
      {
        path: "manageItem",
        element: <AddminRoute><ManageItem></ManageItem></AddminRoute>,
      },
      {
        path: "updateItem/:id",
        element: <AddminRoute><UpdateItem /></AddminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "user",
        element: <AddminRoute><AllUser></AllUser></AddminRoute>,
      },
    ],
  },
]);
