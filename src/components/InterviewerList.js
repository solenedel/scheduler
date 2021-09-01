import React, { useState } from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";


export default function InterviewerList(props) {

  
  // const { interviewers, interviewer, setInterviewer } = props;

  // makes sure that interviewers is truthy, and that we have access to them
  const interviewerListItems = props.interviewers && props.interviewers.map(interviewer => {
    return <InterviewerListItem 
            key={interviewer.id}
            // id={interviewer.id}
            name={interviewer.name}
            avatar={interviewer.avatar}
            setInterviewer={() => props.setInterviewer()}
            selected={interviewer.id === props.interviewer}
            />

  });


  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">interviewer</h4>
      <ul className="interviewers__list">{interviewerListItems}</ul>
    </section>
  );

}