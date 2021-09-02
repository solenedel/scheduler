import React, { useState } from "react";
nte
import DayListItem from "./DayListItem";
import DayList from "./DayList";
import InterviewerList from "./InterviewerList";


import "./Application.scss";

// mock data
const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];


export default function Application(props) {

  const [day, setDay] = useState("Monday");

  // by default: no interviewer selected
  // const [interviewer, setInterviewer] = useState("");

  return (
    <main className="layout">

      <section className="sidebar">
      <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList
        // /CREATE PROPS and pass them to DayList
          day={day}
          days={days}
          setDay={setDay}
        />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );

}
