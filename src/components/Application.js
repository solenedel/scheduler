// -------------------- Dependencies / Setup ------------------- //

import React from "react";
import DayList from "./DayList";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import "./Application.scss";
import useApplicationData from "hooks/useApplicationData";

// -------------------------- FUNCTION: Application component --------------------------- //

export default function Appointment(props) {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  console.log('state', state);
  
  
  // call function to get the appointments for a certain day depending on the
  // state of the selected day
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  
  //const setDays = days => setState(prev => ({ ...prev, days }));

  // JSX to be returned by the component function
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
        // CREATE PROPS and pass them to DayList
          day={state.day}
          days={state.days}
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
        {dailyAppointments.map(appointment => {

          const interview = getInterview(state, appointment.interview);

          return (
            <Appointment
              key={appointment.id}
              id={appointment.id} 
              time={appointment.time}
              interview={interview}
              interviewers={getInterviewersForDay(state, state.day)}
              bookInterview={bookInterview}
              cancelInterview={cancelInterview}
              />
          );
        })} 

        {/* the appointment below is a fake and is not rendered. It is just used to 
        display the end of the day without any interviews */}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );

  // end of Application component function 
}
