import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChannelPage from "./Pages/ChannelPage";
import VideoPage from "./Pages/VideoPage";
import SearchPage from "./Pages/SearchPage";
// import classes from "./App.module.css";
import "./App.css";
import RootLayout from "./Components/Header/RootLayout";
type Props = {};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/channel/:id",
        element: <ChannelPage />,
      },
      {
        path: "/video/:id",
        element: <VideoPage />,
      },
      {
        path: "/search/:id",
        element: <SearchPage />,
      },
    ],
  },
]);

const App = (props: Props) => {
  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
