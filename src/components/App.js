import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Featured from "./Featured";
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/people/:name/:topic" component={Featured} />
      </Switch>
    </BrowserRouter>
  );
}
