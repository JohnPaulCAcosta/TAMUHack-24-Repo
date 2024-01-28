import React from "react";
import "../styles/DestCard.css";

const EventCard = ({ dest, onClick }) => {
  const { Point, Image, Location, Description, MileRequirement } = dest;

  const handleClick = () => {
    onClick(Location);
  };

  return (
    <div className="dest" key={Point} onClick={handleClick}>
      <div>
        <p>{Location}</p>
      </div>

      <div>
        <img src={Image !== "N/A" ? Image : "https://via.placeholder.com/400"} alt={Location} />
      </div>

      <div>
        <span>{Point}</span>
        <h3>{Location}</h3>
        <p>{Description}</p>
        <p>{MileRequirement}</p>
      </div>
    </div>
  );
};

export default EventCard;
