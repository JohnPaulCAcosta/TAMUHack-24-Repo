import React from 'react';

const DestCard = ({ dest, onClick }) => {
  const { Point, Poster, Location } = dest;

  const handleClick = () => {
    onClick(dest);
  };

  return (
    <div className="dest" key={Point} onClick={handleClick}>
      <div>
        <p>{Location}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Location} />
      </div>

      <div>
        <span>{Point}</span>
        <h3>{Location}</h3>
      </div>
    </div>
  );
};

export default DestCard;
