import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import NewService from "./components/NewService/NewService";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ReviewPart from "./components/ReviewPart/ReviewPart";
import Services from "./components/Services/Services";
import ServicesDetails from "./components/Services/ServicesDetails";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () =>
            fetch(
              "https://sports-photography-server-eight.vercel.app/services"
            ),
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/Login",
          element: <Login></Login>,
        },
        {
          path: "/addService",
          element: (
            <PrivateRoute>
              <NewService></NewService>
            </PrivateRoute>
          ),
        },
        {
          path: "/Signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/services",
          element: <Services></Services>,
          loader: () =>
            fetch(
              "https://sports-photography-server-eight.vercel.app/services"
            ),
        },
        {
          path: "/orders",
          element: (
            <PrivateRoute>
              <ReviewPart></ReviewPart>
            </PrivateRoute>
          ),
          loader: () =>
            fetch("https://sports-photography-server-eight.vercel.app/orders"),
        },
        {
          path: "/services/:id",
          element: <ServicesDetails></ServicesDetails>,
          loader: ({ params }) =>
            fetch(
              `https://sports-photography-server-eight.vercel.app/services/${params.id}`
            ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
