import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routers"; // ✅ Import router configuration

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
