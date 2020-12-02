import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import How from "./components/pages/How/How";
import Faq from "./components/pages/Faq/Faq";
import Contact from "./components/pages/Contact/Contact";
import Terms from "./components/pages/Terms/Terms";
import Homepage from "./components/pages/Homepage/Homepage";
import AboutUs from "./components/pages/AboutUs/AboutUs";

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={AboutUs} />
          <Route path="/how-it-works" component={How} />
          <Route path="/contact" component={Faq} />
          <Route path="/faq" component={Contact} />
          <Route path="/login" component={Terms} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
