import React from "react";
import "./styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
import { useVisualMode } from "hooks/useVisualMode";


export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CANCELLING = "CANCELLING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_DELETE = "ERROR_DELETE";
  const ERROR_SAVE = "ERROR_SAVE";
  

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
      .catch(() => transition(ERROR_SAVE, true));
  }

  const cancel = apptId => {

    transition(CANCELLING, true);

    props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true));

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
             onDelete={() => transition(CONFIRM)}
             onEdit={() => transition(EDIT)}
      /> )} 
      {mode === CREATE && <Form 
                            interviewers={props.interviewers} 
                            onCancel={() => back()} 
                            onSave={save} /> }       
      {mode === SAVING && <Status message="saving..."/>}
      {mode === CANCELLING && <Status message="cancelling..."/>}  
      {mode === CONFIRM && <Confirm
        message="are you sure you want to cancel this appointment?"
        onConfirm={cancel}
        onCancel={() => back()}
        />}     
      {mode === EDIT && <Form 
                          interviewers={props.interviewers} 
                          onCancel={() => back()} 
                          onSave={save}
                          name={props.interview.student}
                          interviewer={props.interview.interviewer} /> }             

      {mode === ERROR_DELETE && <Error
        onClose={() => back()}
        message="Could not delete appointment."
       />}
      {mode === ERROR_SAVE && <Error onClose={() => back()}
                                     message="Could not save the appointment" /> }
    </article>

  );
}
