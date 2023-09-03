import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

import Error from "./Error";

const Body = () => {


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <Error />,
    },
  ]);



  return (
    <>
      <RouterProvider router={appRouter}>
        <Login />
        <Browse />
      </RouterProvider>
    </>
  );
};

export default Body;
