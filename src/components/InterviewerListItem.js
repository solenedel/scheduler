import React from "react";
import "./InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });

  const clickHandler = () => {
    console.log('clicked');
    props.setInterviewer();
  }


  return (
    <li className={interviewerClass}
        onClick={clickHandler}>
          {/* register setInterviewer prop as the onClick handler*/}
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}  
      />
      {/* if selected is true, show the name */}
      {props.selected && props.name}
    </li>
  );

}