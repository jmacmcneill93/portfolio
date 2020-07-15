import React from "react";
import { Switch, Route } from "react-router-dom";
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';


function Container(location) {
    return (
 

        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/Projects" component={Projects} />
          {/* <Route path="/Resume" component={Resume} /> */}
          <Route exact path="/Contact" component={Contact} />
        </Switch>


  );
};

export default Container;