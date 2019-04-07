import React from "react";

export default function Nav(props) {
  const closed = true;
  return (
    <section className={closed ? "Nav closed" : "Nav"}>
      <button className="toggle">&#9776;</button>
      <h1>Nav</h1>
    </section>
  );
}
