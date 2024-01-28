import { useEffect, useState } from "react";
import "../styles/Landing.css";
import { hello, eventoutput } from "../apis/hello";
import DestCard from "../components/DestCard";

function Landing() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const [destSelect, setDestSelect] = useState(null);

  const handleSelectDest = (dest) => {
    setDestSelect(dest.Location);
  };

  useEffect(() => {
    hello(setText);
    eventoutput(setData);
  }, []);
  return (
    <div>
      <h1>{text}</h1>
      <div className="container">
        {data.map((dest, i) => (
          <DestCard key={i} dest={dest} onClick={handleSelectDest} />
        ))}
      </div>
    </div>
  );
}

export default Landing;
