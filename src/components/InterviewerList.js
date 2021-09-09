// -------------------------------- Imports ---------------------------- //
import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from 'prop-types';

// -------------------------------- Component function: InterviewerList ---------------------------- //

export default function InterviewerList(props) {
  
  // validate the interviewers props: check that it's an array and required
  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  };

  // interviewerList contains many InterviewerListItems, which are returned in this map function.
  const interviewerListItems = props.interviewers && props.interviewers.map(interviewer => {

    return (
      <InterviewerListItem 
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewerId}
        setInterviewer={() => props.setInterviewer(interviewer)}
      />
    );

  });


  // ---------------------- InterviewerList component ------------------------ //

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">interviewer</h4>
      <ul className="interviewers__list">{interviewerListItems}</ul>
    </section>
  );

}