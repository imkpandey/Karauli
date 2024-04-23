/* eslint-disable react/no-unknown-property */
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Instructions from "./components/Instructions/Instructions";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/instructions",
      element: <Instructions />,
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
