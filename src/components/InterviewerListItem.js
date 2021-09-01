import React, { useState } from "react";
import "./InterviewerListItem.scss";
import classNames from "classnames";



export default function InterviewerListItem(props) {



  const { name, avatar, selected, setInterviewer } = props;

  const interviewerListItemClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected
  });


  return (
    <li className={interviewerListItemClass}
        onClick={setInterviewer}>
      <img
        className={"interviewers__item-image"}
        src={avatar}
        alt={name}  
      />
      {/* if selected is true, show the name */}
      {selected && name}
    </li>
  );

}