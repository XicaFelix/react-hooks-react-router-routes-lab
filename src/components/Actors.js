import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map((a)=>
    <div key={a.name}>
      <h3>{a.name}</h3>
      <ul>
        {a.movies.map((m)=>
        <li key={m}>{m}</li>
        )}
      </ul>
    </div>
  )
  return <div>
    <h1>Actors Page</h1>
    {actorsList}
    </div>;
}

export default Actors;
