// -------------------------------- Imports ---------------------------- //

import React from "react";
import DayListItem from "./DayListItem";


// -------------------------------- Component function: DayList ---------------------------- //

export default function DayList(props) {
  

  const dayListItems =  props.days.map(day => {

    // DayList contains many DayListItems, which are returned in this map function.
    return <DayListItem
              key={day.id}
              name={day.name}
              spots={day.spots}
              selected={day.name === props.day}
              setDay={props.setDay} />
  });

  
// ---------------------- DayList component ------------------------ //

  return (

    <ul>
      {dayListItems}
    </ul>

  );

}