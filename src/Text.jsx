import { useState } from "react";
import axios from "axios";
const Text = () => {
  const [Text, SetText] = useState("");
  const fetchExcuse=(query)={
    axios.get("https://excuser-three.vercel.app/v1/excuse/office").then(res=>{
      console.log(res.data)
    })
  }
  return (
    <div>
      <input value={Text} onChange={(e) => SetText(e.target.value)}></input>
      <div>
        <h1>{Text}</h1>
      </div>
    </div>
  );
};

export default Text;
