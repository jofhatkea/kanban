import React from "react";
import Form from "./Form";
import ListContainer from "./ListContainer";
export default function Main(props) {
  const todos = props.cards.filter(card => card.status === "Todo");
  const doing = props.cards.filter(card => card.status === "Doing");
  const done = props.cards.filter(card => card.status === "Done");

  return (
    <section className="Main">
      <h1>Main</h1>
      <Form />
      <ListContainer cards={todos} title="Todo" />
      <ListContainer cards={doing} title="Doing" />
      <ListContainer cards={done} title="Done" />
    </section>
  );
}
