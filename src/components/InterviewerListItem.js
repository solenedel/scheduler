import React, { useState } from "react";
import "./InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  console.log('selected', props.selected);
  
  const interviewerListItemClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });


  return (
    <li className={interviewerListItemClass}
        onClick={props.setInterviewer}>
      <img
        className={"interviewers__item-image"}
        src={props.avatar}
        alt={props.name}  
      />
      {/* if selected is true, show the name */}
      {props.selected && props.name}
    </li>
  );

}