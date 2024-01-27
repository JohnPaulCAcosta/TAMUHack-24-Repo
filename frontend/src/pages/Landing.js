import { useEffect, useState } from "react";
import "../styles/Landing.css";
import { hello } from "../apis/hello";

function Landing() {
  const [text, setText] = useState("");
  useEffect(() => {
    hello(setText);
  }, []);
  return <h1>{text}</h1>;
}

export default Landing;
