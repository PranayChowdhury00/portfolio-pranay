import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../Pages/Home/Home";

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    },
  ]);

  export default router;