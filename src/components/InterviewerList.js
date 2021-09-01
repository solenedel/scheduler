import React, { useState } from "react";
import "components/InterviewerList.scss";
import classNames from "classnames";
import InterviewerListItem from "components/InterviewerListItem";


export default function InterviewerList(props) {

  const classnames = require("classnames");

  const { interviewers, interviewer, setInterviewer } = props;


  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list"></ul>
    </section>
  );

}