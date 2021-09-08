import axios from "axios";
import { useState, useEffect } from "react";


function useApplicationData() {

  // object to store states
  const [state, setState] = useState({
    day: "Monday", 
    days: [], 
    appointments: {},
    interviewers: {}
  });

  
  // -------------- setDay ----------------------- //

  const setDay = day => setState({ ...state, day });

  // -------------- bookInterview ----------------------- //
  
  const bookInterview = (apptId, interview) => {
    console.log('bookInterview: ', apptId, interview);

    // create an appointment object from spreading the original appointment object in state.appointments with id apptId, then overwrite the interview property with the newly created interview object
    const appointment = {
      ...state.appointments[apptId],
      interview: {...interview} //update the interview key with the new interview
    };

    // create an appointments object with the already existing appointments, and 
    // add the newest appointment object to it
    const appointments = {
      ...state.appointments, 
      [apptId]: appointment 
    };

    // request to database- add interview object to interviews table 
    return axios.put(
      `/api/appointments/${apptId}`, {interview}
    ).then(() => setState(prev => {
      return {
        ...prev,
        appointments
      }
    }));
    
  };

// ---------------- cancelInterview ----------------------- //


const cancelInterview = (apptId) => {
    
  const appointment = {
    ...state.appointments[apptId],
    interview: null //change interview to null
  };

  const appointments = {
    ...state.appointments, 
    [apptId]: appointment 
  };

  return axios.delete(`/api/appointments/${apptId}`)
          .then(res => {
            console.log('delete: res', res) 
            setState(prev => {
              return {
                ...prev, 
                appointments
              }
            })
          })
};


// ---------------------------- useEffect ----------------------------- //

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


  return {state, setDay, bookInterview, cancelInterview};
}

export default useApplicationData;