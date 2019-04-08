import React from "react";

export default class Nav extends React.Component {
  state = {
    closed: true
  };
  render() {
    return (
      <section className={this.state.closed ? "Nav closed" : "Nav"}>
        <button className="toggle">&#9776;</button>
        <h1>Nav</h1>
      </section>
    );
  }
}
