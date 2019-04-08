import React from "react";
import Nav from "./Nav";
import Main from "./Main";
export default class App extends React.Component {
  state = {
    cards: [
      {
        id: 7684325, //Something random
        title: "Hi mom", //or whatever
        status: "Todo", //or Doing or Done,
        description: "bla, bla"
      },
      {
        id: 7684326, //Something random
        title: "Hi dad", //or whatever
        status: "Doing", //or Doing or Done,
        description: "bla, bla again"
      }
    ]
  };
  render() {
    return (
      <section className="App">
        <h1>App</h1>
        <Nav />
        <Main cards={this.state.cards} />
      </section>
    );
  }
}
