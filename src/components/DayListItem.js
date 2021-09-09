// -------------------------------- Imports ---------------------------- //
import React from "react";
import "./DayListItem.scss";
import classNames from "classnames";


// -------------------------------- Component function: DayListItem ---------------------------- //

export default function DayListItem(props) {

  // add CSS styles
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected, 
    "button--danger": props.spots === 0
  });

  // conditional rendering based on the number of remaining interview spots.
  const formatSpots = () => {
    if (props.spots === 0) {
      return "no spots remaining";
    } else if (props.spots === 1) {
      return "1 spot remaining";
    } else {
      return `${props.spots} spots remaining`;
    }

  };

  // ---------------------- DayListItem component ------------------------ //

  return (
    <li 
      className={dayClass}
      onClick={() => props.setDay(props.name)}
      data-testid="day">
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );

}