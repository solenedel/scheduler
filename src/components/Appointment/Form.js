import React, { useState } from 'react'
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {


  const [error, setError] = useState("");

  // set default states for interviewer and name

  // interviewer state
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  // name state
  
  const [name, setName] = useState(props.name || "");

 
  // the props.name is any hardcoded value we have in the test code

  // HELPER FUNCTIONS
  // reset: clears the student name entered in the form and 
  // deselects the currently selected interviewer
  const reset = () => {
    setName("");
    setInterviewer(null);
    // setError("");
  };

  // cancel will call reset and cancel
  const cancel = () => {
    reset();
    // setError("");
    props.onCancel();
  };

  // check for a blank student name
  const validate = () => {

    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }
    // setError("");
    props.onSave(name, interviewer);
  }


  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left"
      onSubmit={event => event.preventDefault()}         >
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            data-testid="student-name-input"
            // the name below references the first element of the array on line 10
            // set the input value attribute to the current name state
            value={name}
            placeholder="Enter Student Name"
            // e.target.value corresponds to the current input value
            onChange={(e) => setName(e.target.value)}
          // value={name} and onChange={(e) => setName(e.target.value)} turn the Form 
          // component into a controlled component
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList 
        interviewers={props.interviewers} 
        // if the interviewer state object exists, pass the interviewer.id as a prop called interviewerId
        //InterviewerList only needs the interviewer ID for now
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