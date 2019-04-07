import React from "react";
import Card from "./Card";
export default function ListContainer(props) {
  return (
    <section className="ListContainer">
      <h1>{props.title}</h1>
      <Card />
      <Card />
    </section>
  );
}
