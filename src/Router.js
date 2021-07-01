import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/pages/Profile";
import Skil from "./components/pages/Skil";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/skil" component={Skil} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
