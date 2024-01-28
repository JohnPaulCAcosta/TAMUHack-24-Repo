import { useEffect, useState } from "react";
import "../styles/Landing.css";
import { hello, eventoutput } from "../apis/hello";
import DestCard from "../components/DestCard";

function Landing() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const [destSelect, setDestSelect] = useState(null);

  const [inputValue, setInputValue] = useState(NaN);

  const handleSelectDest = (dest) => {
    setDestSelect(dest.Location);
  };

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  useEffect(() => {
    hello(setText);
    eventoutput(setData, inputValue);
  }, []);
  return (
    <div>
      <h1>{text}</h1>

      <input type="number" value={inputValue} onChange={handleChange} />
      <div className="container">
        {data.map((dest, i) => (
          <DestCard key={i} dest={dest} onClick={handleSelectDest} />
        ))}
      </div>
    </div>
  );
}

export default Landing;
