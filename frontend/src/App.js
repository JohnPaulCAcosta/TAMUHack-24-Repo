// import React, { useState, useEffect } from "react";
// import Landing from "./pages/Landing";
// import { RecoilRoot } from "recoil";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import DestCard from "./DestCard";

// function App() {
//   const routes = [{ name: "Home", path: "/" }];
//   const [dests, setDests] = useState([]);
//   const [selectedDest, setSelectedDest] = useState(null);

//   const handleCardClick = (dest) => {
//     setSelectedDest(dest);
//   };


//   return (
//     <RecoilRoot>
//       <BrowserRouter>
//         <Navbar routes={routes} />
//         <Routes>
//           <Route index element={<Landing />} />
//           <div className="container">
//           {dests.map((dest) => (
//             <DestCard key={dest.point} dest={dest} onClick={handleCardClick} />
//           ))}
//         </div>
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </RecoilRoot>
//   );
// }

// export default App;

import React, { useState } from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import DestCard from "./components/DestCard";

function App() {
  const routes = [{ name: "Home", path: "/" }];
  const [dests, setDests] = useState([]);
  const [selectedDest, setSelectedDest] = useState(null);

  const handleCardClick = (dest) => {
    setSelectedDest(dest);
  };

  const closeDestModal = () => {
    setSelectedDest(null);
  };

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Navbar routes={routes} />
        <Routes>
          <Route index element={<Landing />} />
        </Routes>

        <div className="container">
          {dests.map((dest) => (
            <DestCard key={dest.Point} dest={dest} onClick={handleCardClick} />
          ))}
        </div>

        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

