import React from "react";
import "./styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import { useVisualMode } from "hooks/useVisualMode";


export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";

  return (

    <article className="appointment">
      <Header time={props.time} />
      {/* if props.interview is truthy, render ths Show component. Else, render Empty */}
      {props.interview ? <Show student={props.interview.student} 
                               interviewer={props.interview.interviewer} /> 
                               : <Empty />}
    </article>

  );
}
