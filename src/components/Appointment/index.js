import React from "react";
import "./styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import Status from "./Status";
import Confirm from "./Confirm";
import { useVisualMode } from "hooks/useVisualMode";


export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CANCELLING = "CANCELLING";
  const CONFIRM = "CONFIRM";

  // store a snapshot of the initial state on first page load
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = (name, interviewer) => {
    // newly created interview
    const interview = {
      student: name,
      interviewer: interviewer.id
    };

    transition(SAVING);

    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
  }

  const cancel = apptId => {

    transition(CANCELLING);

    props.cancelInterview(props.id)
      .then(() => transition(EMPTY));

  } 
   

  return (

    <article className="appointment">
      <Header time={props.time} />
      {/* if mode is EMPTY, render EMPTY component. 
      if mode is SHOW, render SHOW component. */}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && ( 
       <Show student={props.interview.student} 
             interviewer={props.interview.interviewer}
             onDelete={() => transition(CONFIRM)} /> )} 
      {mode === CREATE && <Form 
                            interviewers={props.interviewers} 
                            onCancel={() => back()} 
                            onSave={save} /> }       
       {mode === SAVING && <Status message="saving..."/>}
      {mode === CANCELLING && <Status message="cancelling..."/>}  
      {mode === CONFIRM && <Confirm
        message="are you sure you want to cancel this appointment?"
        onConfirm={cancel}
        />}                 
    </article>

  );
}
