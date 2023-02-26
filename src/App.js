import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SearchAppBar from "./components/AppBar";
import Home from "./pages/Home";
import Tour from "./pages/Tour";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tour/:id",
    element: <Tour />,
  },
]);

function App() {
  return (
    <>
      <SearchAppBar />
      <RouterProvider router={router} fallbackElement={<Home />} />
    </>
  );
}

export default App;
