import React from "react";
import "./DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {

  const classnames = require("classnames");

  const { name, spots, selected, setDay } = props;

  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected, 
    "button--danger": props.spots === 0
 });

  // FUNCTION: formatSpots
  // conditionally renders text depending on how many spots are remaining.
  const formatSpots = props => {

    if (props.spots === 0) {
      return "no spots remaining";
    } else if (props.spots === 1) {
      return "1 spot remaining";
    } else {
      return `${props.spots} spots remaining`;
    }
    
  };


  return (
    <li 
    className={dayClass}
    onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props)}</h3>
    </li>
  );

}