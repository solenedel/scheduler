import React, { useState } from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";


export default function InterviewerListItem(props) {

  const classnames = require("classnames");

  // add key to prop???
  const { id, name, avatar, selected, setInterviewer } = props;

  const interviewerListItemClass = classnames("interviewers", {
    "interviewers__item--selected": props.selected
  });


  return (
    <li className={interviewerListItemClass}
        onClick={props.onClick}>
      <img
        className={"interviewers__item-image"}
        src={props.avatar}
        alt={props.name}  
      />
      {props.name}
    </li>
  );

}