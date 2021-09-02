import React, { useState } from 'react'
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {

  // set default states for interviewer and name

  // interviewer state
  const [interviewer, setInterviewer] = useState(null);

  // name state
  const [name, setName] = useState("");


  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            // the name below references the first element of the array on line 10
            // set the input value attribute to the current name state
            // value={name} 
            value={name}
            placeholder="Enter Student Name"
            // every time there is a new change in the input, the component will re-render
            // for every change in the name value, and set the value to the new {name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        <InterviewerList 
        interviewers={props.interviewers} 
        value={interviewer} 
        setInterviewer={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={props.onCancel}>Cancel</Button>
          <Button confirm onClick={props.onSave}>Save</Button>
        </section>
      </section>
    </main>
  );
}