import React from "react";
import "./styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import { useVisualMode } from "hooks/useVisualMode";


export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";


  // store a snapshot of the initial state on first page load
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY

  );
  

  return (

    <article className="appointment">
      <Header time={props.time} />
      {/* if mode is EMPTY, render EMPTY component. 
      if mode is SHOW, render SHOW component. */}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && ( 
       <Show student={props.interview.student} 
             interviewer={props.interview.interviewer} /> )} 
      {mode === CREATE && <Form interviewers={props.interviewers} onCancel={() => back()} />}                          
    </article>

  );
}
