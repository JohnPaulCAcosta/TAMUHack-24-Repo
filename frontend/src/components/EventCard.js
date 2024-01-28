import React from "react";
import "../styles/EventCard.css";

const EventCard = ({ dest, onClick }) => {
  const { Point, Image, EventName, Description, MileRequirement } = dest;

  const handleClick = () => {
    onClick(EventName);
  };

  return (
    <div className="dest" key={Point} onClick={handleClick}>
      <div>
        <p>{EventName}</p>
      </div>

      <div>
        <img src={Image !== "N/A" ? Image : "https://via.placeholder.com/400"} alt={EventName} />
      </div>

      <div>
        <span>{Point}</span>
        <h3>{EventName}</h3>
        <p>{Description}</p>
        <p>{MileRequirement}</p>
      </div>
    </div>
  );
};

export default EventCard;
