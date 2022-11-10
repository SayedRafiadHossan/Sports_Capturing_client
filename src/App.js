import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
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
          loader: () => fetch("http://localhost:5000/services"),
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
          path: "/Signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/services",
          element: <Services></Services>,
          loader: () => fetch("http://localhost:5000/services"),
        },
        {
          path: "/orders",
          element: <ReviewPart></ReviewPart>,
          loader: () => fetch("http://localhost:5000/orders"),
        },
        {
          path: "/services/:id",
          element: <ServicesDetails></ServicesDetails>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/services/${params.id}`),
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
