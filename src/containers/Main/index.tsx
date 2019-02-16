import * as React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Counter from "../Counter";
import Demo from "../Demo";
import Home from "../Home";

class Main extends React.Component {
  public render() {
    return (
      <div className="main">
        <h1>Hello World.</h1>
        <p> Typescript Boilerplate </p>
        <ul>
          <li><Link to="/home" >Home</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/demo">Demo</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/home" exact={true} component={Home} />
          <Route path="/counter" exact={true} component={Counter} />
          <Route path="/demo" component={Demo} />
        </Switch>
      </div>
    );
  }
}

export default Main;
