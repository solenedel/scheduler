// -------------------------------- Imports ---------------------------- //

import React, { useState } from 'react'
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";


// -------------------------------- Component function: Form ---------------------------- //

export default function Form(props) {

  // set default states
  const [error, setError] = useState("");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [name, setName] = useState(props.name || "");

 // ------------------------- reset function -------------------------- //
  
 // resets the student name, interviewer and error
 const reset = () => {
    setName("");
    setInterviewer(null);
    setError("");
  };

  // ------------------------- cancel function -------------------------- //
  
  // calls reset and cancels interview
  const cancel = () => {
    reset();
    setError("");
    props.onCancel();
  };

  // ------------------------- validate function -------------------------- //

  // checks for a blank student name- a blank name is not valid.
  const validate = () => {

    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }

    setError("");
    props.onSave(name, interviewer);
  }

   // ------------------------- Form component -------------------------- //

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left"
      onSubmit={event => event.preventDefault()} >
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            data-testid="student-name-input"
            value={name}
            placeholder="Enter Student Name"
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList 
        interviewers={props.interviewers} 
        interviewerId={interviewer && interviewer.id} 
        setInterviewer={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => validate()}>Save</Button>
        </section>
      </section>
    </main>
  );
}