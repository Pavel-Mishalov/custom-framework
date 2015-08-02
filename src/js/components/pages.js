import React from "react";

module.exports = {
  "PageOne": React.createClass({
    render() {
      return <div className="title">This is page one!</div>;
    }
  }),
  "PageTwo": React.createClass({
    render() {
      return <div className="title">This is page two!</div>;
    }
  }),
  "PageThree": React.createClass({
    render() {
      var url = require("images/placeholdit.png");

      return (
        <div>
          <div className="title">This is page three!</div>
          <img src={url} />
        </div>
      )
    }
  })
}
