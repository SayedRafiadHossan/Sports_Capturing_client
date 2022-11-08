import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
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
