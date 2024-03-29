import { useState } from "react";
import Axios from "axios";
const App = () => {
  const [excuse, SetExcuse] = useState("");
  const fetchExcuse = (query) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${query}`).then(
      (res) => {
        console.log(res.data);
        SetExcuse(res.data[0].excuse);
      }
    );
  };
  return (
    <div>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <button onClick={() => fetchExcuse("college")}>College</button>
      <button onClick={() => fetchExcuse("gaming")}>Gaming</button>
      <button onClick={() => fetchExcuse("children")}>Children</button>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("funny")}>Funny</button>
      <button onClick={() => fetchExcuse("unbelievable")}>Gaming</button>
      <button onClick={() => fetchExcuse("developers")}>Developer</button>
      <h1>{excuse}</h1>
    </div>
  );
};

export default App;
