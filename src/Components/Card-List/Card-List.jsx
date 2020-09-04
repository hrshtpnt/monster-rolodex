import React from "react";
import { Card } from "../Card/Card";
import "./Card-List.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monstors.map((monstor) => (
        <Card monstor={monstor} key={monstor.id} />
      ))}
    </div>
  );
};
