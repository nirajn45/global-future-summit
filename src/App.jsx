// import React from 'react'
// import Gfs from "./Pages/gfs"
// import Ideate from "./Pages/ideate"

// const App = () => {
//   return (
//     <>
//     <Gfs/>
//     <Ideate/>
//     </>
    
//   )
// }

// export default App


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gfs from "./Pages/gfs";
import Ideate from "./Pages/ideate";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gfs />} />
        <Route path="/ideate" element={<Ideate />} />
      </Routes>
    </Router>
  );
};

export default App;
