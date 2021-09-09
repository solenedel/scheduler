// -------------------------------- Imports ---------------------------- //

import React from "react";
import "./InterviewerListItem.scss";
import classNames from "classnames";

// -------------------------------- Component function: InterviewerListItem ---------------------------- //

export default function InterviewerListItem(props) {
  
  // add CSS styles
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });

  const clickHandler = () => {
    props.setInterviewer();
  }

// -------------------------------- InterviewerListItem Component ---------------------------- //

  return (
    <li className={interviewerClass}
        onClick={clickHandler}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}  
      />
      {props.selected && props.name}
    </li>
  );

}