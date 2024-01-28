import { useEffect, useState } from "react";
import "../styles/Landing.css";
import { hello, eventoutput } from "../apis/hello";
import DestCard from "../components/DestCard";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  let navigate = useNavigate();
  

  const [destSelect, setDestSelect] = useState(null);

  const [inputValue, setInputValue] = useState(NaN);

  const handleSelectDest = (dest) => {
    setDestSelect(dest);

    navigate(`cityAct/${dest.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')}`);
  };

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  const handleSearchClick = () => {
    if (inputValue) {
      eventoutput(setData, inputValue);
    }
  };

  useEffect(() => {
    if (inputValue) {
      eventoutput(setData, inputValue);
    }
  }, []);

  return (
    <div>
      <h1>{text}</h1>
      <div className="d-flex justify-content-center mb-3">
        <input
          className="form-control mr-2"
          type="number"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="btn btn-primary" onClick={handleSearchClick}>
          Search
        </button>
      </div>
      <div className="container">
        <div className="row">
          {data.map((dest, i) => (
            <div className="col-md-4 mb-3">
              <DestCard key={i} dest={dest} onClick={handleSelectDest} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
