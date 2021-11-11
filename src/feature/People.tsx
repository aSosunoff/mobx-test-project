import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { persons } from "../model";

export const People = observer<React.FC>(() => {
  useEffect(() => {
    persons.load();
  }, []);

  return (
    <>
      <div>People</div>

      {persons.loading ? <div>loading...</div> : null}

      {!persons.loading
        ? persons.list.map((person) => <div key={person.url}>{person.name}</div>)
        : null}

      <button
        onClick={() => {
          persons.load();
        }}
      >
        Load People
      </button>

      <div>
        <Link to="/">Main</Link>
      </div>
    </>
  );
});
