import React from "react";
import "./Card.css";
export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.monstor.id}?set=set2`}
      alt="monstor"
    />
    <h1>{props.monstor.name}</h1>
    <p>{props.monstor.email}</p>
  </div>
);
