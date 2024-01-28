import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard"; 

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
