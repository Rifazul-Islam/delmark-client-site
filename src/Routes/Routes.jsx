import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Check from "../pages/Shared/Check";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AdminDashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AdminDashboard/AddItems/AddItems";
import AdminPrivateRoute from "./AdminPrivateRoute";
import ManageItems from "../pages/Dashboard/AdminDashboard/ManageItems/ManageItems";
import UpdateItems from "../pages/Dashboard/AdminDashboard/UpdateItems/UpdateItems";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserDashboard from "../pages/Dashboard/UserDashboard/UserDashboard";
import Shop from "../pages/Home/Home/AllProducts/Shop";
import ShopCategory from "../pages/Home/Home/AllProducts/ShopCategory";
import ShopDetails from "../pages/Home/Home/AllProducts/ShopDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shopCategory/:id",
        element: <ShopCategory />,
      },
      {
        path: "/ShopDetails/:id",
        element: <ShopDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/check",
        element: <Check />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },

  //  Dashboard area
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>,
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "userHome",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment />,
      },

      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      // Admin Only Access

      {
        path: "adminHome",
        element: (
          <AdminPrivateRoute>
            <AdminDashboard />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "allusers",
        element: (
          <AdminPrivateRoute>
            <AllUsers />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminPrivateRoute>
            <AddItems />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminPrivateRoute>
            <ManageItems />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "updateItems/:id",
        element: (
          <AdminPrivateRoute>
            <UpdateItems />
          </AdminPrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://dalmart-server-site.vercel.app/menu/${params.id}`),
      },
    ],
  },
]);

export default router;
