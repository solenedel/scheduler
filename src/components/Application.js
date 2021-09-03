// -------------------- Dependencies / Setup ------------------- //

import React, { useState, useEffect } from "react";
import axios from "axios";
import DayList from "./DayList";
import Appointment from "components/Appointment";
import { getAppointmentsForDay } from "helpers/selectors";
import "./Application.scss";

// ------------------------- Test Data ------------------------- //


// -------------------------- FUNCTION: Application component --------------------------- //

export default function Application(props) {

  // object to store states
  const [state, setState] = useState({
    day: "Monday", 
    days: [], 
    appointments: {},
    interviewers: {}
  });

  console.log('state: ', state);
  console.log('state.interviewers', state.interviewers);

  // request days and appointments data. The promise resolves when both get requests are complete.
  useEffect(() => {
    // Promise.all returns an array of the responses from each request
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then(response => {
        setState(prev => {
         
          return {
            ...prev,
            days: response[0].data,
            appointments: response[1].data,
            interviewers: response[2].data
          };

        });
    }).catch(response => console.log('Error: ', response.message));
  }, []);

  // TEST 
 

  // call function to get the appointments for a certain day depending on the
  // state of the selected day
  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const interview = getInterview(state, appointment.interview);

  const setDay = day => setState({ ...state, day });
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
          
          return (
            <Appointment
              key={appointment.id}
              id={appointment.id} 
              time={appointment.time}
              interview={interview}
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
