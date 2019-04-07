import React from "react";
import Form from "./Form";
import ListContainer from "./ListContainer";
export default function Main(props) {
  return (
    <section className="Main">
      <h1>Main</h1>
      <Form />
      <ListContainer title="Todo" />
      <ListContainer title="Doing" />
      <ListContainer title="Done" />
    </section>
  );
}
