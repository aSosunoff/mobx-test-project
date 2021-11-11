import React from "react";
import { Link } from "react-router-dom";
import { persons, planets, starship } from "./model";

export const App: React.FC = () => {
  return (
    <>
      <div>
        <button
          onClick={() => {
            planets.load();
          }}
        >
          Load Planets
        </button>

        <button
          onClick={() => {
            persons.load();
          }}
        >
          Load Persons
        </button>

        <button
          onClick={() => {
            starship.load();
          }}
        >
          Load Starships
        </button>

        <button
          onClick={() => {
            persons.load();
            planets.load();
            starship.load();
          }}
        >
          Load All Planets
        </button>
      </div>

      <div>
        <Link to="/starships">Starships</Link>
      </div>

      <div>
        <Link to="/people">People</Link>
      </div>
    </>
  );
};
