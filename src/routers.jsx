import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Gfs from "./Pages/gfs";
import Ideate from "./Pages/ideate";
import Navbar from "./components1/Navbar";
import Footer from "./components1/footer";
import Footer2 from "./components2/Footer2";
import Navbar2 from "./components2/Navbar2"; 
import RegistrationForm from "./components2/Form";

// ✅ Layout for Global Futures Summit (GFS)
const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

// ✅ Layout for Ideate
const Layout2 = () => {
  return (
    <>
      <Navbar2 />
      <div>
        <Outlet />
      </div>
      <Footer2 />
    </>
  );
};

// ✅ Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Gfs /> }, // ✅ Default home page ("/")
      { path: "register-global-futures-summit", element: <>Coming Soon</> }
    ],
  },
  {
    path: "/ideate",
    element: <Layout2 />,
    children: [
      { index: true, element: <Ideate /> }, // ✅ Correct way to load `/ideate`
    ],
  },
  { path: "/register", element: <RegistrationForm /> },
]);

export default router;
