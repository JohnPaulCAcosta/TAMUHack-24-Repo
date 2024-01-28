import React, { useState, useEffect } from "react";
import Landing from "./pages/Landing";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CityPage from "./pages/CityPage";

function App() {
  const routes = [{ name: "Home", path: "/" }];

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Navbar routes={routes} />
        <Routes>
          <Route index element={<Landing />} />
          <Route path="cityAct/:city" element={<CityPage />} />
          {/* <div className="container">
          {dests.map((dest) => (
            <DestCard key={dest.point} dest={dest} onClick={handleCardClick} />
          ))}
        </div> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import { RecoilRoot } from "recoil";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Landing from "./pages/Landing";
// import DestCard from "./components/DestCard";
// import SearchIcon from "./components/search.svg";
// import { eventoutput } from "./apis/hello";

// function App() {
//   const routes = [{ name: "Home", path: "/" }];
//   const [dests, setDests] = useState([]);
//   const [selectedDest, setSelectedDest] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     eventoutput(setDests);
//   }, []);

//   const handleCardClick = (dest) => {
//     setSelectedDest(dest);
//   };

//   const closeDestModal = () => {
//     setSelectedDest(null);
//   };

//   return (
//     <div className="app">
//       <h1>American</h1>

//       {dests?.length > 0 ? (
//         <div className="container">
//           {dests.map((dest) => (
//             <DestCard key={dest.point} dest={dest} onClick={handleCardClick} />
//           ))}
//         </div>
//       ) : (
//         <div className="empty">
//           <h2>No Destination found</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

