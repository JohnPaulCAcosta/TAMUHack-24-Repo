import { useEffect, useState } from "react";
import "../styles/Landing.css";
import { hello, eventoutput } from "../apis/hello";

function Landing() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    hello(setText);
    eventoutput(setData);
  }, []);
  return (
    <div>
      <h1>{text}</h1>
      <div>
        {data.map((obj) => (
          <table>{obj.URL}</table>
    
        ))}
      </div>
    </div>
  );
}

export default Landing;