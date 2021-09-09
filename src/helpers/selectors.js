
// ----------------------------------- getAppointmentsForDay ------------------------------ //

// returns an array of appointments for that day.

function getAppointmentsForDay(state, dayName) {
  
  const dailyAppointments = [];

  state.days.forEach(day => {

    if (day.name === dayName) {

      day.appointments.forEach(appointment => {
        dailyAppointments.push(state.appointments[appointment]);
      });  
    }
  });
  return dailyAppointments; 
};


// ----------------------------------- getInterviewersForDay ------------------------------ //

// returns an array of interviewers for that day.

function getInterviewersForDay(state, dayName) {
  
  const interviewers = [];

  state.days.forEach(day => {

    if (day.name === dayName) {

      day.interviewers.forEach(interviewer => {
          interviewers.push(state.interviewers[interviewer]);
      });
    }
  });
  return interviewers; 
};



// ----------------------------------------- getInterview ------------------------------------- //

//  returns an object that contains the interview data, if it is passed an object that contains an interviewer.

function getInterview(state, interview) {

 if (interview) {

  return {
    student: interview.student,
    interviewer: {...state.interviewers[interview.interviewer]}
  }

 }
  return null;
}


//---------------------------------------- countEmptySpots -------------------------------------- //

// counts the number of interview spots available for a given day.

const countEmptySpots = (appointments, day) => {
  let emptySpots = 0;

  for (const appointment of day.appointments) {
    
    if (appointments[appointment].interview === null) {
      emptySpots ++;
    }
  }

  return emptySpots;
};


// ----------------------------------------- updateSpots -------------------------------------- //

// updates the interview spots available after a new interview is booked.

const updateSpots = function(state, appointments) {

  const days = [...state.days];

  const day = {...days.find(day => day.name === state.day)};

  day.spots = countEmptySpots(appointments, day);

  days.splice(day.id - 1, 1, day);

  return days;
};


// --------------------------------- Exported functions -------------------------------------- //

export {getAppointmentsForDay, getInterview, getInterviewersForDay, countEmptySpots, updateSpots};

