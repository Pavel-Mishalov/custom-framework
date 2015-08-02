import React from "react";
import Router from "react-router";
import {DefaultRoute, Link, Route, RouteHandler} from "react-router";
import {PageOne, PageTwo, PageThree} from "./components/pages";

let App = React.createClass({
  render() {
    return (
      <div>
        <div>
          Skeleton App
        </div>
        <nav>
          <Link to="page-one">Page One</Link>
          <Link to="page-two">Page Two</Link>
          <Link to="page-three">Page Three</Link>
        </nav>
        <div className="content">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="page-one" path="/page-one" handler={PageOne}/>
    <Route name="page-two" path="/page-two" handler={PageTwo}/>
    <Route name="page-three" path="/page-three" handler={PageThree}/>
    <DefaultRoute handler={PageOne} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
