import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { App } from "./app";
import { NotFound } from "./feature/NotFound";
import { People } from "./feature/People";
import { Starship } from "./feature/Starship";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <App />
      </Route>

      <Route path="/people">
        <People />
      </Route>

      <Route path="/starships">
        <Starship />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
