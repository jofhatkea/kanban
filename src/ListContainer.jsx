import React from "react";
import Card from "./Card";
export default function ListContainer(props) {
  const cards = props.cards.map(card => {
    console.log(card);
    return <Card {...card} />;
  });
  return (
    <section className="ListContainer">
      <h1>{props.title}</h1>
      {cards}
    </section>
  );
}
