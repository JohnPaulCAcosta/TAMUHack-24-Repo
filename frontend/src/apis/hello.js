import Axios from "axios";

export function hello(setHello) {
  Axios.get(process.env.REACT_APP_BACKEND_URL + "/")
    .then((response) => {
      setHello(response.data);
    })
    .catch((error) => {
      console.error("There was an error fetching data:", error);
    });
}


export function eventoutput(setData) { //event output
  Axios.get(process.env.REACT_APP_BACKEND_URL + "/point")
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.error("There was an error fetching data:", error);
    });
}
