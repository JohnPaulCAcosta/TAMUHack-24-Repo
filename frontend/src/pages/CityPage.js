// import React, { useState, useEffect } from "react";

// const CityPage = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8000/events?points=your_desired_points")
//       .then((response) => response.json())
//       .then((data) => {
//         setEvents(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>City Page</h1>
//       <ul>
//         {events.map((event, index) => (
//           <li key={index}>
//             <h2>{event.EventName}</h2>
//             <p>{event.Description}</p>
//             {/* Other event details */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CityPage;
import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard"; // Make sure to import the EventCard component

import "../styles/DestCard.css";

const CityPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cityAct/Houston, TX, US")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();  // Convert the response to JSON
      })
      .then(data => {
        console.log("Received data:", data);
        if (Array.isArray(data)) {
          setEvents(data);
        } else {
          console.error("Received unexpected data format:", data);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleClick = (location) => {
    // Handle click event as needed
    console.log(`Clicked on location: ${location}`);
  };

  return (
    <div className="dest-container">
      {events.map((event) => (
        <EventCard key={event.Point} dest={event} onClick={handleClick} />
      ))}
    </div>
  );
};

export default CityPage;
