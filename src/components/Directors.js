import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsList= directors.map((d)=>
  <div key={d.name}>
    <h3>{d.name}</h3>
    <ul>
      {d.movies.map((m)=>
      <li key={Math.random()*10}>{m}</li>
      )}
    </ul>
  </div>
  )
  return <div>
    <h1>Directors Page</h1>
    {directorsList}
    </div>;
}

export default Directors;
