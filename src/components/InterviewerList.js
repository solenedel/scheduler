import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from 'prop-types';


export default function InterviewerList(props) {
  
  // validate the interviewers props: check that it's an array and required
  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  };

  // makes sure that interviewers is truthy, and that we have access to them
  const interviewerListItems = props.interviewers && props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem 
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewerId}
        //setInterviewer prop is an anon function that returns the return value of props.setInterviewer(interviewer.id) (which is the real function that changes the state)
        setInterviewer={() => props.setInterviewer(interviewer)}
      />
    )
  });


  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">interviewer</h4>
      <ul className="interviewers__list">{interviewerListItems}</ul>
    </section>
  );

}