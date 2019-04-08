import React from "react";
import Form from "./Form";
import ListContainer from "./ListContainer";
export default function Main(props) {
  return (
    <section className="Main">
      <h1>Main</h1>
      <Form />
      <ListContainer cards={props.cards} title="Todo" />
      <ListContainer cards={props.cards} title="Doing" />
      <ListContainer cards={props.cards} title="Done" />
    </section>
  );
}
