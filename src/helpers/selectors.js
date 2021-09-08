
// returns an array of appointments for that day
function getAppointmentsForDay(state, dayName) {
  
  const dailyAppointments = [];

    // loop through the days array in the state object
    // forEach checks that there are items in an array
  state.days.forEach(day => {

    if (day.name === dayName) {

     // iterate thru the appointments array in each DAY object
      day.appointments.forEach(appointment => {

        // lookup the object with that name and push to the dailyAppointments array
          dailyAppointments.push(state.appointments[appointment]);
      });  
    }
  });
    return dailyAppointments; 
};



// returns an array of interviewers for that day
function getInterviewersForDay(state, dayName) {
  
  const interviewers = [];

    // loop through the days array in the state object
    // forEach checks that there are items in an array
  state.days.forEach(day => {


    if (day.name === dayName) {

     // iterate thru the appointments array in each DAY object
      day.interviewers.forEach(interviewer => {

    

        // lookup the object with that name and push to the dailyAppointments array
          interviewers.push(state.interviewers[interviewer]);
      });
    }
  });
    return interviewers; 
};


//  return an object that contains the interview data if it is passed an object that contains an interviewer.
function getInterview(state, interview) {

  // if interview is not null
 if (interview) {

  return {
    student: interview.student,
    interviewer: {...state.interviewers[interview.interviewer]}
  }
 }
  return null;
}

//------------------------- countEmptySpots ------------------------------ //

const countEmptySpots = (appointments, day) => {
  let emptySpots = 0;

  for (const appointment of day.appointments) {
    
    if (appointments[appointment].interview === null) {
      emptySpots ++;
    }
  }

  return emptySpots;
};

// --------------------------------- updateSpots ----------------------------- //

// create days array without mutating original
const updateSpots = function(state, appointments) {

  const days = [...state.days];

  const day = {...days.find(day => day.name === state.day)};

  // calculate & update new spots for that day
  day.spots = countEmptySpots(appointments, day);

  days.splice(day.id - 1, 1, day);

  return days;
};



// ----------------- Exported functions -------------------- //
export {getAppointmentsForDay, getInterview, getInterviewersForDay, countEmptySpots, updateSpots};

// module.exports = {getAppointmentsForDay};
//1. export default --> to import default export, need to import without curly braces