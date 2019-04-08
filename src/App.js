import React from "react";
import Nav from "./Nav";
import Main from "./Main";
export default class App extends React.Component {
  state = {
    cards: [
      {
        id: 7684325, //Something random
        title: "Add Click handler to menu", //or whatever
        status: "Todo", //or Doing or Done,
        description: "bla, bla"
      },
      {
        id: 7684326, //Something random
        title: "Sort Cards into the right components", //or whatever
        status: "Todo", //or Doing or Done,
        description: "bla, bla again"
      },
      {
        id: 7684327, //Something random
        title: "Fix console warning", //or whatever
        status: "Doing", //or Doing or Done,
        description: "bla, bla again"
      },
      {
        id: 7684328, //Something random
        title: "Add new card dynamically", //or whatever
        status: "Doing", //or Doing or Done,
        description: "bla, bla again"
      }
    ]
  };
  addCard = e => {
    console.log("add card called");
    this.setState({
      cards: this.state.cards.concat({
        id: 1,
        title: "Cool",
        status: "Todo",
        description: "bla, bla"
      })
    });
  };
  render() {
    return (
      <section className="App">
        <h1>App</h1>
        <button onClick={this.addCard}>Add a card</button>
        <Nav />
        <Main cards={this.state.cards} />
      </section>
    );
  }
}
