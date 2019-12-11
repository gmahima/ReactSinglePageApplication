import React from "react";
export default function Featured(props) {
  let name = props.match.params.name;
  let topic = props.match.params.topic;

  return [<h1>{name}</h1>, <h2>{topic}</h2>];
}
