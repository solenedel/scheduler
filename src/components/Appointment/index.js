import React from "react";
import "./styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import { useVisualMode } from "hooks/useVisualMode";


export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";

  // store a snapshot of the initial state on first page load
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  

  return (

    <article className="appointment">
      <Header time={props.time} />
      {/* if mode is EMPTY, render EMPTY component. 
      if mode is SHOW, render SHOW component. */}
      {mode === EMPTY && <Empty onAdd={() => console.log("Clicked onAdd")} />}
      {mode === SHOW && ( 
       <Show student={props.interview.student} 
             interviewer={props.interview.interviewer} /> )}                           
    </article>

  );
}
