import React from "react";

export default class Nav extends React.Component {
  state = {
    closed: true
  };
  clicked = e => {
    console.log("clicked");
    //console.log(this.state.closed, !this.state.closed);
    this.setState({
      closed: !this.state.closed
    });
  };
  render() {
    return (
      <section className={this.state.closed ? "Nav closed" : "Nav"}>
        <button onClick={this.clicked} className="toggle">
          &#9776;
        </button>
        <h1>Nav</h1>
      </section>
    );
  }
}
