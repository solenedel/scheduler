// ------------------------------------------ imports ----------------------------------- //

import axios from "axios";
import { useState, useEffect } from "react";
import { updateSpots } from "helpers/selectors";


// ------------------------------------- Hook: useApplicationData -------------------------------- //

// contains several helper functions to update states upon user interaction

function useApplicationData() {

  // object to store states

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });


  // ---------------------------------------- setDay -------------------------------------- //

  const setDay = day => setState({ ...state, day });


  // ---------------------------------- bookInterview -------------------------------------- //

  const bookInterview = (apptId, interview) => {

    const appointment = {
      ...state.appointments[apptId],
      interview: {...interview} 
    };

    const appointments = {
      ...state.appointments,
      [apptId]: appointment
    };

    const days = updateSpots(state, appointments);

    
    // request to database: add interview to interviews table
    return axios.put(
      `/api/appointments/${apptId}`, {interview}
    ).then(() => setState(prev => {
      return {
        ...prev,
        appointments,
        days
      }
    }));

  };


// ------------------------------- cancelInterview ---------------------------------- //

const cancelInterview = (apptId) => {

  const appointment = {
    ...state.appointments[apptId],
    interview: null 
  };

  const appointments = {
    ...state.appointments,
    [apptId]: appointment
  };

  const days = updateSpots(state, appointments);

  // request to database: delete interview from interviews table
  return axios.delete(`/api/appointments/${apptId}`)
          .then(res => {
            setState(prev => {
              return {
                ...prev,
                appointments,
                days
              }
            });
          });
};


// --------------------------------- useEffect ---------------------------------- //

  // request days, appointments and interviews data. The promise resolves when all get requests are complete.

  useEffect(() => {

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

  return {state, setDay, bookInterview, cancelInterview};

}


// export the hook function
export default useApplicationData;