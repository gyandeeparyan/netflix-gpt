import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

import Error from "./Error";
import UserDetailsPage from "./UserDetailsPage";
import MovieDetailsPage from "./MovieDetailsPage";

import Header from "./Header";

const Body = () => {


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      children:[]
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <Error />,
    },
    {
      path: "/browse/:movieId",
      element: <MovieDetailsPage/>,
    },
    {
      path: "/user",
      element: <UserDetailsPage/>,
    },
  ]);



  return (
    <>
      <RouterProvider router={appRouter}>
        <Header/>
        <Login />
        <Browse />
        
      </RouterProvider>
    </>
  );
};

export default Body;
