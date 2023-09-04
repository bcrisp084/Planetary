import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Apod from "./pages/Apod";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import { appLoader, roverLoader } from "./actions/appLoader";
import NotFound from "./pages/NotFound";
import Rover from "./pages/Rover";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="apod" loader={appLoader} element={<Apod />} />
      <Route path="/apod/:date" loader={appLoader} element={<Apod />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/rover" loader={roverLoader} element={<Rover />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
