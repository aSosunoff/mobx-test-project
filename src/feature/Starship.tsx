import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { starship } from "../model";

export const Starship = observer<React.FC>(() => {
  useEffect(() => {
    starship.load();
  }, []);
  return (
    <>
      <div>Starship</div>

      <div>
        {starship.list.map((starshi) => (
          <div key={starshi.url}>{starshi.name}</div>
        ))}
      </div>

      <div>
        <button onClick={starship.load}>Reload Starships</button>
      </div>

      <div>
        <Link to="/">Main</Link>
      </div>
    </>
  );
});
